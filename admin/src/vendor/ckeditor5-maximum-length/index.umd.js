(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ckeditor5')) :
	typeof define === 'function' && define.amd ? define(['exports', 'ckeditor5'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MaximumLength = {}, global.CKEDITOR));
})(this, (function (exports, ckeditor5) { 'use strict';

	class t extends ckeditor5.Plugin{static get pluginName(){return "MaximumLength"}static get requires(){return ["WordCount"]}init(){const e=this.editor,t=e.plugins.get("WordCount"),r=e.config.get("maximumLength.characters");let i=!1;e.model.document.registerPostFixer((e=>{const s=t.characters,n=this._calculateExcessRange(r,s);n?i?e.updateMarker("maximumLengthExcess",{range:n,usingOperation:!1}):(e.addMarker("maximumLengthExcess",{range:n,usingOperation:!1}),i=!0):i&&(e.removeMarker("maximumLengthExcess"),i=!1);})),e.conversion.for("editingDowncast").markerToHighlight({model:"maximumLengthExcess",view:{classes:"ck-maximum-length-excess"}});}_calculateExcessRange(e,t){if(e>t)return null;const r=this.editor,i=r.model.createRangeIn(r.model.document.getRoot()).getWalker({singleCharacters:!0,direction:"backward"});let s,n,a=t;for(const t of i)if("text"==t.type&&(s||(s=t.previousPosition),a--,a<e))return n=t.previousPosition,r.model.createRange(n,s)}}

	exports.MaximumLength = t;

}));
//# sourceMappingURL=index.umd.js.map
