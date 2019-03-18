(function(e){function t(t){for(var i,a,o=t[0],c=t[1],l=t[2],f=0,d=[];f<o.length;f++)a=o[f],s[a]&&d.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("1d50")},"044f":function(e,t,n){"use strict";var i=n("b8f7"),s=n.n(i);s.a},"1a83":function(e,t,n){"use strict";var i=n("a38e"),s=n.n(i);s.a},"1d50":function(e,t,n){"use strict";n.r(t);n("b731"),n("2e6c"),n("f168"),n("a04c");var i=n("e832"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Portfolio"),n("Bottom")],1)},r=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"portfolio hero"},[n("About"),n("Personal"),n("Projects")],1)},o=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-one-third aboutPicture"},[i("figure",{staticClass:"image is-600x600"},[i("img",{attrs:{src:n("7052")}})])]),i("div",{staticClass:"column is-two-thirds"},[i("div",{staticClass:"aboutContent"},[i("div",{staticClass:"container middle"},[i("div",{staticClass:"about"},[i("p",{staticClass:"caption aboutTitle"},[e._v("About")]),i("p",{staticClass:"aboutText"},[e._v("My name is Leander van Diepen I am 19 years old and I am a fullstack web-developer from Germany.\n              "),i("br"),e._v("This website is inteded to showcase my web development skills and sell my services.\n              "),i("br"),i("br"),e._v("I've been programming since I was 14 years old and been doing web development for 2 1/2 years.\n              "),i("br"),e._v("My specialties are Single-Page-Applications i.e. Web Applications which are responsive to the user/customer behavior.\n              "),i("br"),i("br"),e._v("Web Applications that fit my skills best are websites for restaturants, delivery services,\n              "),i("br"),e._v("generally all retailers and websites for internal shop administration.\n            ")])])])])])])])}],u={},f=u,d=(n("6f93"),n("a6c2")),p=Object(d["a"])(f,c,l,!1,null,"1df24b92",null);p.options.__file="About.vue";var v=p.exports,m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-one-third"}),n("div",{staticClass:"container"},[n("div",{staticClass:"column is-two-thirds"},[n("p",{staticClass:"caption"},[e._v("Insights")]),n("div",{staticClass:"education"},[n("p",[e._v('\n            In summer semester 2017 I was able to get my first experience with university.\n            I participated in the project "Studieren vor dem Abitur" by the Heinrich-Heine University in Düsseldorf.\n            There I took a physics class with the topic of theoretical mechanics. I attended the lectures and exercises and did\n            my best following along despite the high prerequisites in mathematics and physics.\n          ')])])])])])])}],h={},_=h,y=(n("1a83"),Object(d["a"])(_,m,b,!1,null,"7f6653e1",null));y.options.__file="Personal.vue";var C=y.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"projects"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-one-third"}),n("div",{staticClass:"colum is-two-thirds projectsContent"},[n("p",{staticClass:"caption projectsTitle"},[e._v("Projects (Former, Current, Ahead)")])])])])}],j={},P=j,x=(n("044f"),Object(d["a"])(P,g,w,!1,null,"30335702",null));x.options.__file="Projects.vue";var O=x.exports,$={name:"Portfolio",components:{Projects:O,About:v,Personal:C}},E=$,A=(n("e84c"),Object(d["a"])(E,a,o,!1,null,"6e7b1c41",null));A.options.__file="Portfolio.vue";var I=A.exports,S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero header is-flex-widescreen"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-two-fifths"}),n("div",{staticClass:"column"},[n("div",{staticClass:"title"},[n("p",{staticClass:"brand"},[e._v("Leander van Diepen")]),n("p",{staticClass:"desc"},[e._v("Software Development")])])])])])}],k={},M=k,D=(n("bd11"),Object(d["a"])(M,S,T,!1,null,"8277af12",null));D.options.__file="Header.vue";var H=D.exports,B=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero bottom is-flex-widescreen"},[n("p",[e._v("Leander van Diepen")]),n("p",[e._v("+49 1578 8805638")]),n("p",[e._v("vandiepen.international@gmail.com")]),n("p",{attrs:{id:"git"}},[e._v("https://github.com/StrndedLeander")])])}],J={name:"Bottom"},W=J,q=(n("c14b"),Object(d["a"])(W,B,L,!1,null,"e70d81e6",null));q.options.__file="Bottom.vue";var F=q.exports,G={name:"app",components:{Portfolio:I,Header:H,Bottom:F}},U=G,z=(n("e5cd"),Object(d["a"])(U,s,r,!1,null,null,null));z.options.__file="App.vue";var K=z.exports;n("5d31"),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(K)}}).$mount("#app")},3132:function(e,t,n){},5844:function(e,t,n){},"5d31":function(e,t,n){},"6f93":function(e,t,n){"use strict";var i=n("3132"),s=n.n(i);s.a},7052:function(e,t,n){e.exports=n.p+"img/Portfolio-Pic.0e4ce624.png"},"728d":function(e,t,n){},"783f":function(e,t,n){},"9a2c":function(e,t,n){},a38e:function(e,t,n){},b8f7:function(e,t,n){},bd11:function(e,t,n){"use strict";var i=n("728d"),s=n.n(i);s.a},c14b:function(e,t,n){"use strict";var i=n("9a2c"),s=n.n(i);s.a},e5cd:function(e,t,n){"use strict";var i=n("783f"),s=n.n(i);s.a},e84c:function(e,t,n){"use strict";var i=n("5844"),s=n.n(i);s.a}});
//# sourceMappingURL=app.f676c2d3.js.map