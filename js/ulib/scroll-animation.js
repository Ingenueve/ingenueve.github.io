'use strict';var _Mathmin=Math.min;(function(){window.constructorMode||require(['jquery'],function(a){var b=null,c=a(window),d=c.height(),e=c.scrollTop(),f=e+d,g=_Mathmin(100,d),j=a(['.ul-widget','.ul-blog-post'].join(','),'#main'),k=a(['.ul-absolute-widgets .ul-widget','.ul-w-spacer'].join(','),'#main'),l=j.not(k).filter(function(){return a(this).offset().top>f}).addClass('ul-scroll-animate').attr('data-animation-type','fade'),m=function doIt(){if(!l.length)return a(window).off('.scrollAnimation'),a(document).off('.scrollAnimation'),void b.disconnect();var o=c.scrollTop(),p=o+d,q=a();l.each(function(){var r=a(this),s=r.offset().top,t=s+r.outerHeight();(s>=o&&t<=p||s+g<p&&s>o||t<o)&&(q=q.add(r))}),q.attr('data-was-animated','true'),l=l.not(q)},n=function debounce(o,p){var r,s,q=!1;return s=function func(){r=arguments,q||(o.apply(null,r),q=!0,l.length&&setTimeout(function(){q=!1,s.apply(null,r)},p))},s};a(window).on('scroll.scrollAnimation',n(m,500)).on('resize.scrollAnimation',function(){d=c.height(),g=_Mathmin(100,d)}),('ontouchstart'in window||'onmsgesturechange'in window)&&a(document).on('touchmove.scrollAnimation MSPointerMove.scrollAnimation pointermove.scrollAnimation',n(m,500)),b=new MutationObserver(n(m,500)),b.observe(document.body,{childList:!0,attributes:!1,characterData:!1,subtree:!0})})})();
//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map
