function _to_number(string) {
    if (typeof string === 'number') { return string; }
    var n = string.match(/\d+$/);
    if (n) { return parseFloat(n[0]); } else { return 0; }
}

function _to_bool(v) {
    if (typeof v === 'boolean') { return v; }
    if (typeof v === 'number') { return v === 0 ? false : true; }
    if (typeof v === 'string') { if (v === 'true' || v === '1') { return true; } else { return false; } }
    return false;
}

(function() {
    var is_webkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1,
        is_opera = navigator.userAgent.toLowerCase().indexOf('opera') > -1,
        is_ie = navigator.userAgent.toLowerCase().indexOf('msie') > -1;
    if ((is_webkit || is_opera || is_ie) && document.getElementById && window.addEventListener) {
        window.addEventListener('hashchange', function() {
            var id = location.hash.substring(1),
                element;
            if (!(/^[A-z0-9_-]+$/.test(id))) { return; }
            element = document.getElementById(id);
            if (element) {
                if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) { element.tabIndex = -1; }
                element.focus();
            }
        }, false);
    }
})();

function buildScrollSpy() {
    let h2 = $('.documentation main').find('h2[id]');
    let html = '';

    if (h2.length) {
        h2.each(function() {
            html += `
    <li class="toc-entry toc-h2">
        <a href="#${ this.id }">
            ${ $(this).clone().children().remove().end().text() }
        </a>
    </li>`;
        });

        $('#scrollSpyNav .section-nav').html(html);
        $('.documentation main').scrollspy({ target: '#scrollSpyNav' });
    }
}

