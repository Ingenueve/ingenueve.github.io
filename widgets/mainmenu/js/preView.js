!function(){function e(e){if(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t}}function t(e){var t=e.offsetWidth,n=window.getComputedStyle(e);return isNaN(parseInt(n.borderLeft))||(t+=parseInt(n.borderLeft)),isNaN(parseInt(n.borderRight))||(t+=parseInt(n.borderRight)),isNaN(parseInt(n.marginLeft))||(t+=parseInt(n.marginLeft)),isNaN(parseInt(n.marginRight))||(t+=parseInt(n.marginRight)),t}function n(){if(i.length)for(var e=0;e<i.length;e++)l(i[e])}function l(n){var l=n.getElementsByClassName("ul-w-mainmenu-nav")[0];if(!n.parentNode.classList.contains("vertical-menu")){var i=n.querySelectorAll(".ul-w-mainmenu-toggle")[0];if(!i||!l)return;i.style.display="inline-block";var a=window.innerWidth;a>1024?(l.classList.remove("mobile"),l.classList.remove("htablet"),l.classList.remove("vtablet"),l.classList.add("desktop")):a>768&&1024>=a?(l.classList.remove("mobile"),l.classList.remove("desktop"),l.classList.remove("vtablet"),l.classList.add("htablet")):a>600&&768>=a?(l.classList.remove("mobile"),l.classList.remove("desktop"),l.classList.remove("htablet"),l.classList.add("vtablet")):(l.classList.remove("desktop"),l.classList.remove("htablet"),l.classList.remove("vtablet"),l.classList.add("mobile"));var s;if(!n.getElementsByClassName("ul-w-mainmenu-toggle-button")[0])return;s=window.getComputedStyle(n.getElementsByClassName("ul-w-mainmenu-toggle-button")[0]).display;for(var r=n.querySelectorAll(".ul-w-mainmenu-nav .ul-w-mainmenu-item"),o=0;o<r.length;o++)r[o].style.display="inline-block";var m=e(n.querySelectorAll(".ul-w-mainmenu-nav > .ul-w-mainmenu-item")),u=t(l),d=n.querySelectorAll(".ul-w-mainmenu-toggle-nasted")[0];m.reverse().forEach(function(e){d&&(d.firstChild?d.insertBefore(e,d.firstChild):d.appendChild(e))});for(var c=t(i),v=e(n.querySelectorAll(".ul-w-mainmenu-toggle-nasted > .ul-w-mainmenu-item")),w=0;w<v.length;w++){var g=v[w];l.insertBefore(g,i);var f=t(g);if(!(u>c+f)){d.insertBefore(g,d.firstChild);break}c+=f}for(var y=0;y<r.length;y++)r[y].style.display="";var h=e(n.querySelectorAll(".ul-w-mainmenu-toggle-nasted > .ul-w-mainmenu-item")).length;if(i.style.display="block","none"==s&&(h?i.style.display="block":i.style.display="none"),d&&d.querySelector&&d.querySelector(".ul-w-mainmenu-active-item")){var L=n.querySelector(".ul-w-mainmenu-toggle");L&&L.classList.add("ul-w-mainmenu-active-item")}}l.style.opacity=""}for(var i=document.getElementsByClassName("ul-w-mainmenu"),a=0;a<i.length;a++)i[a].getElementsByClassName("ul-w-mainmenu-toggle-nasted")[0].classList.add("ul-w-mainmenu-toggle-nested");var s=!1,r=!1;window.setTimeout(function(){if(!s){for(var e=0;e<i.length;e++)l(i[e]);s=!0,r||window.addEventListener&&(window.addEventListener("resize",n),r=!0)}},3e3);var o=JSON.stringify(window.getComputedStyle(e(i[0].querySelectorAll("#body .ul-w-mainmenu-nav .ul-w-mainmenu-item a"))[0]).fontFamily),m=new FontFaceObserver(o,{});m.check(null,1e4).then(function(){window.setTimeout(function(){for(var e=0;e<i.length;e++)l(i[e])},10),s=!0,r||window.addEventListener&&(window.addEventListener("resize",n),r=!0)},function(){window.addEventListener("load",function(){window.loaded=!0}),function e(){if(window.loaded)for(var t=0;t<i.length;t++)l(i[t]);else window.setTimeout(e,50)}()})}();
//# sourceMappingURL=preView.js.map

//# sourceMappingURL=preView.js.map

//# sourceMappingURL=preView.js.map

//# sourceMappingURL=preView.js.map

//# sourceMappingURL=preView.js.map

//# sourceMappingURL=preView.js.map

//# sourceMappingURL=preView.js.map

//# sourceMappingURL=preView.js.map

//# sourceMappingURL=preView.js.map

//# sourceMappingURL=preView.js.map

//# sourceMappingURL=preView.js.map

//# sourceMappingURL=preView.js.map

//# sourceMappingURL=preView.js.map

//# sourceMappingURL=preView.js.map

//# sourceMappingURL=preView.js.map

//# sourceMappingURL=preView.js.map
