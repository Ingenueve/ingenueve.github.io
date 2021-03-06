!function(){"use strict";function t(t){h.push(t),1===h.length&&u()}function e(){for(;h.length;)h[0](),h.shift()}function n(t){this.a=d,this.b=void 0,this.f=[];var e=this;try{t(function(t){s(e,t)},function(t){r(e,t)})}catch(n){r(e,n)}}function i(t){return new n(function(e,n){n(t)})}function o(t){return new n(function(e){e(t)})}function s(t,e){if(t.a===d){if(e===t)throw new TypeError("Promise settled with itself.");var n=!1;try{var i=e&&e.then;if(null!==e&&"object"==typeof e&&"function"==typeof i)return void i.call(e,function(e){n||s(t,e),n=!0},function(e){n||r(t,e),n=!0})}catch(o){return void(n||r(t,o))}t.a=0,t.b=e,a(t)}}function r(t,e){if(t.a===d){if(e===t)throw new TypeError("Promise settled with itself.");t.a=1,t.b=e,a(t)}}function a(e){t(function(){if(e.a!==d)for(;e.f.length;){var t=e.f.shift(),n=t[0],i=t[1],o=t[2],t=t[3];try{0===e.a?o("function"==typeof n?n.call(void 0,e.b):e.b):1===e.a&&("function"==typeof i?o(i.call(void 0,e.b)):t(e.b))}catch(s){t(s)}}})}function f(t){return new n(function(e,n){function i(n){return function(i){r[n]=i,s+=1,s===t.length&&e(r)}}var s=0,r=[];0===t.length&&e(r);for(var a=0;a<t.length;a+=1)o(t[a]).c(i(a),n)})}function c(t){return new n(function(e,n){for(var i=0;i<t.length;i+=1)o(t[i]).c(e,n)})}var h=[];if(window.MutationObserver){var l=document.createElement("div");new MutationObserver(e).observe(l,{attributes:!0});var u=function(){l.setAttribute("x",0)}}else u=function(){setTimeout(e)};var d=2;n.prototype.g=function(t){return this.c(void 0,t)},n.prototype.c=function(t,e){var i=this;return new n(function(n,o){i.f.push([t,e,n,o]),a(i)})},window.Promise||(window.Promise=n,window.Promise.resolve=o,window.Promise.reject=i,window.Promise.race=c,window.Promise.all=f,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g)}(),function(){"use strict";function t(t){document.body?t():document.addEventListener("DOMContentLoaded",t)}function e(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.g=document.createElement("span"),this.f=-1,this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.g.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;",this.b.appendChild(this.h),this.c.appendChild(this.g),this.a.appendChild(this.b),this.a.appendChild(this.c)}function n(t,e,n){t.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-size:100px;font-family:"+e+";"+n}function i(t){var e=t.a.offsetWidth,n=e+100;return t.g.style.width=n+"px",t.c.scrollLeft=n,t.b.scrollLeft=t.b.scrollWidth+100,t.f!==e?(t.f=e,!0):!1}function o(t,e){t.b.addEventListener("scroll",function(){i(t)&&null!==t.a.parentNode&&e(t.f)},!1),t.c.addEventListener("scroll",function(){i(t)&&null!==t.a.parentNode&&e(t.f)},!1),i(t)}function s(t,e){var n=e||{};this.family=t,this.style=n.style||"normal",this.variant=n.variant||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal",this.featureSettings=n.featureSettings||"normal"}var r=null;s.prototype.a=function(i,s){var a=i||"BESbswy",f=s||3e3,c="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",h=document.createElement("div"),l=new e(a),u=new e(a),d=new e(a),p=-1,w=-1,m=-1,v=-1,y=-1,b=-1,g=this;return new Promise(function(e,i){function s(){null!==h.parentNode&&h.parentNode.removeChild(h)}function a(){if((-1!==p&&-1!==w||-1!==p&&-1!==m||-1!==w&&-1!==m)&&(p===w||p===m||w===m)){if(null===r){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);r=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}r?p===v&&w===v&&m===v||p===y&&w===y&&m===y||p===b&&w===b&&m===b||(s(),e(g)):(s(),e(g))}}t(function(){function t(){if(Date.now()-e>=f)s(),i(g);else{var n=document.hidden;!0!==n&&void 0!==n||(p=l.a.offsetWidth,w=u.a.offsetWidth,m=d.a.offsetWidth,a()),setTimeout(t,50)}}var e=Date.now();n(l,"sans-serif",c),n(u,"serif",c),n(d,"monospace",c),h.appendChild(l.a),h.appendChild(u.a),h.appendChild(d.a),document.body.appendChild(h),v=l.a.offsetWidth,y=u.a.offsetWidth,b=d.a.offsetWidth,t(),o(l,function(t){p=t,a()}),n(l,'"'+g.family+'",sans-serif',c),o(u,function(t){w=t,a()}),n(u,'"'+g.family+'",serif',c),o(d,function(t){m=t,a()}),n(d,'"'+g.family+'",monospace',c)})})},window.FontFaceObserver=s,window.FontFaceObserver.prototype.check=s.prototype.a}();
//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map

//# sourceMappingURL=fontobserver.js.map
