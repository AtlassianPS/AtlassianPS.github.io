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

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
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
    let h1 = $('.documentation main').find('h1[id]'),
        h2 = $('.documentation main').find('h2[id]'),
        relevantHeader = h2,
        html = '';

    if (h1.length > 1) {
        relevantHeader = h1;
    }

    if (relevantHeader.length) {
        relevantHeader.each(function() {
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
// $(window).load(function () {
//     debugger;
//     let urlCurrent = $(location.hash);
//     smoothScroll(urlCurrent);
// });

$(document).ready(function() {
    if ($(location.hash) > 0) {
        window.scrollTo(0, 0);
        smoothScroll($(location.hash));
    }
    // debugger;
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
    var site_header = $('.site-header');
    $('#nav-toggle').on('click', function(event) {
        event.preventDefault();
        $('#nav-toggle').toggleClass('nav-is-visible');
        main_navigation.toggleClass("onepress-menu-mobile");
        $('.header-widget').toggleClass("header-widget-mobile");
        if (main_navigation.hasClass('onepress-menu-mobile') && $(window).width() <= mobile_max_width) {
            var h = $(window).height() - site_header.height();
            main_navigation.css({ height: h, overflow: 'auto', });
        } else { main_navigation.removeAttr('style'); }
    });
    $(window).resize(function() {
        if (main_navigation.hasClass('onepress-menu-mobile') && $(window).width() <= mobile_max_width) {
            var h = $(window).height() - site_header.height();
            main_navigation.css({ height: h, overflow: 'auto', });
        } else { main_navigation.removeAttr('style'); }
    });
    $('.onepress-menu li.menu-item-has-children, .onepress-menu li.page_item_has_children').each(function() { $(this).prepend('<div class="nav-toggle-subarrow"><i class="fa fa-angle-down"></i></div>'); });
    $('.nav-toggle-subarrow, .nav-toggle-subarrow .nav-toggle-subarrow').click(function() { $(this).parent().toggleClass("nav-toggle-dropdown"); });
    var h;
    window.current_nav_item = false;

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

    $('a[href*="#"]:not([href="#"]), a.inpage-navigation[href*="#"]').on('click', function(event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function smoothScroll(element) {
        let headerSize = $('header#masthead').height();
        if (element.length <= 0) { return false; }
        debugger;
        $("html, body").animate({
            scrollTop: ($(element).offset().top - headerSize) + "px"
        }, {
            duration: 800,
            easing: "swing",
            complete: function() { window.current_nav_item = false; }
        });
    }

    if (isMobile.any()) { $('body').addClass('body-mobile').removeClass('body-desktop'); } else { $('body').addClass('body-desktop').removeClass('body-mobile'); }

    $(window).resize(function() {});
    setTimeout(function() { $(window).trigger('scroll'); }, 500);

    if ($('.documentation')) {
        buildScrollSpy();
    }

    $('[data-toggle="slide-collapse"]').on('click', function() {
        $navMenuCont = $($(this).data('target'));
        $navMenuCont.animate({ 'width': 'toggle' }, 350);
    });

    let wrapper = $('pre code').parent().parent().wrap('<div class="code_block"></div>');
    wrapper.each(function(k, v) {
        let language = "";
        if ($(v).hasClass('language-powershell')) {
            language = "PowerShell";
        } else if ($(v).hasClass('language-yaml')) {
            language = "YAML";
        }

        if (language) {
            $(v).before(`
                <div class="code_head">
                    <span class="">${language}</span>
                    <button class="action copy"> Copy</button>
                </div>
            `);
        }    
    });

    $('button.action.copy').on('click', function() {
        copyToClipboard($(this).parents('.code_block').find('code'))
    });

});
