// import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/styles/styles.scss';
import './assets/styles/home.scss';
import HelloWorld from './assets/js/hello-world';

import MenuToggle from './assets/js/common/mobile-menu';

require('html-loader!./templates/index.html');

let indexPage = new HelloWorld('Hello from index page!');
console.log(indexPage.sayHello());


  
