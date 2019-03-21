/**
 * Copy the content of a input tag to clipboard
 * @param any element
 * @return void
 */
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

/**
 * Scroll the DOM so that the element is in view
 * @param any element
 * @return void
 */
function smoothScroll(element) {
    var headerSize = $('header#masthead').height();
    if (element.length <= 0) {
        return false;
    }
    $("html, body").animate({
        scrollTop: ($(element).offset().top - headerSize) + "px"
    }, {
        duration: 800,
        easing: "swing",
    });
}

$(document).ready(function () {

    /**
     * Move the DOM to see an element if provided by Hash
     */
    if ($(location.hash) > 0) {
        window.scrollTo(0, 0);
        smoothScroll($(location.hash));
    }

    var is_top_header = $('.site-header').length ? true : false;
    $('.site-header').eq(0).wrap('<div class="site-header-wrapper">');
    var is_transparent = $('body').hasClass('header-transparent');
    $wrap = $('.site-header-wrapper');
    $wrap.addClass('no-scroll');
    if (!is_top_header) {
        $('body').removeClass('header-transparent');
    }
    var header_fixed = $('.site-header').eq(0);

    $('#nav-toggle').on('click', function (event) {
        event.preventDefault();
        $('#nav-toggle').toggleClass('nav-is-visible');
        $('ul.onepress-menu').toggleClass('nav-is-visible');
    });
    $('.nav-toggle-subarrow').click(function () {
        $(this).parent().toggleClass("nav-toggle-dropdown");
    });

    /**
     * Use smoothScroll for links that navigate inside the same page
     */
    $('a[href^="#"]:not([href="#"]), a.inpage-navigation[href*="#"]').on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    $(window).resize(function () {});
    setTimeout(function () {
        $(window).trigger('scroll');
    }, 500);

    $('[data-toggle="slide-collapse"]').on('click', function () {
        $navMenuCont = $($(this).data('target'));
        $navMenuCont.animate({
            'width': 'toggle'
        }, 350);
    });

    $('pre code').parent().wrap('<div class="code_block"></div>').each(function (k, v) {
        let language = "";
        if ($(v).children('code').hasClass('language-powershell')) {
            language = "PowerShell";

            $(v).before(`
                <div class="code_head">
                    <span class="">${language}</span>
                    <button class="action copy"><i class="far fa-clone"></i> Copy</button>
                </div>
            `);
            $(v).addClass('console');
        }
    });

    $('button.action.copy').on('click', function () {
        console.log("copying:", $(this).parents('div.code_block').find('code'));
        copyToClipboard($(this).parents('div.code_block').find('code'));
    });

    /**
     * Remove Powershell help specific dashes on H3 of examples
     */
    $('h3').each(function () {
        let text = $(this).text();
        text = text.replace(/[–—]/g, "");
        $(this).text(text);
    });

    anchors.add('.documentation .content h2, .documentation .content h3, .documentation .content h4, .documentation .content h5, .documentation .content h6');

    $('a[data-toggle="collapse"]').on('click', function () {
        $(this).parent().parent().find('.panel-collapse').toggle();
    });

    // $('.bd-toc-link').click(function (event) {
    //     event.preventDefault();
    //     $(this).parent().find('.nav.bd-sidenav').toggle();
    // })

    $("#small-nav-dropdown").change(function () {
        if ($(this).val() != '') {
            window.location.href = $(this).val();
        }
    });

    $("ul.nav.toc").toc({
        content: "section.content",
        headings: "h1,h2,h3"
    });

    $('ul.nav.toc li').addClass('nav-item toc-entry');
    $('ul.nav.toc li a').addClass('nav-link');

    $('body').scrollspy({ target: 'ul.nav.toc' });
});
