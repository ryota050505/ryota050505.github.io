(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{570:function(t,e,n){"use strict";n(21),n(18),n(13),n(25);var r=n(5),c=(n(6),n(57),n(81),n(42),n(20),n(39),n(82),n(543),n(54),n(544),n(545),n(546),n(547),n(548),n(549),n(550),n(551),n(552),n(553),n(554),n(555),n(556),n(55),n(19),n(344),n(4)),o=n(92),l=n(3);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=["sm","md","lg","xl"],j=["start","end","center"];function v(t,e){return y.reduce((function(n,r){return n[t+Object(l.F)(r)]=e(),n}),{})}var O=function(t){return[].concat(j,["baseline","stretch"]).includes(t)},h=v("align",(function(){return{type:String,default:null,validator:O}})),w=function(t){return[].concat(j,["space-between","space-around"]).includes(t)},m=v("justify",(function(){return{type:String,default:null,validator:w}})),C=function(t){return[].concat(j,["space-between","space-around","stretch"]).includes(t)},P=v("alignContent",(function(){return{type:String,default:null,validator:C}})),R={align:Object.keys(h),justify:Object.keys(m),alignContent:Object.keys(P)},S={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=S[t];if(null!=n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return(r+="-".concat(n)).toLowerCase()}}var x=new Map;e.a=c.default.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},h),{},{justify:{type:String,default:null,validator:w}},m),{},{alignContent:{type:String,default:null,validator:C}},P),render:function(t,e){var n=e.props,data=e.data,c=e.children,l="";for(var f in n)l+=String(n[f]);var d=x.get(l);return d||function(){var t,e;for(e in d=[],R)R[e].forEach((function(t){var r=n[t],c=k(e,t,r);c&&d.push(c)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(l,d)}(),t(n.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},690:function(t,e,n){"use strict";n.r(e);var r=n(16),c=n(17),o=n(26),l=n(23),f=n(9),d=n(10),y=(n(13),n(6),n(47),n(28));function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=function(t){Object(o.a)(n,t);var e=j(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"head",value:function(){return{title:"Home"}}}]),n}(y.Vue),h=O=v([y.Component],O),w=n(36),m=n(38),C=n.n(m),P=n(240),R=n(676),S=n(570),component=Object(w.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("v-card",{staticClass:"logo py-4 d-flex justify-center"},[t._v(" うえるかむ！ ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;C()(component,{VCard:P.a,VCol:R.a,VRow:S.a})}}]);