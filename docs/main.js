(()=>{"use strict";function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}var n={994:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"\r\nh1 {\r\n    color: green\r\n}",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i,a=0;a<this.length;a++)null!=(i=this[a][0])&&(o[i]=!0);for(var c,s=0;s<e.length;s++)c=[].concat(e[s]),(!r||!o[c[0]])&&(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))},n}},379:(e,n,t)=>{function r(e){for(var n=-1,t=0;t<d.length;t++)if(d[t].identifier===e){n=t;break}return n}function o(e,n){for(var t={},o=[],i=0;i<e.length;i++){var a=e[i],c=n.base?a[0]+n.base:a[0],u=t[c]||0,l="".concat(c," ").concat(u);t[c]=u+1;var f=r(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1===f?d.push({identifier:l,updater:s(p,n),references:1}):(d[f].references++,d[f].updater(p)),o.push(l)}return o}function i(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=l(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}function a(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function c(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function s(e,n){var t,r,o;if(n.singleton){var s=v++;t=p||(p=i(n)),r=a.bind(null,t,s,!1),o=a.bind(null,t,s,!0)}else t=i(n),r=c.bind(null,t,n),o=function(){!function(e){null!==e.parentNode&&e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}var u=function(){var e;return function(){return void 0===e&&(e=!(!(window&&document&&document.all)||window.atob)),e}}(),l=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),d=[],f=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}(),p=null,v=0;e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=u());var t=o(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var a=r(t[i]);d[a].references--}for(var c=o(e,n),s=0;s<t.length;s++){var u=r(t[s]);0===d[u].references&&(d[u].updater(),d.splice(u,1))}t=c}}}}},t={};e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var n=e(379),t=e.n(n),r=e(994);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,function(e){console.log("Creando etiqueta h1");var n=document.createElement("h1");n.innerHTML="Hola, ".concat("Jesus"," como estas?"),document.body.append(n)}()})()})();