const StickyMenu = (() => {
    var lastScrollTop = 0;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop){
           // downscroll code
           $('.sticky-menu-wrapper').removeClass('nav-down').addClass('nav-up');
        //    $('.logo-img').removeClass('nav-down').addClass('nav-up');
        } else {
            // upscroll code
            $('.sticky-menu-wrapper').removeClass('nav-up').addClass('nav-down');
            // $('.logo-img').removeClass('nav-up').addClass('nav-down');
       }
       lastScrollTop = st;
    });
})();

export default StickyMenu;

