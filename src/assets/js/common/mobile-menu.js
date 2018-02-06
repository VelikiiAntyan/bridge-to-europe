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

    });
    
})();

export default MenuToggle;
