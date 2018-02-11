import './assets/styles/singleCourse.scss';
import './assets/styles/styles.scss';

import 'lazysizes';

import { MenuToggle, StickyMenu, FooterBtn } from './assets/js/common';

require('html-loader!./templates/singleCourse.html');

$('.icon-right-open').on('click', function () {
    $(this).toggleClass('js-close');
    $($(this).parent().parent().parent()
        .find($('.section-info-text'))[0]).slideToggle();
});

let resizeTiming;
$(window).on('resize', function() {
    clearTimeout(resizeTiming);
    resizeTiming = setTimeout(() => {
        if (window.matchMedia("(min-width: 767px)").matches) {
            $('.section-info-text').css('display','block');
        } else {
            $('.section-info-text').css('display','none');
            $('.icon-right-open').removeClass('js-close');
        }
    }, 100);
});
