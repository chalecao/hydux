!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.persist=n():(t.hydux=t.hydux||{},t.hydux.persist=n())}("undefined"!=typeof self?self:this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=17)}({1:function(t,n,e){"use strict";function r(t,n){for(var e=Object.keys(n),r=e.length;r--;){var o=e[r];t[o]=n[o]}return t}function o(t,e){return r(r(n.isPojo(t)?{}:new t.constructor,t),e)}function u(t){return r(n.isPojo(t)?{}:new t.constructor,t)}function i(t,e,r){var u=n.isPojo(r)?{}:new r.constructor;return 0===t.length?e:(u[t[0]]=1<t.length?i(t.slice(1),e,r[t[0]]):e,o(r,u))}function c(t,n){for(var e=t.length,r=0;r<e;r++)n=n[t[r]];return n}function f(t){return"function"==typeof t}Object.defineProperty(n,"__esModule",{value:!0});var s=function(t){return void 0!==t&&null!==t};n.isPojo=function(t){return!s(t.constructor)||t.constructor===Object},n.set=r,n.merge=o,n.clone=u,n.setDeep=i,n.get=c,n.isFn=f,n.noop=function(t){return t}},17:function(t,n,e){"use strict";function r(t){void 0===t&&(t={});var n,e=t.store,r=void 0===e?localStorage:e,i=t.serialize,c=void 0===i?JSON.stringify:i,f=t.deserialize,s=void 0===f?JSON.parse:f,a=t.debounce,p=void 0===a?50:a,l=t.key,d=void 0===l?"hydux-persist":l;return function(t){return function(e){return t(o({},e,{init:function(){var t=e.init();t instanceof Array||(t=[t,u.default.none]);var n=r.getItem(d);return n&&(t[0]=s(n)),[t[0],t[1]]},onUpdate:function(t){e.onUpdate&&e.onUpdate(t),n&&clearTimeout(n);var o=function(){return r.setItem(d,c(t.nextAppState))};n=setTimeout(o,p)}}))}}}var o=this&&this.__assign||Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++){n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};Object.defineProperty(n,"__esModule",{value:!0});var u=e(2);n.default=r},2:function(t,n,e){"use strict";function r(t,n,e,r){if(!t)return[];u.isFn(n)&&(r=e,e=n,n=void 0);var o=function(){var r=t(n);e&&e(r)};return[function(t){if(r)try{o()}catch(t){console.error(t),r(t)}else o()}]}function o(t,n,e,r){return t?(u.isFn(n)&&(r=e,e=n,n=void 0),[function(o){t(n).then(e).catch(r)}]):[]}Object.defineProperty(n,"__esModule",{value:!0});var u=e(1);n.default={none:[],ofPromise:o,ofFn:r,ofSub:function(t){return[t]},batch:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=Array.prototype.concat;return e.apply([],e.apply([],t))},map:function(t,n){return n.map(function(n){return function(e){return n(t(e))}})}}}})});
//# sourceMappingURL=hydux.persist.js.map