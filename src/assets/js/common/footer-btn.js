const FooterBtn = (() => {
    $('.footer-contact-btn').on('click', function(e) {
        e.preventDefault();
        $('#contact-form')[0].submit();
    });
})();

export default FooterBtn;
