const StickyMenu = (() => {

    let didScroll;
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = $('.sticky-menu-wrapper').outerHeight();
    let headerHeight = $('header').outerHeight();
    
    $(window).scroll(function(e) {
        didScroll = true;
    });
    
    setInterval(function(){
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    
    function hasScrolled() {

        let st = $(window).scrollTop();
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

            // Change Menu color depending on Window ScrollTop
            if ($(window).scrollTop() > headerHeight) {
                $('.sticky-menu-wrapper').addClass('sticky-menu-black');
                console.log('change color now');
            } else {
                $('.sticky-menu-wrapper').removeClass('sticky-menu-black');
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

