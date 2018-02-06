// import $ from '../vendor/jquery-1.10.2.min';

const MenuToggle = (() => {
    $(document).ready(function(){
        $(".hamburger").click(function(){
            $(this).toggleClass("is-active");
            $('#mobile-menu').toggleClass("js-hide");
            
            if($('#mobile-menu').hasClass('js-hide')) {
                // document.body.addEventListener('touchmove', preventDefault, { passive: false });
                $('body,html').css({
                    'overflow-y': 'auto',
                    'height': 'auto'
                });
                
            } else {
                // document.body.removeEventListener('touchmove', preventDefault, { passive: false });
                $('body,html').css({
                    'overflow': 'hidden',
                    'height': '100%'
                });
            }

        });

        $(window).on('scroll', function(e) {
            var scrollValue = window.scrollY;
            if (scrollValue > 70) {
                $('.app-header').addClass('affix');
                // $('main').addClass('affix-main-padding');
                // $('.desktop-navigation-links').addClass('affix');
                // $('.affix-logo').addClass('affix');
            } else {
                $('.app-header').removeClass('affix');
                // $('main').removeClass('affix-main-padding');
                // $('.desktop-navigation-links').removeClass('affix');
                // $('.affix-logo').removeClass('affix');
            }
        });

    });

    var lastScrollTop = 0;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop){
           // downscroll code
           console.log('downscroll code');
           $('header').css('display','none');
        } else {
            // upscroll code
            console.log('upscroll code');
            $('header').css('display','block');
       }
       lastScrollTop = st;
    });
    
})();

export default MenuToggle;
