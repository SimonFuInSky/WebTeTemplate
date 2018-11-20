'use strict';

// Cache
var body = $('body');
var mainSlider = $('#main-slider');
var partnersCarousel = $('#partners');
var partnersCarouselAlt = $('#partners-alt');
var testimonialsCarousel = $('#testimonials');
var testimonialsCarouselAlt = $('#testimonials-alt');
var isotopeContainer = $('.isotope');
var isotopeFiltrable = $('#filtrable a');
var toTop = $('#to-top');
var navigation = $('.navigation');
var superfishMenu = $('ul.sf-menu');

// Slide in/out with fade animation function
jQuery.fn.slideFadeToggle = function (speed, easing, callback) {
    return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};
jQuery.fn.slideFadeIn = function (speed, easing, callback) {
    return this.animate({opacity: 'show', height: 'show'}, speed, easing, callback);
};
jQuery.fn.slideFadeOut = function (speed, easing, callback) {
    return this.animate({opacity: 'hide', height: 'hide'}, speed, easing, callback);
};

// Animation on Scroll
function initAnimation() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile == false) {
        $('*[data-animation]').addClass('animated');
        $('.animated').waypoint(function (down) {
            var elem = $(this);
            var animation = elem.data('animation');
            if (!elem.hasClass('visible')) {
                var animationDelay = elem.data('animation-delay');
                if (animationDelay) {
                    setTimeout(function () {
                        elem.addClass(animation + ' visible');
                    }, animationDelay);
                } else {
                    elem.addClass(animation + ' visible');
                }
            }
        }, {
            offset: $.waypoints('viewportHeight')
            //offset: 'bottom-in-view'
            //offset: '95%'
        });
    }
}

