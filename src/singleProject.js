import './assets/styles/styles.scss';
import './assets/styles/singleProject.scss';

import 'bootstrap/dist/js/bootstrap.min.js';

import MenuToggle from './assets/js/common/mobile-menu';
import StickyMenu from './assets/js/common/sticky-menu';
import FooterBtn from './assets/js/common/footer-btn';

require('html-loader!./templates/singleProject.html');

$('.carousel').carousel({
  interval: false
});

//Lazy Load Carousel Images
$(function() {
  return $('.carousel.lazy').on('slide.bs.carousel', function(ev) {
    let lazy;
    lazy = $(ev.relatedTarget).find("img[data-src]");
    lazy.attr("src", lazy.data('src'));
    lazy.removeAttr("data-src");
  });
});