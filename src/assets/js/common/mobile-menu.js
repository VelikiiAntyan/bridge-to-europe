// import $ from '../vendor/jquery-1.10.2.min';

const MenuToggle = (() => {
    $(document).ready(function(){
        $(".hamburger").click(function(){
            $(this).toggleClass("is-active");
            $('#mobile-menu').toggleClass("js-hide");
            
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


    // // Get the container element
    // var btnContainer = $(".desktop-navigation-links .navigation-list-wrapper");

    // // Get all buttons with class="btn" inside the container
    // var btns = btnContainer.getElementsByClassName("navigation-list");

    // // Loop through the buttons and add the active class to the current/clicked button
    // for (var i = 0; i < btns.length; i++) {
    // btns[i].addEventListener("click", function() {
    //     var current = document.getElementsByClassName("active");
    //     current[0].className = current[0].className.replace(" active", "");
    //     this.className += " active";
    // });
    // }
})();

export default MenuToggle;