$(document).ready(function($) {
    var isMobile = { Android: function() { return navigator.userAgent.match(/Android/i); }, BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

    var is_top_header = $('.site-header').length ? true : false;
    $('.site-header').eq(0).wrap('<div class="site-header-wrapper">');
    var is_transparent = $('body').hasClass('header-transparent');
    $wrap = $('.site-header-wrapper');
    $wrap.addClass('no-scroll');
    if (!is_top_header) { $('body').removeClass('header-transparent'); }
    var header_fixed = $('.site-header').eq(0);

    $(document).scroll(function() {
        var header_parent = header_fixed.parent();
        var p_to_top = header_parent.offset().top;
        var st = $(document).scrollTop();
        var header_h = header_fixed.height() || 0;
        $wrap.height('');
        if (!is_transparent) { $wrap.height(header_h); }
        if (st > p_to_top && st > 0) {
            $wrap.addClass('is-fixed').removeClass('no-scroll');
            header_fixed.addClass('header-fixed');
        } else {
            header_fixed.removeClass('header-fixed');
            $wrap.removeClass('is-fixed').addClass('no-scroll');
        }
    });

    var mobile_max_width = 1140;
    var main_navigation = $('.main-navigation .onepress-menu');
    var stite_header = $('.site-header');
    $('#nav-toggle').on('click', function(event) {
        event.preventDefault();
        $('#nav-toggle').toggleClass('nav-is-visible');
        main_navigation.toggleClass("onepress-menu-mobile");
        $('.header-widget').toggleClass("header-widget-mobile");
        if (main_navigation.hasClass('onepress-menu-mobile') && $(window).width() <= mobile_max_width) {
            var h = $(window).height() - stite_header.height();
            main_navigation.css({ height: h, overflow: 'auto', });
        } else { main_navigation.removeAttr('style'); }
    });
    $(window).resize(function() {
        if (main_navigation.hasClass('onepress-menu-mobile') && $(window).width() <= mobile_max_width) {
            var h = $(window).height() - stite_header.height();
            main_navigation.css({ height: h, overflow: 'auto', });
        } else { main_navigation.removeAttr('style'); }
    });
    $('.onepress-menu li.menu-item-has-children, .onepress-menu li.page_item_has_children').each(function() { $(this).prepend('<div class="nav-toggle-subarrow"><i class="fa fa-angle-down"></i></div>'); });
    $('.nav-toggle-subarrow, .nav-toggle-subarrow .nav-toggle-subarrow').click(function() { $(this).parent().toggleClass("nav-toggle-dropdown"); });
    var h;
    window.current_nav_item = false;
    $('.home #site-navigation li a[href*="#"]').on('click', function(event) {
        event.preventDefault();
        if ($('.onepress-menu').hasClass('onepress-menu-mobile')) { $('#nav-toggle').trigger('click'); }
        smoothScroll($(this.hash));
    });

    function setNavActive(currentNode) {
        if (currentNode) {
            currentNode = currentNode.replace('#', '');
            if (currentNode)
                $('#site-navigation li').removeClass('onepress-current-item');
            if (currentNode) { $('#site-navigation li').find('a[href$="#' + currentNode + '"]').parent().addClass('onepress-current-item'); }
        }
    }

    function inViewPort($element, offset_top) {
        if (!offset_top) { offset_top = 0 }
        var view_port_top = $(window).scrollTop();
        var view_port_h = $('body').outerHeight();
        var el_top = $element.offset().top;
        var eh_h = $element.height();
        var el_bot = el_top + eh_h;
        var view_port_bot = view_port_top + view_port_h;
        var all_height = $('body')[0].scrollHeight;
        var max_top = all_height - view_port_h;
        var in_view_port = false;
        if (view_port_top >= max_top) { if ((el_top < view_port_top && el_top > view_port_bot) || (el_top > view_port_top && el_bot < view_port_top)) { in_view_port = true; } } else { if (el_top <= view_port_top + offset_top) { if (el_bot > view_port_top) { in_view_port = true; } } }
        return in_view_port;
    }
    var _scroll_top = $(window).scrollTop();
    /* $(window).scroll(function() {
        var currentNode = null;
        if (!window.current_nav_item) {
            var current_top = $(window).scrollTop();
            if (_scroll_top < current_top) { $('section').each(function(index) { var section = $(this); var currentId = section.attr('id') || ''; var in_vp = inViewPort(section, h + 10); if (in_vp) { currentNode = currentId; } }); } else { var ns = jQuery('section').length; for (var i = ns - 1; i >= 0; i--) { var section = jQuery('section').eq(i); var currentId = section.attr('id') || ''; var in_vp = inViewPort(section, h + 10); if (in_vp) { currentNode = currentId; } } }
            _scroll_top = current_top;
        } else { currentNode = window.current_nav_item.replace('#', ''); }
        setNavActive(currentNode);
    }); */
    // $(window).load(function() { var urlCurrent = location.hash; if ($(urlCurrent).length > 0) { smoothScroll(urlCurrent); } });
    $('.hero-slideshow-wrapper a[href*="#"]:not([href="#"]), .parallax-content a[href*="#"]:not([href="#"]), .back-top-top').on('click', function(event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function smoothScroll(element) {
        if (element.length <= 0) { return false; }
        $("html, body").animate({ scrollTop: ($(element).offset().top - h) + "px" }, { duration: 800, easing: "swing", complete: function() { window.current_nav_item = false; } });
    }
    if ($('.landing-page')) {
        $('.site-branding .site-brand-inner').on('click', function(e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: "0px" }, { duration: 300, easing: "swing" });
        });
    }
    if (isMobile.any()) { $('body').addClass('body-mobile').removeClass('body-desktop'); } else { $('body').addClass('body-desktop').removeClass('body-mobile'); }

    var lastScrollTop = 0;
    /* $(window).scroll(function(e) {
        var top = $(window).scrollTop();
        var direction = '';
        if (top > lastScrollTop) { direction = 'down'; } else { direction = 'up'; }
        lastScrollTop = top;
    }); */
    $(window).resize(function() {});
    setTimeout(function() { $(window).trigger('scroll'); }, 500);

    if ($('.documentation')) {
        buildScrollSpy();
    }

});