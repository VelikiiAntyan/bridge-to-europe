import './assets/styles/styles.scss';
import './assets/styles/home.scss';
import HelloWorld from './assets/js/hello-world';

require('html-loader!./templates/index.html');
// require('../src/assets/images/logo.png');
// require('./src/assets/images/main-header.jpg');
// require('../src/assets/images/yoeman.png');

let indexPage = new HelloWorld('Hello from index page!');
console.log(indexPage.sayHello());
