const StickyMenu = (() => {

    // var lastScrollTop = 0;
    // var delta = 5;
    // var navbarHeight = $('.sticky-menu-wrapper').outerHeight();

    // $(window).scroll(function () {
    //     clearTimeout($.data(this, 'scrollTimer'));
    //     $.data(this, 'scrollTimer', setTimeout(function () {
    //         console.log('scrolling'); 
    //         var st = $(window).scrollTop();
    //         if (Math.abs(lastScrollTop - st) <= delta)
    //             return;

    //         if (st > lastScrollTop && st > navbarHeight){
    //             // downscroll code
    //             $('.sticky-menu-wrapper').removeClass('nav-down')
    //             .addClass('nav-up');
    //         } else {
    //             // upscroll code
    //             if (st + $(window).height() < $(document).height()) {
    //                 $('.sticky-menu-wrapper').removeClass('nav-up')
    //                     .addClass('nav-down');
    //             }
    //         }
    //         lastScrollTop = st;
    //     }, 50));
    // });


    // *************************************************************


    // var lastScrollTop = 0;
    // $(window).scroll(function(event){
    //    var st = $(this).scrollTop();
    //    if (st > lastScrollTop){
    //        // downscroll code
    //        $('.sticky-menu-wrapper').removeClass('nav-down')
    //             .addClass('nav-up');
    //     } else {
    //         // upscroll code
    //         $('.sticky-menu-wrapper').removeClass('nav-up')
    //             .addClass('nav-down');
    //    }
    //    lastScrollTop = st;
    // });

    // *************************************************************
    
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.sticky-menu-wrapper').outerHeight();
    
    // console.log(navbarHeight);
    
    $(window).scroll(function(e) {
        didScroll = true;
    });
    
    setInterval(function(){

        // console.log(didScroll);
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    
    function hasScrolled() {

        var st = $(window).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta)
        return;

        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.sticky-menu-wrapper').removeClass('nav-down')
                .addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.sticky-menu-wrapper').removeClass('nav-up')
                    .addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }
    
    // *************************************************************

    $(document).ready(function(){
        $(".navigation-list-contact").on('click', function(event) {
            $('html, body').animate({
                scrollTop: $("#footer").offset().top
            }, 100, 'swing');
        });
      });

})();

export default StickyMenu;

