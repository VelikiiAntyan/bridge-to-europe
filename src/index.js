import './assets/styles/styles.scss';
import './assets/styles/home.scss';
import HelloWorld from './assets/js/hello-world';

require('html-loader!./templates/index.html');
require('../src/assets/images/logo.png');


let indexPage = new HelloWorld('Hello from index page!');
console.log(indexPage.sayHello());
