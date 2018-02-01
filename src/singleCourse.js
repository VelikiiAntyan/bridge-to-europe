import './assets/styles/singleCourse.scss';
import './assets/styles/styles.scss';

import MenuToggle from './assets/js/common/mobile-menu';

require('html-loader!./templates/singleCourse.html');

$('.section-info-title-wrapper').on('click', function () {
    let $arrow = $(this).find('.icon-toggle')[0];
    $($arrow).toggleClass('js-open');

    console.log($(this).parent().children('p'));
});