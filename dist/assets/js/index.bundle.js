webpackJsonp([6],{"../node_modules/html-loader/index.js!./templates/index.html":function(e,s){e.exports='module.exports = __webpack_public_path__ + "index.html";'},"./assets/js/hello-world.js":function(e,s,n){"use strict";function t(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,s){for(var n=0;n<s.length;n++){var t=s[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(s,n,t){return n&&e(s.prototype,n),t&&e(s,t),s}}(),l=function(){function e(s){t(this,e),this.greetings=s}return o(e,[{key:"sayHello",value:function(){return this.greetings}}]),e}();s.a=l},"./assets/styles/styles.scss":function(e,s){},"./index.js":function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=n("./assets/styles/styles.scss"),o=(n.n(t),n("./assets/js/hello-world.js"));n("../node_modules/html-loader/index.js!./templates/index.html");var l=new o.a("Hello from index page!");console.log(l.sayHello())}},["./index.js"]);