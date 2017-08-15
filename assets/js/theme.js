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

jQuery(document).ready(function($) {
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
});
