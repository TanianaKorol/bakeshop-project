parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
$(document).ready(function(){$(".new-product__card-list").slick({infinite:!0,slidesToShow:3,slidesToScroll:3,autoplay:!0,autoplaySpeed:4e3})});
},{}],"clu1":[function(require,module,exports) {

},{}],"N8YO":[function(require,module,exports) {
$(document).ready(function(){$("a").on("click",function(o){if(""!==this.hash){o.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},800,function(){window.location.hash=t})}})});
},{}],"e4yY":[function(require,module,exports) {
const o=document.querySelector("#up-button"),s=()=>{window.scrollY>200?o.classList.add("visible"):o.classList.remove("visible")};window.addEventListener("scroll",s);const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};o.addEventListener("click",e);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./js/main"),require("./sass/main.scss"),require("./js/scroll"),require("./js/up-btn");
},{"./js/main":"d6sW","./sass/main.scss":"clu1","./js/scroll":"N8YO","./js/up-btn":"e4yY"}]},{},["Focm"], null)
//# sourceMappingURL=/bakeshop-project/src.2ca991b9.js.map