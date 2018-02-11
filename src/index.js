import './assets/styles/styles.scss';
import './assets/styles/home.scss';

// import 'lazysizes';
import 'lazysizes/lazysizes.min.js';
import { MenuToggle, StickyMenu, FooterBtn } from './assets/js/common';

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

    $('.event-text').each(function (i) {
        let len = $(this).text().trim().length;

        if (len > 130) {
            $(this).text($(this).text().substr(0,130) + '...' )
                .append($(`
                <span class="read-more-event">
                    <a href="./singleEvent.html">read more</a>
                </span>
                `));
        }
    });

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

