const MenuToggle = (() => {
    $(document).ready(function(){
        $(".hamburger").click(function(){
          $(this).toggleClass("is-active");
          $('#mobile-menu').toggleClass("js-hide");
          $('#nav-icon').css("z-index",'200');
          console.log('from commons');
      });
    });
})();

export default MenuToggle;
