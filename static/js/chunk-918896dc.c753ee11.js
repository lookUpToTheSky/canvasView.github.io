(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-918896dc"],{"0b08":function(t,e,n){t.exports=n.p+"static/img/0.05e87c30.png"},"1e4b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"search"},[n("el-input",{staticClass:"search-input",attrs:{size:"small",placeholder:"搜索"},on:{input:t.filters},model:{value:t.modelName,callback:function(e){t.modelName=e},expression:"modelName"}})],1),n("div",{staticClass:"list-product"},[n("div",{staticClass:"title"},[t._v("我的组态")]),n("ul",{staticClass:"list"},t._l(t.modelList,(function(e,a){return n("li",{key:a},[n("div",[n("el-image",{staticClass:"item",attrs:{src:e.icon,fit:"cover"},on:{click:function(n){return t.previewModel(e)}}}),n("div",{staticClass:"name"},[t._v(t._s(e.name))]),n("div",{staticClass:"option"},[n("button",{staticClass:"primary"},[t._v("发布")]),n("button",{staticClass:"primary",on:{click:function(n){return n.stopPropagation(),t.editModel(e)}}},[t._v("编辑")]),n("button",{staticClass:"primary",on:{click:function(n){return n.stopPropagation(),t.previewModel(e)}}},[t._v("预览")]),n("button",{staticClass:"danger"},[t._v("删除")])])],1)])})),0)])])},i=[],r=n("b5e5"),s=n("c1f9"),o=(n("e186"),n("28fd"),n("a9b6"),n("3e22"),n("16e1"),n("82ae")),c=n.n(o),l={data:function(){return{modelName:"",allModelList:[{name:"大屏展示",url:"./json/View2d_data_48510781.json",icon:n("0b08")},{name:"大屏布局",url:"./json/View2d_data_14490622.json",icon:n("775a")},{name:"动态",url:"./json/View2d_data_48227133.json",icon:n("8e308")},{name:"在线监测大屏",url:"./json/View2d_data_90474530.json",icon:n("1f66")},{name:"水循环系统",url:"./json/View2d_data_79261988.json",icon:n("5fa5")},{name:"多组系统展示",url:"./json/View2d_data_31589026.json",icon:n("c037")}],modelList:[]}},methods:{filters:function(){var t=this;this.modelName?this.modelList=this.allModelList.filter((function(e){return-1!=e.name.indexOf(t.modelName)})):this.modelList=Object(s["a"])(this.allModelList)},previewModel:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c.a.get(t.url);case 2:a=n.sent,e.$store.commit("addView",a),i=JSON.stringify(a),e.$router.push({name:"preview",params:{pageData:i}});case 6:case"end":return n.stop()}}),n)})))()},editModel:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c.a.get(t.url);case 2:a=n.sent,e.$store.commit("addView",a),i=JSON.stringify(a),e.$router.push({name:"workspace",params:{pageData:i}});case 6:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.modelList=Object(s["a"])(this.allModelList)}},u=l,d=(n("42d2"),n("cba8")),m=Object(d["a"])(u,a,i,!1,null,"881337b0",null);e["default"]=m.exports},"1f66":function(t,e,n){t.exports=n.p+"static/img/3.e35c92f5.png"},"42d2":function(t,e,n){"use strict";n("bd7c")},"5fa5":function(t,e,n){t.exports=n.p+"static/img/4.35bfaf20.png"},"775a":function(t,e,n){t.exports=n.p+"static/img/1.18854f1d.png"},"8e308":function(t,e,n){t.exports=n.p+"static/img/2.5b872b33.png"},bd7c:function(t,e,n){},c037:function(t,e,n){t.exports=n.p+"static/img/5.8d263f9a.png"},c1f9:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n("b687");function i(t){if(Array.isArray(t))return Object(a["a"])(t)}n("49e9"),n("c2e6"),n("a9b6"),n("742a"),n("2690"),n("d4f9"),n("f4c5");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=n("de83");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||r(t)||Object(s["a"])(t)||o()}}}]);
//# sourceMappingURL=chunk-918896dc.c753ee11.js.map