(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{620:function(t,e,n){"use strict";n.r(e);var o=n(11),c=n(12),r=n(20),l=n(19),f=n(5),h=n(6),d=(n(9),n(3),n(40),n(22));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var w=function(t,e,n,desc){var o,c=arguments.length,r=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(c<3?o(r):c>3?o(e,n,r):o(e,n))||r);return c>3&&r&&Object.defineProperty(e,n,r),r},y=function(t){Object(r.a)(n,t);var e=v(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).contactLinks=[{title:"Twitter",to:"https://twitter.com/05_BOC_05",icon:"mdi-twitter",color:"blue"},{title:"GitHub",to:"https://github.com/ryota050505",icon:"mdi-github",color:"grey lighten-1"},{title:"FaceBook",to:"https://www.facebook.com/profile.php?id=100072536162312",icon:"mdi-facebook",color:"indigo lighten-1"},{title:"YouTube",to:"https://www.youtube.com/channel/UCxrILSJ-mZGTc2f20ONxxZw",icon:"mdi-youtube",color:"red lighten-1"}],t}return Object(c.a)(n,[{key:"head",value:function(){return{title:"Contact"}}},{key:"jumpLinkTo",value:function(t){window.open(t,"_blank")}}]),n}(d.Vue),m=y=w([d.Component],y),k=n(32),j=n(30),O=n.n(j),R=n(221),_=n(526),x=n(465),V=n(201),C=n(527),B=n(56),component=Object(k.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{align:"center"}},[n("v-sheet",{attrs:{"min-height":"70vh",rounded:"lg"}},t._l(t.contactLinks,(function(link,i){return n("v-btn",{key:i,staticClass:"mx-16 my-10",attrs:{icon:"",text:"",link:""},on:{click:function(e){return t.jumpLinkTo(link.to)}}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[n("v-icon",{attrs:{"x-large":"",color:o?link.color:""}},[t._v("\n          "+t._s(link.icon)+"\n        ")])]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VBtn:R.a,VCol:_.a,VHover:x.a,VIcon:V.a,VRow:C.a,VSheet:B.a})}}]);