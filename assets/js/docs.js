$(function() {
    /*!
     * JavaScript for Bootstrap's docs (http://getbootstrap.com)
     * Copyright 2011-2014 Twitter, Inc.
     * Licensed under the Creative Commons Attribution 3.0 Unported License. For
     * details, see http://creativecommons.org/licenses/by/3.0/.
     */
    ! function(a) {
        a(function() {
            if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
                var b = document.createElement("style");
                b.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.querySelector("head").appendChild(b)
            } {
                var c = a(window),
                    d = a(".documentation main");
                a(".navbar").outerHeight(!0) + 10
            }
            d.scrollspy({
                target: "#scrollSpyNav"
            }), c.on("load", function() {
                d.scrollspy("refresh")
            });
            /* , setTimeout(function() {
                            var b = a("#scrollSpyNav");
                            b.affix({
                                offset: {
                                    top: function() {
                                        var c = b.offset().top,
                                            d = parseInt(b.children(0).css("margin-top"), 10),
                                            e = a("#masthead").height();
                                        return this.top = c - e - d
                                            // },
                                            // bottom: function() {
                                            //     return this.bottom = a(".bs-docs-footer").outerHeight(!0)
                                    }
                                }
                            })
                        }, 100), setTimeout(function() {
                            a(".bs-top").affix()
                        }, 100) */
        });
    }(jQuery);
});