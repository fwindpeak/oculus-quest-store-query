(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/oculus-quest-store-list/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ab0":function(t,e,n){"use strict";n("c432")},"43fd":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("91d5");var o=n("f0ca"),a=(n("c3a6"),n("ad06")),r=(n("5852"),n("d961")),i=(n("66cf"),n("343b")),s=(n("5f1a"),n("a3e2")),c=(n("9cb7"),n("66fd")),l=(n("66b9"),n("b650")),u=(n("2994"),n("2bdd")),d=(n("4056"),n("44bf")),f=(n("81e6"),n("9ffb")),p=(n("4d48"),n("d1e1")),h=(n("a909"),n("3acc")),m=(n("3c32"),n("417e")),v=(n("0653"),n("34e9")),b=(n("c194"),n("7744")),y=(n("bda7"),n("5e46")),g=(n("da3c"),n("0b33")),w=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticStyle:{"text-align":"center"}},[t._v("Oculus Quest 游戏查询")]),n("square")],1)},D=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("ScrollTop"),n("van-search",{attrs:{placeholder:"请输入搜索关键词"},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),n("van-tabs",{attrs:{animated:"",swipeable:""}},[n("van-tab",{attrs:{title:"全部"}},[n("list",{attrs:{data:t.allData,keywords:t.keywords,type:"all"}})],1),n("van-tab",{attrs:{title:"免费"}},[n("list",{attrs:{data:t.allData,keywords:t.keywords,type:"free"}})],1),n("van-tab",{attrs:{title:"打折"}},[n("list",{attrs:{data:t.allData,keywords:t.keywords,type:"discount"}})],1)],1)],1)])},k=[],T=(n("4de4"),n("c975"),n("fb6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"scroller-box"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad}},[t._l(t.showData,(function(t){return n("div",{key:t.node.id},[n("Card",{attrs:{nodeData:t.node}})],1)})),t.showData.length<1?n("van-empty",{attrs:{description:""}}):t._e()],2)],1)}),S=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("van-card",{attrs:{"thumb-link":t.cardClickLink,price:t.getPrice(t.nodeData.current_offer.price.offset_amount),desc:t.relaceData,title:t.nodeData.display_name,thumb:t.getCoverUrl(t.nodeData.id),"origin-price":t.originPrice,"lazy-load":!1},on:{click:t.onCardClicked},scopedSlots:t._u([{key:"tags",fn:function(){return[t.isFree?n("van-tag",{attrs:{plain:"",type:"success"}},[t._v("免费")]):t._e(),t.isDiscount?n("van-tag",{attrs:{plain:"",type:"danger"}},[t._v("打折")]):t._e()]},proxy:!0},{key:"num",fn:function(){return[t.isDiscount?n("van-tag",{attrs:{type:"danger"}},[[n("div",{staticStyle:{"text-align":"center"}},[n("div",[t._v(t._s(t.nodeData.current_offer.promo_benefit))]),n("div",{staticStyle:{"font-size":"0.5rem"}},[t._v(" "+t._s(t.timeRemain(t.nodeData.current_offer.end_time))+" ")])])]],2):t._e()]},proxy:!0}])})],1)},I=[],C=(n("b680"),n("5a0c")),j=n.n(C),E={props:{nodeData:{type:Object}},computed:{cardClickLink:function(){return"https://www.oculus.com/experiences/quest/".concat(this.nodeData.id,"/")},isDiscount:function(){return!!this.nodeData.current_offer.promo_benefit},isFree:function(){return"0"==this.nodeData.current_offer.price.offset_amount},tag:function(){return this.isDiscount?"打折":this.isFree?"免费":null},relaceData:function(){return"发售日期：".concat(this.getDate(this.nodeData.release_date))},originPrice:function(){return this.isDiscount?this.getPrice(this.nodeData.current_offer.strikethrough_price.offset_amount):null}},methods:{getCoverUrl:function(t){return"./cover/".concat(t,"/square.jpg")},getPrice:function(t){var e=6.53;return"0"==t?null:(t*e/100).toFixed(2)},getDate:function(t){return j.a.unix(t).format("YYYY-MM-DD")},timeRemain:function(t){j.a.locale("zh-cn");var e=n("4208");j.a.extend(e);var o=j.a.unix(t);return o.fromNow(!0)},onCardClicked:function(){window.open(this.cardClickLink)}}},F=E,L=(n("0ab0"),n("2877")),P=Object(L["a"])(F,O,I,!1,null,null,null),$=P.exports,q={props:{data:{default:[]},keywords:{type:String,default:""},type:{type:String,default:"all"}},components:{Card:$},data:function(){return{allData:[],filterType:[],offsetIndex:0,pageItems:20,finished:!1,showBackTopIcon:!0}},computed:{isFree:function(){return"free"===this.type},isDiscount:function(){return"discount"===this.type},filtedData:function(){var t=this;return this.data.filter((function(e){if(t.isDiscount&&!e.node.current_offer.promo_benefit)return!1;if(t.isFree&&"$0.00"!==e.node.current_offer.price.formatted)return!1;var n=e.node.display_name.toLowerCase();return-1!=n.indexOf(t.keywords.toLowerCase())}))},showData:function(){return this.filtedData.slice(0,this.offsetIndex)},itemCount:function(){return"列表数量：".concat(this.showData.length)}},watch:{filtedData:function(){this.offsetIndex=this.pageItems,this.updateOffesetIndex()}},methods:{updateOffesetIndex:function(){this.offsetIndex>=this.filtedData.length?(this.offsetIndex=this.filtedData.length,this.offsetIndex>this.pageItems&&(this.finished=!0)):this.finished=!1},onLoad:function(){this.offsetIndex<this.filtedData.length&&(this.offsetIndex+=this.pageItems),this.updateOffesetIndex()},backTop:function(){}}},z=q,M=(n("f62b"),Object(L["a"])(z,T,S,!1,null,null,null)),A=M.exports,Y=n("bc3a"),B=n.n(Y);function J(){return B.a.get("./oculus-quest-store.json?v=".concat(Date.now()))}var N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"el-fade-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"page-component-up",on:{click:t.scrollToTop}},[n("van-icon",{staticClass:"el-icon-caret-top",attrs:{name:"back-top"}})],1)])},R=[],U={data:function(){return{toTopShow:!1}},computed:{scrollSize:function(){return document.body.scrollTop||document.documentElement.scrollTop||window.pageYoffset}},methods:{handleScroll:function(){console.log("handleScroll"),this.scrollTop=document.documentElement.scrollTop,this.scrollTop>300?this.toTopShow=!0:this.toTopShow=!1},scrollToTop:function(){console.log("scroll to top"),document.documentElement.scrollTop=0,document.body.scrollTop=0,document.getElementById("scroller-box").children[0].scrollTop=0;var t=null,e=this;cancelAnimationFrame(t),t=requestAnimationFrame((function n(){e.scrollTop>0?(e.scrollTop-=50,document.documentElement.scrollTop=e.scrollTop,document.body.scrollTop=0,t=requestAnimationFrame(n)):(cancelAnimationFrame(t),e.toTopShow=!1)}))}},mounted:function(){this.$nextTick((function(){var t=document.body;console.log("targetScroll",t),console.log("scrollSize",this.scrollSize),t.addEventListener("scroll",this.handleScroll)}))},destroyed:function(){var t=document.getElementById("scroller-box");t.removeEventListener("scroll",this.handleScroll)}},Q=U,G=(n("c4ab"),Object(L["a"])(Q,N,R,!1,null,"631b847b",null)),H=G.exports,K={name:"App",components:{List:A,ScrollTop:H},data:function(){return{allData:[],filterType:[],keywords:"",isFree:!1,isDiscount:!1,offsetIndex:0,pageItems:20,finished:!1}},computed:{filtedData:function(){var t=this;return this.allData.filter((function(e){if(t.isDiscount&&!e.node.current_offer.promo_benefit)return!1;if(t.isFree&&"$0.00"!==e.node.current_offer.price.formatted)return!1;var n=e.node.display_name.toLowerCase();return-1!=n.indexOf(t.keywords.toLowerCase())}))},showData:function(){return this.filtedData.slice(0,this.offsetIndex)},itemCount:function(){return"列表数量：".concat(this.showData.length)}},created:function(){var t=this;J().then((function(e){console.log("get store data",e),t.allData=e.data.data.node.all_items.edges}))}},V=K,W=Object(L["a"])(V,x,k,!1,null,null,null),X=W.exports,Z={components:{Square:X}},tt=Z,et=Object(L["a"])(tt,_,D,!1,null,null,null),nt=et.exports;w["a"].config.productionTip=!1,w["a"].use(g["a"]),w["a"].use(y["a"]),w["a"].use(b["a"]),w["a"].use(v["a"]),w["a"].use(m["a"]),w["a"].use(h["a"]),w["a"].use(p["a"]),w["a"].use(f["a"]),w["a"].use(d["a"]),w["a"].use(u["a"]),w["a"].use(l["a"]),w["a"].use(c["a"]),w["a"].use(s["a"]),w["a"].use(i["a"]),w["a"].use(r["a"]),w["a"].use(a["a"]),w["a"].use(o["a"]),new w["a"]({render:function(t){return t(nt)}}).$mount("#app")},"65da":function(t,e,n){},c432:function(t,e,n){},c4ab:function(t,e,n){"use strict";n("43fd")},f62b:function(t,e,n){"use strict";n("65da")}});