jQuery(document).ready(function () {
    
    // Prevent empty links
    // ---------------------------------------------------------------------------------------
    $('a[href=#]').on('click', function (event) {
        event.preventDefault();
    });
    
    // Sticky header/menu
    // ---------------------------------------------------------------------------------------
    if ($().sticky) {
        $('.header.fixed').sticky({topSpacing: 0});
        //$('.header.fixed').on('sticky-start', function() { console.log("Started"); });
        //$('.header.fixed').on('sticky-end', function() { console.log("Ended"); });
    }
    
    // SuperFish menu
    // ---------------------------------------------------------------------------------------
    if ($().superfish) {
        superfishMenu.superfish();
    }
    $('ul.sf-menu a').on('click', function () {
        body.scrollspy('refresh');
    });
    
    // Fixed menu toggle
    $('.menu-toggle').on('click', function () {
        if (navigation.hasClass('opened')) {
            navigation.removeClass('opened').addClass('closed');
        } else {
            navigation.removeClass('closed').addClass('opened');
        }
    });
    $('.menu-toggle-close').on('click', function () {
        if (navigation.hasClass('opened')) {
            navigation.removeClass('opened').addClass('closed');
        } else {
            navigation.removeClass('closed').addClass('opened');
        }
    });

    //
    if ($().swiper) {
        var swiper = new Swiper('.navigation', {
            scrollbar: '.swiper-scrollbar',
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true,
            freeMode: true
        });
        if ($('.content-area.scroll').length) {
            var swiper2 = new Swiper('.content-area.scroll', {
                scrollbar: '.swiper-scrollbar',
                direction: 'vertical',
                slidesPerView: 'auto',
                mousewheelControl: true,
                freeMode: true
            });
        }
    }

    //
    if ($('.content-area.scroll').length) {
        $('.open-close-area').on('click', function () {
            if ($('.wrapper').hasClass('opened')) {
                $('.wrapper').removeClass('opened').addClass('closed');
            } else {
                $('.wrapper').removeClass('closed').addClass('opened');
            }
        });
    }

    // Smooth scrolling
    // ----------------------------------------------------------------------------------------
    $('.sf-menu a, .scroll-to').on('click', function () {

        $('.sf-menu a').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 43
        }, {
            duration: 1200,
            easing: 'easeInOutExpo'
        });
        return false;
    });

    // BootstrapSelect
    // ---------------------------------------------------------------------------------------
    if ($().selectpicker) {
        $('.selectpicker').selectpicker();
    }

    // prettyPhoto
    // ---------------------------------------------------------------------------------------
    if ($().prettyPhoto) {
        $("a[data-gal^='prettyPhoto']").prettyPhoto({
            theme: 'dark_square'
        });
    }

    // Scroll totop button
    // ---------------------------------------------------------------------------------------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            toTop.css({bottom: '15px'});
        } else {
            toTop.css({bottom: '-100px'});
        }
    });
    toTop.on('click', function () {
        $('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });

    // Sliders
    // ---------------------------------------------------------------------------------------
    if ($().owlCarousel) {

        var owl = $('.owl-carousel');
        owl.on('changed.owl.carousel', function (e) {
            // update prettyPhoto
            if ($().prettyPhoto) {
                $("a[data-gal^='prettyPhoto']").prettyPhoto({
                    theme: 'dark_square'
                });
            }
        });

        // Main slider
        if (mainSlider.length) {
            mainSlider.owlCarousel({
                //items: 1,
                autoplay: false,
                autoplayHoverPause: true,
                loop: true,
                margin: 0,
                dots: true,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsiveRefreshRate: 100,
                responsive: {
                    0: {items: 1},
                    479: {items: 1},
                    768: {items: 1},
                    991: {items: 1},
                    1024: {items: 1}
                }
            });
        }

        // Partners carousel
        if (partnersCarousel.length) {
            partnersCarousel.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 30,
                dots: false,
                nav: false,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0:    {items: 1},
                    479:  {items: 2},
                    768:  {items: 3},
                    991:  {items: 4},
                    1024: {items: 5},
                    1280: {items: 6}
                }
            });
        }

        // Partners carousel alt
        if (partnersCarouselAlt.length) {
            partnersCarouselAlt.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 10,
                dots: false,
                nav: false,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0:    {items: 1},
                    479:  {items: 2},
                    768:  {items: 2},
                    991:  {items: 3},
                    1024: {items: 3},
                    1280: {items: 3}
                }
            });
        }

        // Testimonials carousel
        if (testimonialsCarousel.length) {
            testimonialsCarousel.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 30,
                dots: true,
                nav: false,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0:    {items: 1},
                    479:  {items: 1},
                    768:  {items: 1},
                    991:  {items: 2},
                    1024: {items: 2},
                    1280: {items: 3}
                }
            });
        }
        
        // Testimonials carousel alt version
        if (testimonialsCarouselAlt.length) {
            testimonialsCarouselAlt.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 30,
                dots: true,
                nav: false,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0:    {items: 1},
                    479:  {items: 1},
                    768:  {items: 1},
                    991:  {items: 2},
                    1024: {items: 2},
                    1280: {items: 2}
                }
            });
        }

        // on tab click
        $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
            updater();
        });
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            updater();
        });
    }

    // Sliders
    // ---------------------------------------------------------------------------------------

    // countdown
    // ---------------------------------------------------------------------------------------
    if ($().countdown) {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('#dealCountdown1').countdown({until: austDay});
        $('#dealCountdown2').countdown({until: austDay});
        $('#dealCountdown3').countdown({until: austDay});
    }

    // Google map
    // ---------------------------------------------------------------------------------------
    if (typeof google === 'object' && typeof google.maps === 'object') {
        if ($('#map-canvas').length) {

            var map;
            var marker, marker2, marker3;
            var infowindow;
            var mapIWcontent = '' +
                    '' +
                    '<div class="map-info-window">' +
                    '<div><strong><a href="#">Lorem ipsum dolor</a></strong></div>' +
                    '<div>Cras quis bibendum mauris, eget iaculis massa. Pellentesque nibh tortor, feugiat ac fermentum a, aliquet in ligula. Aenean sit amet lacinia sem. Sed nec nisi nec odio tincidunt efficitur sed sit amet ipsum. Integer mollis auctor nisi.</div>' +
                    '</div>' +
                    '';
            var contentString = '' +
                    '' +
                    '<div class="iw-container">' +
                    '<div class="iw-content">' +
                    '' + mapIWcontent +
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                    '</div>' +
                    '' +
                    '';
            var image = 'assets/img/icon-google-map.png'; // marker icon
            google.maps.event.addDomListener(window, 'load', function () {
                var mapOptions = {
                    scrollwheel: false,
                    zoom: 12,
                    center: new google.maps.LatLng(41.079379, 28.9984466) // map coordinates
                };

                map = new google.maps.Map(document.getElementById('map-canvas'),
                        mapOptions);
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(41.0096559, 28.9755535), // marker coordinates
                    map: map,
                    icon: image,
                    title: 'Hello World!'
                });
                marker2 = new google.maps.Marker({
                    position: new google.maps.LatLng(41.007135, 28.910556), // marker coordinates
                    map: map,
                    icon: image,
                    title: 'Hello World!'
                });
                marker3 = new google.maps.Marker({
                    position: new google.maps.LatLng(41.040807, 28.848071), // marker coordinates
                    map: map,
                    icon: image,
                    title: 'Hello World!'
                });

                infowindow = new google.maps.InfoWindow({
                    content: contentString
                    , maxWidth: 350
                            //,maxHeight: 500
                });
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);
                });
                // more markers
                google.maps.event.addListener(marker2, 'click', function () {
                    infowindow.open(map, marker2);
                });
                google.maps.event.addListener(marker3, 'click', function () {
                    infowindow.open(map, marker3);
                });

                // open marker when google map init
                function initialize() {
                    google.maps.event.trigger(marker, 'click');
                }
                initialize();

                /*
                 * The google.maps.event.addListener() event waits for
                 * the creation of the infowindow HTML structure 'domready'
                 * and before the opening of the infowindow defined styles
                 * are applied.
                 */
                google.maps.event.addListener(infowindow, 'domready', function () {

                    // Reference to the DIV which receives the contents of the infowindow using jQuery
                    var iwOuter = $('.gm-style-iw');

                    /* The DIV we want to change is above the .gm-style-iw DIV.
                     * So, we use jQuery and create a iwBackground variable,
                     * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
                     */
                    var iwBackground = iwOuter.prev();

                    // Remove the background shadow DIV
                    iwBackground.children(':nth-child(2)').css({'display': 'none'});

                    // Remove the white background DIV
                    iwBackground.children(':nth-child(4)').css({'display': 'none'});

                    // Moves the infowindow 115px to the right.
                    iwOuter.parent().parent().css({left: '26px'});

                    // Moves the shadow arrow // hide
                    iwBackground.children(':nth-child(1)').attr('style', function (i, s) {
                        return s + 'display: none !important;'
                    });

                    // Moves the arrow 76px to the left margin
                    iwBackground.children(':nth-child(3)').attr('style', function (i, s) {
                        return s + 'margin-left: -25px !important; margin-top: -10px; z-index: 0;'
                    });

                    // Changes the desired color for the tail outline.
                    // The outline of the tail is composed of two descendants of div which contains the tail.
                    // The .find('div').children() method refers to all the div which are direct descendants of the previous div.
                    iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(255, 255, 255, 0.1) 0px 1px 6px', 'z-index': '1'});

                    // Taking advantage of the already established reference to
                    // div .gm-style-iw with iwOuter variable.
                    // You must set a new variable iwCloseBtn.
                    // Using the .next() method of JQuery you reference the following div to .gm-style-iw.
                    // Is this div that groups the close button elements.
                    var iwCloseBtn = iwOuter.next();

                    // Apply the desired effect to the close button
                    iwCloseBtn.css({
                        opacity: '1',
                        right: '48px', top: '14px',
                        width: '19px', height: '19px',
                        border: '3px solid #ffffff',
                        'border-radius': '17px',
                        'background-color': '#ffffff'
                    });

                    // The API automatically applies 0.7 opacity to the button after the mouseout event.
                    // This function reverses this event to the desired value.
                    iwCloseBtn.mouseout(function () {
                        $(this).css({opacity: '1'});
                    });

                });

                //

            });

        }
        //
    }

    // Shop categories widget slide in/out
    // ---------------------------------------------------------------------------------------
    $('.car-categories .arrow').on('click', function (event) {

        $(this).parent().parent().find('ul.children').removeClass('active');
        $(this).parent().parent().find('.fa-angle-up').addClass('fa-angle-down').removeClass('fa-angle-up');
        if ($(this).parent().find('ul.children').is(":visible")) {
            //$(this).find('.fa-angle-up').addClass('fa-angle-down').removeClass('fa-angle-up');
            //$(this).parent().find('ul.children').removeClass('active');
        }
        else {
            $(this).find('.fa-angle-down').addClass('fa-angle-up').removeClass('fa-angle-down');
            $(this).parent().find('ul.children').addClass('active');
        }
        $(this).parent().parent().find('ul.children').each(function () {
            if (!$(this).hasClass('active')) {
                $(this).slideFadeOut();
            }
            else {
                $(this).slideFadeIn();
            }
        });
    }
    );
    $('.car-categories ul.children').each(function () {
        if (!$(this).hasClass('active')) {
            $(this).hide();
        }
    });

    // Ripple effect on click for buttons
    // ---------------------------------------------------------------------------------------
    $(".ripple-effect").on('click', function (e) {
        var rippler = $(this);

        // create .ink element if it doesn't exist
        if (rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if (!ink.height() && !ink.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width() / 2;
        var y = e.pageY - rippler.offset().top - ink.height() / 2;

        // set .ink position and add class .animate
        ink.css({
            top: y + 'px',
            left: x + 'px'
        }).addClass("animate");
    });
    updater();

});

