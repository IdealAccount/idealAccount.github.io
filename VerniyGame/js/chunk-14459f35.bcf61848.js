(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14459f35"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"11e9":function(t,e,n){var r=n("52a7"),a=n("4630"),o=n("6821"),i=n("6a99"),u=n("69a8"),c=n("c69a"),s=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?s:function(t,e){if(t=o(t),e=i(e,!0),c)try{return s(t,e)}catch(n){}if(u(t,e))return a(!r.f.call(t,e),t[e])}},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,a;if(e&&"function"==typeof(n=t.toString)&&!r(a=n.call(t)))return a;if("function"==typeof(n=t.valueOf)&&!r(a=n.call(t)))return a;if(!e&&"function"==typeof(n=t.toString)&&!r(a=n.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),a=n("e53d").document,o=r(a)&&r(a.createElement);t.exports=function(t){return o?a.createElement(t):{}}},"21bb":function(t,e,n){},"24aa":function(t,e,n){"use strict";var r=n("526b"),a=n.n(r);a.a},"28a7":function(t,e,n){"use strict";var r=n("41cd"),a=n.n(r);a.a},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,n){var r=n("d9f6"),a=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}},"3a60":function(t,e,n){(function(e,n){t.exports=n()})(0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,n){"use strict";function r(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var a=n(2),o=n(0),i=n.n(o);e.a=function(t,e){var o=e.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:i.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var u=t.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);t=u[0]}t.oninput=function(e){if(e.isTrusted){var i=t.selectionEnd,u=t.value[i-1];for(t.value=n.i(a.a)(t.value,o.mask,!0,o.tokens);i<t.value.length&&t.value.charAt(i-1)!==u;)i++;t===document.activeElement&&(t.setSelectionRange(i,i),setTimeout(function(){t.setSelectionRange(i,i)},0)),t.dispatchEvent(r("input"))}};var c=n.i(a.a)(t.value,o.mask,!0,o.tokens);c!==t.value&&(t.value=c,t.dispatchEvent(r("input")))}},function(t,e,n){"use strict";var r=n(6),a=n(5);e.a=function(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(e)?n.i(a.a)(r.a,e,i)(t,e,o,i):n.i(r.a)(t,e,o,i)}},function(t,e,n){"use strict";function r(t){t.component(c.a.name,c.a),t.directive("mask",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),o=n.n(a),i=n(1),u=n(7),c=n.n(u);n.d(e,"TheMask",function(){return c.a}),n.d(e,"mask",function(){return i.a}),n.d(e,"tokens",function(){return o.a}),n.d(e,"version",function(){return s});var s="0.11.1";e.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),a=n(0),o=n.n(a),i=n(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t;t=n.i(i.a)(t,this.mask,this.masked,this.tokens);t!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,n){"use strict";function r(t,e,n){return e=e.sort(function(t,e){return t.length-e.length}),function(r,a){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<e.length;){var u=e[i];i++;var c=e[i];if(!(c&&t(r,c,!0,n).length>u.length))return t(r,u,o,n)}return""}}e.a=r},function(t,e,n){"use strict";function r(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];t=t||"",e=e||"";for(var a=0,o=0,i="";a<e.length&&o<t.length;){var u=e[a],c=r[u],s=t[o];c&&!c.escape?(c.pattern.test(s)&&(i+=c.transform?c.transform(s):s,a++),o++):(c&&c.escape&&(a++,u=e[a]),n&&(i+=u),s===u&&o++,a++)}for(var f="";a<e.length&&n;){u=e[a];if(r[u]){f="";break}f+=u,a++}return i+f}e.a=r},function(t,e,n){var r=n(8)(n(4),n(9),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var a,o=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,o=t.default);var u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var c=u.computed||(u.computed={});Object.keys(r).forEach(function(t){var e=r[t];c[t]=function(){return e}})}return{esModule:a,exports:o,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}])})},"3c6d":function(t,e,n){},"41cd":function(t,e,n){},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"456d":function(t,e,n){var r=n("4bf8"),a=n("0d58");n("5eda")("keys",function(){return function(t){return a(r(t))}})},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"526b":function(t,e,n){},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"5eda":function(t,e,n){var r=n("5ca1"),a=n("8378"),o=n("79e5");t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",i)}},"63b6":function(t,e,n){var r=n("e53d"),a=n("584a"),o=n("d864"),i=n("35e8"),u=n("07e3"),c="prototype",s=function(t,e,n){var f,l,p,d=t&s.F,v=t&s.G,h=t&s.S,m=t&s.P,b=t&s.B,y=t&s.W,g=v?a:a[e]||(a[e]={}),k=g[c],w=v?r:h?r[e]:(r[e]||{})[c];for(f in v&&(n=e),n)l=!d&&w&&void 0!==w[f],l&&u(g,f)||(p=l?w[f]:n[f],g[f]=v&&"function"!=typeof w[f]?n[f]:b&&l?o(p,r):y&&w[f]==p?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(p):m&&"function"==typeof p?o(Function.call,p):p,m&&((g.virtual||(g.virtual={}))[f]=p,t&s.R&&k&&!k[f]&&i(k,f,p)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},"6c75":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:["v-button",{disabled:t.isDisabled}],attrs:{disabled:t.isDisabled},on:{click:function(e){return e.preventDefault(),t.$emit("click")}}},[t._t("default",[t._v("Играть")])],2)},a=[],o={props:{isDisabled:Boolean}},i=o,u=(n("88e9"),n("2877")),c=Object(u["a"])(i,r,a,!1,null,null,null);e["a"]=c.exports},7435:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-modal"},[n("span",{staticClass:"v-modal-close",on:{click:function(e){return t.$router.go(-1)}}},[n("svg",{attrs:{width:"43",height:"44",viewBox:"0 0 43 44",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M10.4649 12.8389C10.172 12.546 10.2512 11.992 10.6417 11.6015C11.0322 11.211 11.5862 11.1318 11.8791 11.4247L32.0317 31.5773C32.3245 31.8701 32.2454 32.4242 31.8549 32.8147C31.4644 33.2052 30.9103 33.2844 30.6174 32.9915L10.4649 12.8389Z",fill:"#FF711A"}}),n("path",{attrs:{d:"M11.879 32.9912C11.5861 33.284 11.0321 33.2049 10.6415 32.8144C10.251 32.4239 10.1719 31.8698 10.4647 31.5769L30.6173 11.4244C30.9102 11.1315 31.4642 11.2107 31.8547 11.6012C32.2453 11.9917 32.3244 12.5457 32.0315 12.8386L11.879 32.9912Z",fill:"#FF711A"}})])]),n("div",{staticClass:"v-modal__body"},[t._t("default")],2)])},a=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("2f62");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach(function(e){Object(o["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var s={name:"VModal",methods:c({},Object(i["b"])(["routerPush"]))},f=s,l=(n("7d26"),n("2877")),p=Object(l["a"])(f,r,a,!1,null,null,null);e["a"]=p.exports},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7a08":function(t,e,n){t.exports=n.p+"img/phone.f88d139f.svg"},"7d26":function(t,e,n){"use strict";var r=n("e6f7"),a=n.n(r);a.a},"85f2":function(t,e,n){t.exports=n("454f")},"88e9":function(t,e,n){"use strict";var r=n("3c6d"),a=n.n(r);a.a},"8c9a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-modal",{staticClass:"modal-reg"},[n("h3",{staticClass:"modal-reg__title"},[t._v("Заполните данные")]),n("form",{staticClass:"modal-form"},[n("v-modal-input",{staticClass:"modal-reg__input",attrs:{"place-holder":"Имя",autofocus:""}}),n("v-modal-input",{staticClass:"modal-reg__input",attrs:{type:"tel"}})],1),n("p",[t._v("\n    Номер телефона нужен для входа в игру. Обещаем не присылать вам спам и не\n    передавать ваш номер телефона третьим лицам.\n  ")]),n("div",{staticClass:"v-modal-footer modal-reg__footer"},[n("v-button",{class:{disabled:!t.rules.checked},on:{click:t.goNext}},[t._v("Играть")]),n("v-rules-agree",{class:t.rules.class,attrs:{type:"modal"},on:{change:function(e){t.rules.checked=!t.rules.checked}}},[n("span",[t._v("и согласен на\n        "),n("a",{staticClass:"link",attrs:{href:"#!"}},[t._v("обработку личных данных")])])])],1)])},a=[],o=n("7435"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-input-wrapper"},[t._t("default"),"text"===t.type?n("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"v-input",attrs:{placeholder:t.placeHolder,maxlength:"20"}}):"tel"===t.type?n("div",{staticClass:"v-input-tel"},[t._m(0),n("the-mask",{staticClass:"v-input",attrs:{mask:"!+7 (###) ###-##-##",value:"+7 (",type:"tel",placeholder:"+7(  )"}})],1):t._e()],2)},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("img",{staticClass:"v-input-img",attrs:{src:n("7a08")}})])}],c=n("3a60"),s={props:{unValid:Boolean,placeHolder:String,autofocus:Boolean,type:{type:String,default:"text"}},components:{TheMask:c["TheMask"]}},f=s,l=(n("c88a"),n("2877")),p=Object(l["a"])(f,i,u,!1,null,null,null),d=p.exports,v=n("abd5"),h=n("6c75"),m={name:"VModalReg",props:["routerPush"],components:{VModal:o["a"],VButton:h["a"],VRulesAgree:v["a"],VModalInput:d},data:function(){return{rules:{checked:!1,class:null}}},methods:{goNext:function(){var t=this;if(!this.rules.checked)return this.rules.class="animate-shake",void setTimeout(function(){t.rules.class=null},800);this.$router.push("code")}}},b=m,y=(n("24aa"),Object(l["a"])(b,r,a,!1,null,null,null));e["default"]=y.exports},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"8e6e":function(t,e,n){var r=n("5ca1"),a=n("990b"),o=n("6821"),i=n("11e9"),u=n("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),c=i.f,s=a(r),f={},l=0;while(s.length>l)n=c(r,e=s[l++]),void 0!==n&&u(f,e,n);return f}})},9093:function(t,e,n){var r=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},"990b":function(t,e,n){var r=n("9093"),a=n("2621"),o=n("cb7c"),i=n("7726").Reflect;t.exports=i&&i.ownKeys||function(t){var e=r.f(o(t)),n=a.f;return n?e.concat(n(t)):e}},abd5:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["v-rules-agree",t.type]},[n("input",{staticClass:"checkbox-input",attrs:{id:t.type,type:"checkbox",hidden:""},domProps:{checked:t.isChecked},on:{change:t.updateInput}}),n("label",{staticClass:"checkbox-label",attrs:{for:t.type}},[n("span",[t._v("Я ознакомлен с\n      "),n("a",{staticClass:"link",attrs:{href:"#!"},on:{click:function(e){return e.preventDefault(),t.$router.push("rules")}}},[t._v("правилами")])]),n("br"),t._t("default")],2)])},a=[],o={props:{type:String,isChecked:{default:null}},data:function(){return{}},methods:{updateInput:function(t){var e=t.target.checked;this.$emit("change",e)}}},i=o,u=(n("28a7"),n("2877")),c=Object(u["a"])(i,r,a,!1,null,null,null);e["a"]=c.exports},ac6a:function(t,e,n){for(var r=n("cadf"),a=n("0d58"),o=n("2aba"),i=n("7726"),u=n("32e9"),c=n("84f2"),s=n("2b4c"),f=s("iterator"),l=s("toStringTag"),p=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=a(d),h=0;h<v.length;h++){var m,b=v[h],y=d[b],g=i[b],k=g&&g.prototype;if(k&&(k[f]||u(k,f,p),k[l]||u(k,l,b),c[b]=p,y))for(m in r)k[m]||o(k,m,r[m],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},bd86:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("85f2"),a=n.n(r);function o(t,e,n){return e in t?a()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},c88a:function(t,e,n){"use strict";var r=n("21bb"),a=n.n(r);a.a},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,a){return t.call(e,n,r,a)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),a=n("794b"),o=n("1bc3"),i=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),a)try{return i(t,e,n)}catch(u){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e6f7:function(t,e,n){},f1ae:function(t,e,n){"use strict";var r=n("86cc"),a=n("4630");t.exports=function(t,e,n){e in t?r.f(t,e,a(0,n)):t[e]=n}},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-14459f35.bcf61848.js.map