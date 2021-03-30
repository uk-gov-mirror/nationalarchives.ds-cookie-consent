!function(){"use strict";var e={text:"Accept optional cookies",url:"#",id:"accept_optional_cookies",class:"button",tabIndex:1},t={text:"Reject optional cookies",url:"#",id:"reject_optional_cookies",class:"button",tabIndex:1},o={text:"Hide this message",url:"#",id:"hide_this_message",class:"button",tabIndex:1},n={id:"#btn_preferences"},r={id:".cookie-p"},c={id:".cookie_head"},i={id:"#ds-cookie-consent-banner"},a={cookieOne:"dontShowCookieNotice",cookieTwo:"cookies_policy"},s={id:"#ds-cookie-consent-form"},u={text:"You have accepted optional cookies. You can change your cookie settings on the <a href='/latin/cookies/' tabindex='1'>Cookies page</a>.",ariaLabel:"Cookie consent confirmation message"},d={text:"You have rejected optional cookies. You can change your cookie settings on the <a href='/latin/cookies/' tabindex='1'>Cookies page</a>.",ariaLabel:"Cookie consent confirmation message"},l={class:".cookieNotice"},m={one:"_ga",two:"_gid",three:"_gat_UA-2827241-1",four:"_gat_UA-2827241-22"},p={on:".jsON",off:".jsOFF"};function f(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function v(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var b=function(e,t,o,r){var c=document.querySelector(n.id),i=document.createElement("button"),a=document.createTextNode(e);if(c){var s=c.parentNode;i.appendChild(a),i.className=o,i.id=t,i.tabIndex=r,s.insertBefore(i,c)}},k=function(e,t,o){(o=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?f(Object(o),!0).forEach((function(t){v(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({path:"/"},o)).expires instanceof Date&&(o.expires=o.expires.toUTCString());var n=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var r in o){n+="; "+r;var c=o[r];!0!==c&&(n+="="+c)}document.cookie=n},y=function(e){return-1!==document.cookie.indexOf(e)},g=function(){for(var e=document.cookie.split(";"),t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];for(var r=function(t){var n=e[t],r=n.indexOf("="),c=r>-1?n.substr(0,r):n;o.forEach((function(e){c.trim()===e&&(document.cookie="".concat(c,'=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain="'),document.cookie="".concat(c,"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain=").concat(location.hostname.replace(/^www\./i,"")))}))},c=0;c<e.length;c++)r(c)},h=document.querySelector(i.id),x=document.querySelector(s.id);[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})),document.addEventListener("DOMContentLoaded",(function(){var i=document.querySelector(l.class),s=document.querySelector(p.on),f=document.querySelector(p.off);if(s&&(s.style.display="block"),f&&(f.style.display="none"),i&&i.remove(),y(a.cookieTwo)||k(a.cookieTwo,JSON.stringify({usage:!1,settings:!1,essential:!0})),h){b(e.text,e.id,e.class,e.tabIndex),b(t.text,t.id,t.class,t.tabIndex);var v=document.querySelector("#".concat(e.id)),x=document.querySelector("#".concat(t.id)),O=document.querySelector(n.id),w=document.querySelector(r.id),j=document.querySelector(c.id),S=h.querySelector(".container");v&&v.addEventListener("click",(function(e){e.preventDefault(),k(a.cookieOne,"true",{"max-age":3600}),k(a.cookieTwo,'{"usage":true,"settings":true,"essential":true}',{"max-age":3600}),b(o.text,o.id,o.class,o.tabIndex),v&&v.remove(),x&&x.remove(),O&&O.remove(),j&&j.remove(),w&&(w.innerHTML=u.text,S.setAttribute("aria-label",u.ariaLabel));var t=document.querySelector("#".concat(o.id));t&&(t.addEventListener("click",(function(e){e.preventDefault(),y(a.cookieOne)&&h&&h.remove()})),w.focus());var n=document.head,r=document.createElement("script");r.id="frontEndGA",r.src="/wp-content/plugins/ds-cookie-consent/dist/gtm-script.js",n.appendChild(r)})),x&&x.addEventListener("click",(function(e){e.preventDefault(),k(a.cookieOne,"true",{"max-age":3600}),k(a.cookieTwo,'{"usage":false,"settings":false,"essential":true}',{"max-age":3600}),b(o.text,o.id,o.class,o.tabIndex),v&&v.remove(),x&&x.remove(),O&&O.remove(),j&&j.remove(),w&&(w.innerHTML=d.text,S.setAttribute("aria-label",d.ariaLabel));var t=document.querySelector("#".concat(o.id));t&&(t.addEventListener("click",(function(e){e.preventDefault(),y(a.cookieOne)&&h&&h.remove()})),w.focus());for(var n=0,r=[m.one,m.two,m.three,m.four];n<r.length;n++){var c=r[n];y(c)&&g(c)}}))}})),y(a.cookieOne)&&h&&h.remove(),x&&h&&h.remove()}();