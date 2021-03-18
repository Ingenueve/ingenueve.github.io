"use strict";!function(){var t={block:{},maps:{},isInitEventConstructor:!1,initConstructor:function(t,o,n){var e=this;if(o){var i=t.closest(".ul-container");e.block[i.attr("id")]={id:i.attr("id"),mapSettings:o},this.renderMap(t,o,!0,function(t){e.isInitEventConstructor||e.constructorEvents(),n(t)})}},constructorEvents:function(){var t=this;t.isInitEventConstructor=!0;var o=function(){t.block&&$.each(t.block,function(){var t=this;setTimeout(function(){t.map&&t.map.fitToViewport(t.mapSettings.options.bounds)},1e3)})};$(window).off(".mapBackgroundResizeConstructor").on("addElelment.mapBackgroundResizeConstructor",o).on("colResized.mapBackgroundResizeConstructor",o).on("endWidgetEdit.mapBackgroundResizeConstructor",o)},initPublish:function(){var t=this;$.each($(".ul-container","#body-fict"),function(){var o=$(this);if("map"==o.attr("data-bgtype")){var n=null;try{n=JSON.parse(o.attr("data-map-settings"))}catch(e){console.error("map settings JSON parse failed")}if(!n)return;t.block[o.attr("id")]={id:o.attr("id"),mapSettings:n},t.renderMap($(".js-background-map",o),n,!1)}})},renderMap:function(t,o,n,e){var i=this,r=["map-helper/"+o.options.provider];"google"===o.options.provider&&r.push("json!/widgets/maps/json/styles_googlemaps.json"),o.markers||(o.markers=[]),i.block[t.closest(".ul-container").attr("id")].map=null,require(r,function(r,s){t.empty(),r({$el:t,mapOpts:{mapTypeId:o.options.mapTypeId,styles:s?s[o.options.styleNumber]:null,draggable:n,mapTypeControl:n,zoomControl:n,panControl:n,streetViewControl:n,scrollWheel:!1,bounds:{northWest:{latitude:o.options.bounds.northWest.latitude,longitude:o.options.bounds.northWest.longitude},southEast:{latitude:o.options.bounds.southEast.latitude,longitude:o.options.bounds.southEast.longitude}}},markers:o.markers.filter(function(t){return t.isEnabled}).map(function(t){return{id:t.id,latitude:Number(t.latitude),longitude:Number(t.longitude),text:i.getMarkerText(t.title,t.description),isDraggable:n}})},function(n){i.block[t.closest(".ul-container").attr("id")]={id:t.closest(".ul-container").attr("id"),mapSettings:o,map:n},i.event(),e&&e(n)})})},getMarkerText:function(t,o){if(!t&&!o)return"";var n=[];return t&&n.push("<b>"+t+"</b>"),o&&n.push(o),'<span style="color: #000;">'+n.join("<br>")+"</span>"},event:function(){var t=this,o=function(){$.each(t.block,function(){var o=this,n=$(".js-background-map",$("#"+o.id));n.length&&t.block[o.id].map&&t.block[o.id].map&&setTimeout(function(){t.block&&t.block[o.id]&&t.block[o.id].map&&t.block[o.id].map.fitToViewport(o.mapSettings.options.bounds)},1e3)})};$(window).off("resize.mapBackgroundResize"),$(window).on("resize.mapBackgroundResize",o)}};window.constructorMode?define("mapBgRender",["jquery"],function(){return t}):require(["jquery"],function(){t.initPublish()})}();
//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map
