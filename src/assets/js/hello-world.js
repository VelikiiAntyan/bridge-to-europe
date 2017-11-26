export default class HelloWorld {
    constructor (greetings) {
        this.greetings = greetings;
    }

    sayHello() {
        return this.greetings;
    }

    // getFooter(){
    //     console.log('footer');
    //     return `<footer>
    //     <div class="social-media-cont">
    
    //     </div>
    //     <div class="copyright-wrapper">
    //         <p class="copyright-text">
    //                 &copy; 2017 Bridge to Europe. All Rights Reserved.
    //         </p>
    //     </div>
    // </footer>`
    // }
}
