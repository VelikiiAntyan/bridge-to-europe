const MenuToggle = (() => {
    $(document).ready(function(){
        $(".hamburger").click(function(){
          $(this).toggleClass("is-active");
      });
    });
})();

export default MenuToggle;
