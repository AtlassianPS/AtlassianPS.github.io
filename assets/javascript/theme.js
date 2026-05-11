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
        duration: 280,
        easing: "swing",
    });
}

$(document).ready(function () {

    /**
     * Move the DOM to see an element if provided by Hash
     */
    if (location.hash && $(location.hash).length > 0) {
        window.scrollTo(0, 0);
        smoothScroll($(location.hash));
    }

    var hasTopHeader = $('.site-header').length > 0;
    $('.site-header').eq(0).wrap('<div class="site-header-wrapper">');
    var $wrap = $('.site-header-wrapper');
    $wrap.addClass('no-scroll');
    if (!hasTopHeader) {
        $('body').removeClass('header-transparent');
    }

    var $navToggle = $('#nav-toggle');
    var $mainMenu = $('ul.onepress-menu');
    var setNavExpanded = function (expanded) {
        $navToggle.attr('aria-expanded', expanded ? 'true' : 'false');
    };
    var closeNavMenu = function () {
        $navToggle.removeClass('nav-is-visible');
        $mainMenu.removeClass('nav-is-visible');
        setNavExpanded(false);
    };

    setNavExpanded($navToggle.hasClass('nav-is-visible'));
    $navToggle.on('click', function () {
        $navToggle.toggleClass('nav-is-visible');
        $mainMenu.toggleClass('nav-is-visible');
        setNavExpanded($navToggle.hasClass('nav-is-visible'));
    });

    $(document).on('keyup', function (event) {
        if (event.key === 'Escape') {
            closeNavMenu();
        }
    });

    $(window).on('resize', function () {
        if (window.matchMedia('(min-width: 1141px)').matches) {
            closeNavMenu();
        }
    });

    $('.nav-toggle-subarrow').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().toggleClass("nav-toggle-dropdown");
    });

    /**
     * Use smoothScroll for links that navigate inside the same page
     */
    $('a[href^="#"]:not([href="#"]), a.inpage-navigation[href*="#"]').on('click', function (event) {
        var linkHref = this.getAttribute('href') || '';
        var isHashOnlyLink = linkHref.charAt(0) === '#';
        var currentPath = window.location.pathname.replace(/\/+$/, '');
        var targetPath = this.pathname.replace(/\/+$/, '');
        var isSamePageInpageLink = $(this).hasClass('inpage-navigation') && targetPath === currentPath;
        var $target = this.hash ? $(this.hash) : $();

        if ((!isHashOnlyLink && !isSamePageInpageLink) || $target.length === 0) {
            return;
        }

        event.preventDefault();
        smoothScroll($target);
    });

    $('[data-toggle="slide-collapse"]').on('click', function () {
        var $navMenuCont = $($(this).data('target'));
        $navMenuCont.animate({
            'width': 'toggle'
        }, 350);
    });

    $('pre code').parent().each(function (k, v) {
        if ($(v).closest('.hero-quickstart').length > 0) {
            return;
        }

        $(v).wrap('<div class="code_block"></div>');
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
        var $code = $(this).parents('div.code_block').find('code');
        copyToClipboard($code);
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
        var targetUrl = $(this).val();
        if (targetUrl !== '') {
            window.location.href = targetUrl;
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
