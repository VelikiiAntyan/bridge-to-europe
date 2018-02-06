import './assets/styles/styles.scss';
import './assets/styles/home.scss';

import MenuToggle from './assets/js/common/mobile-menu';

// import 'bootstrap/dist/js/bootstrap.min.js';

require('html-loader!./templates/index.html');

const desktopText = `
    GLE is an initiative of the Rothschild Foundation Hanadiv
    Europe and the National Library of Israel to create opportunities
    for European scholars, library and museum professionals, educators
    and community activists working within Jewish settings to develop an on-going,
    mutually beneficial relationship with the NLI and to engage with the NLI's
    diverse and extensive collections.
`;

function trimText() {
    $(".header-text").each(function(i){
        var len = $(this).text().trim().length;
        if ( len > 145 ){
            $(this).text($(this).text().substr(0,145) + '...')
                .append($(`
                    <span id="read-more-container">
                        <a href="./about.html" id="read-more-link">read more</a>
                    </span>
                `));
        }
    });
}

$(document).ready(function (){
    if (window.matchMedia("(max-width: 768px)").matches) {
        trimText();
    }
});

let resizeTiming;
$(window).on('resize', function() {
    clearTimeout(resizeTiming);
    resizeTiming = setTimeout(() => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            trimText();
        } else {
            $(".header-text").text(desktopText);
        }
    }, 100);
});



// $('body').on('click','#read-more-link', function(e) {
//     e.preventDefault();
//     $(".header-text").text(desktopText)
//         .append($(`
//             <span id="read-less-container">
//                 <a href="" id="read-less-link">read less</a>
//             </span>
//         `));
// });

// $('body').on('click','#read-less-link', function(e) {
//     e.preventDefault();
//     trimText();
// });
