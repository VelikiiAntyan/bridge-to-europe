const MenuToggle = (() => {
    $(document).ready(function(){
        $(".hamburger").click(function(){
            $(this).toggleClass("is-active");
            $('#mobile-menu').toggleClass("js-hide");
            $('.sticky-menu-wrapper').toggleClass('js-transparent');

            if($('#mobile-menu').hasClass('js-hide')) {
                $('body,html').css({
                    'overflow-y': 'auto',
                    'height': 'auto'
                });
            } else {
                $('body,html').css({
                    'overflow': 'hidden',
                    'height': '100%'
                });
            }
        });
    });
})();

export default MenuToggle;
