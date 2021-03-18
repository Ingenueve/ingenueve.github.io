"use strict";!function(){function e(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}function t(e,t){for(var a=e.length,n=0;a>n;n++)e[n].classList.remove(t)}function a(e,t){for(var a in t)t.hasOwnProperty(a)&&e.setAttribute(a,t[a])}function n(e,t){return new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className)}function l(){if(c()){var t=localStorage.getItem("cecutient"+window.location.hostname)?JSON.parse(localStorage.getItem("cecutient"+window.location.hostname)):v;e(v,t),u()}else console.log("problem save change browser")}function s(){if(c()){var t={};e(t,v),delete t.showPanel,localStorage.setItem("cecutient"+window.location.hostname,JSON.stringify(t))}else console.log("problem save change browser")}function c(){var e="test",t=window.sessionStorage;try{return t.setItem(e,e),t.removeItem(e),!0}catch(a){return!1}}function i(e,t){for(var a=0;a<e.length;a++){var n=e[a];(n.sheet||n.styleSheet)&&((n.sheet||n.styleSheet).disabled=!0),e[a].disabled=!0}document.documentElement.scrollIntoView(!0),t||(t=function(){}),t()}function o(){if("true"===b.getAttribute("data-enabled")){for(var e=document.getElementsByClassName("js-main-cecutient"),t=0;t<e.length;t++)(e[t].sheet||e[t].styleSheet)&&((e[t].sheet||e[t].styleSheet).disabled=!1),e[t].disabled=!1;var a=setInterval(function(){try{i(document.getElementsByClassName("js-style-main")),clearInterval(a)}catch(e){}},10);e[0].sheet&&e[0].sheet.cssRules.length||e.styleSheet&&e.styleSheet.cssText.length>0?(i(document.getElementsByClassName("js-style-main")),clearInterval(a)):e[0].onload=function(){i(document.getElementsByClassName("js-style-main")),clearInterval(a)}}else{for(var n=document.getElementsByClassName("js-main-cecutient"),l=document.getElementsByClassName("js-style-main"),s=function(){var e=document.getElementById("body");e.classList.remove(/g\-theme\-site\-(\d{1})/i.exec(e.classList.value||e.classList)[0]),e.classList.add(e.getAttribute("data-site-theme"))},c=0;c<l.length;c++)(l[c].sheet||l[c].styleSheet)&&((l[c].sheet||l[c].styleSheet).disabled=!1),l[c].disabled=!1;var o=setInterval(function(){try{i(n,s),clearInterval(o)}catch(e){}},10);l[0].sheet&&l[0].sheet.cssRules.length||l.styleSheet&&l.styleSheet.cssText.length>0?(i(n,s),clearInterval(o)):l[0].onload=function(){i(n,s),clearInterval(o)}}}function r(){for(var e={imageShow:function(){var e=w(b.getAttribute("data-cecutientimage-hide"));b.setAttribute("data-cecutientimage-hide",e),d()},imageGrayscale:function(){var e=w(b.getAttribute("data-grayscale"));b.setAttribute("data-grayscale",e),d()},fontSize:function(){t(this.querySelectorAll(".active"),"active"),this.classList.add("active");var e=this.getAttribute("data-size");b.setAttribute("data-font-size",e),d()},backgeoundColor:function(){t(this.querySelectorAll(".active"),"active"),this.classList.add("active");var e=this.getAttribute("data-color");b.setAttribute("data-background-color",e),d()}},a=y.getElementsByClassName("js-cecutient-image-show")[0],n=y.getElementsByClassName("js-cecutient-image-grayscale")[0],l=y.getElementsByClassName("js-size-text"),s=y.getElementsByClassName("js-color-background"),c=0;c<l.length;c++)l[c].onclick=null,l[c].onclick=e.fontSize;for(var i=0;i<s.length;i++)s[i].onclick=null,s[i].onclick=e.backgeoundColor;a.onchange=null,n.onchange=null,a.onchange=e.imageShow,n.onchange=e.imageGrayscale}function u(e){var l=!1,c=!1;if("false"==b.getAttribute("data-enabled")&&"true"==v.enabled&&(l=!0),"true"==b.getAttribute("data-enabled")&&"true"==v.enabled&&(c=!0),!c||e){if(b.setAttribute("data-enabled",v.enabled),"false"==v.enabled)return void i(document.getElementsByClassName("js-main-cecutient"));o()}a(b,{"data-grayscale":v.grayscale,"data-cecutientimage-hide":v.image,"data-font-size":v.fontSize,"data-background-color":v.color}),t(b.querySelectorAll(".active"),"active");var r=b.querySelectorAll('[data-size="'+v.fontSize+'"]')[0];if(r.classList.add("active"),r=b.querySelectorAll('[data-color="'+v.color+'"]')[0],r.classList.add("active"),r=b.querySelectorAll('[name="imgShow"]'),r[0].checked="true"==v.image,r=b.querySelectorAll('[name="grayscale"]'),r[0].checked="true"==v.grayscale,r=null,b.setAttribute("data-showPanel",v.showPanel),"true"===v.grayscale)t(document.querySelectorAll(".ul-cecutient-image-grayscale"),"ul-cecutient-image-grayscale");else for(var u=0;u<f.length;u++)(f[u].style.backgroundImage.length||"img"==f[u].tagName)&&f[u].classList.add("ul-cecutient-image-grayscale"),["ul-w-ecwid-frame","ul-ok-wrapper-background","ul-w-pinterest-container","ul-w-slideshare-slides","ul-tw-background","ul-fb-wrapper-background","ul-widget-maps","ul-w-instagram-container","ul-widget-socialGroups"].forEach(function(e){n(f[u],e)&&f[u].classList.add("ul-cecutient-image-grayscale")});a(h,{"data-cecutient-background-color":v.color,"data-grayscale":v.grayscale,"data-cecutientimage-hide":v.image});var d="max"==v.fontSize?27:"medium"==v.fontSize?22:"small"==v.fontSize?17:"";document.documentElement.setAttribute("style","font-size:"+d+"px;");var g=document.getElementById("body");g.classList.remove(/g\-theme\-site\-(\d{1})/i.exec(g.classList.value||g.classList)[0]),g.classList.add(v.color);var m;window.document.createEvent("HTMLEvents")&&(m=window.document.createEvent("HTMLEvents"),m.initEvent("resize",!0,!0)),m?window.dispatchEvent(m):window.dispatchEvent(new Event("resize")),s()}function d(t){var a={enabled:b.getAttribute("data-enabled"),showPanel:b.getAttribute("data-showPanel"),fontSize:b.getAttribute("data-font-size"),image:b.getAttribute("data-cecutientimage-hide"),color:b.getAttribute("data-background-color"),grayscale:b.getAttribute("data-grayscale")};e(v,a),u(t)}function g(){for(var e=y.getElementsByClassName("js-cecutient-image-show")[0],t=y.getElementsByClassName("js-cecutient-image-grayscale")[0],n=y.getElementsByClassName("js-size-text"),l=y.getElementsByClassName("js-color-background"),s=0;s<n.length;s++)n[s].onclick=null;for(var c=0;c<l.length;c++)l[c].onclick=null;e.onchange=null,t.onchange=null,b.setAttribute("data-enabled","false"),localStorage.removeItem("cecutient"+window.location.hostname),o(),a(h,{"data-cecutient-background-color":"white","data-grayscale":"false","data-cecutientimage-hide":"false"}),a(b,{"data-grayscale":"true","data-cecutientimage-hide":"true","data-font-size":"max","data-background-color":"g-theme-site-1"}),document.documentElement.setAttribute("style",'font-size:"" ');var i=document.getElementById("body"),r=/g\-theme\-site\-(\d{1})/i.exec(i.classList.value||i.classList)[0];i.classList.remove(r);var u=i.getAttribute("data-site-theme");i.classList.add(u)}var m=document.getElementById("main"),h=document.getElementsByTagName("body")[0],b=document.getElementById("cecutient-container"),y=b.getElementsByClassName("ul-cecutient-inner")[0],f=m.querySelectorAll("*:not(.ul-col):not(.ul-absolute-widgets)"),v={showPanel:"false",fontSize:"max",image:"true",grayscale:"true",color:"g-theme-site-1",enabled:"false"},w=function(e){return"false"==e?"true":"false"},A=function(){window.navigator.userAgent.indexOf("Trident")+1&&b.classList.add("ul-ie-browser");for(var e={enabled:function(){var e=w(b.getAttribute("data-enabled"));b.setAttribute("data-enabled",e),"true"==e&&b.setAttribute("data-showPanel","true"),r(),d(!0)},disabled:function(){var e=w(b.getAttribute("data-enabled"));b.setAttribute("data-enabled",e),"false"==e&&b.setAttribute("data-showPanel","false"),g()},hideShow:function(){var e=w(b.getAttribute("data-showPanel"));b.setAttribute("data-showPanel",e),"false"!==e&&r(),d()}},t=b.getElementsByClassName("js-cecutient-toggle"),a=b.getElementsByClassName("js-cecutient-disabled")[0],n=b.getElementsByClassName("js-cecutient-button-disabled")[0],l=0;l<t.length;l++)t[l].onclick=null,t[l].onclick=e.hideShow;a.onclick=null,n.onclick=null,t.onclick=e.hideShow,a.onclick=e.enabled,n.onclick=e.disabled};l(),A()}();
//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map

//# sourceMappingURL=cecutient.js.map