jQuery(window).load(function () {

    // Preloader
    $('#status').fadeOut();
    $('#preloader').delay(200).fadeOut(200);

    // Isotope
    if ($().isotope) {
        isotopeContainer.isotope({// initialize isotope
            itemSelector: '.isotope-item' // options...
                    //,transitionDuration: 0 // disable transition
        });
        isotopeFiltrable.on('click', function () { // filter items when filter link is clicked
            var selector = $(this).attr('data-filter');
            isotopeFiltrable.parent().removeClass('current');
            $(this).parent().addClass('current');
            isotopeContainer.isotope({filter: selector});
            return false;
        });
        isotopeContainer.isotope('reLayout'); // layout/reLayout
    }

    // Scroll to hash
    if (location.hash != '') {
        var hash = '#' + window.location.hash.substr(1);
        if (hash.length) {
            body.delay(0).animate({
                scrollTop: jQuery(hash).offset().top
            }, {
                duration: 1200,
                easing: "easeInOutExpo"
            });
        }
    }

    updater();

});

function updater() {

    if ($().sticky) {
        $('.header.fixed').sticky('update');
    }

    // refresh waypoints
    //$.waypoints('refresh');
    // refresh owl carousels/sliders

    if ($().datetimepicker) {
        $('.datepicker').datetimepicker();
    }

}

jQuery(window).resize(function () {

    // Refresh isotope
    if ($().isotope) {
        isotopeContainer.isotope('reLayout'); // layout/relayout on window resize
    }
    updater();

});

jQuery(window).scroll(function () {

    if ($().sticky) {
        $('.header.fixed').sticky('update');
    }

});