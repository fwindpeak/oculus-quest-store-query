(function(e){function t(t){for(var a,r,s=t[0],u=t[1],c=t[2],d=0,l=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"201b6307"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"86a7a444"}[e]+".css",o=u.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===o))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){c=l[s],d=c.getAttribute("data-href");if(d===a||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=s(e);var l=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/oculus-quest-store-list/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0ab0":function(e,t,n){"use strict";n("c432")},"203f":function(e,t,n){"use strict";n("85d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("0209");var a=n("7d5e"),r=(n("0cc8"),n("3104")),o=(n("61ae"),n("d314")),i=(n("09d3"),n("2d6d")),s=(n("4142"),n("39d1")),u=(n("4b0a"),n("2bb1")),c=(n("7844"),n("5596")),d=(n("91d5"),n("f0ca")),l=(n("c3a6"),n("ad06")),f=(n("5852"),n("d961")),p=(n("66cf"),n("343b")),h=(n("5f1a"),n("a3e2")),m=(n("9cb7"),n("66fd")),v=(n("66b9"),n("b650")),y=(n("2994"),n("2bdd")),b=(n("4056"),n("44bf")),g=(n("81e6"),n("9ffb")),_=(n("4d48"),n("d1e1")),D=(n("a909"),n("3acc")),T=(n("3c32"),n("417e")),w=(n("0653"),n("34e9")),x=(n("c194"),n("7744")),k=(n("bda7"),n("5e46")),C=(n("da3c"),n("0b33")),L=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},j=[],I=n("a471"),S=n.n(I),E=n("5a0c"),P=n.n(E),A={created:function(){P.a.locale(S.a)}},$=A,F=n("2877"),N=Object(F["a"])($,O,j,!1,null,null,null),M=N.exports,U=(n("d3b7"),n("8c4f")),q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("div",[n("ScrollTop"),n("van-search",{attrs:{placeholder:"请输入搜索关键词"},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),n("van-sticky",[n("van-dropdown-menu",{attrs:{"active-color":"#1989fa"}},[n("van-dropdown-item",{attrs:{options:e.dataTypeList},on:{change:e.onDataTypeChanged},model:{value:e.dataType,callback:function(t){e.dataType=t},expression:"dataType"}}),n("van-dropdown-item",{attrs:{options:e.orderTypeList},model:{value:e.orderType,callback:function(t){e.orderType=t},expression:"orderType"}})],1)],1),e.loaded?n("list",{attrs:{data:e.allData,keywords:e.keywords,type:e.dataType,orderType:e.orderType}}):n("van-row",e._l(4,(function(e){return n("van-skeleton",{key:e,attrs:{title:"",avatar:"",row:3}})})),1)],1)])},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Oculus Quest 游戏查询")])])}],Y=(n("4de4"),n("caad"),n("c975"),n("fb6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"scroller-box"}},[n("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:e.onLoad}},[e._l(e.showData,(function(e){return n("div",{key:e.node.id},[n("Card",{attrs:{nodeData:e.node}})],1)})),e.showData.length<1?n("van-empty",{attrs:{description:""}}):e._e()],2)],1)}),z=[],H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("van-card",{attrs:{price:e.getPrice(e.nodeData.current_offer.price.offset_amount),desc:e.relaceData,title:e.nodeData.display_name,thumb:e.getCoverUrl(e.nodeData.id),"origin-price":e.originPrice,"lazy-load":!1},on:{click:e.onCardClicked},scopedSlots:e._u([{key:"tags",fn:function(){return[e.isFree?n("van-tag",{attrs:{plain:"",type:"success"}},[e._v("免费")]):e._e(),e.isDiscount?n("van-tag",{attrs:{plain:"",type:"danger"}},[e._v("打折")]):e._e()]},proxy:!0},{key:"num",fn:function(){return[e.isDiscount?n("van-tag",{attrs:{type:"danger"}},[[n("div",{staticStyle:{"text-align":"center"}},[n("div",[e._v(e._s(e.nodeData.current_offer.promo_benefit))]),n("div",{staticStyle:{"font-size":"0.5rem"}},[e._v(" "+e._s(e.timeRemain(e.nodeData.current_offer.end_time))+" ")])])]],2):e._e()]},proxy:!0}])})],1)},J=[],R=(n("b680"),{props:{nodeData:{type:Object}},inject:["rate"],computed:{cardClickLink:function(){return"/detail/".concat(this.nodeData.id)},isDiscount:function(){return!!this.nodeData.current_offer.promo_benefit},isFree:function(){return"0"==this.nodeData.current_offer.price.offset_amount},tag:function(){return this.isDiscount?"打折":this.isFree?"免费":null},relaceData:function(){return"发售日期：".concat(this.getDate(this.nodeData.release_date))},originPrice:function(){return this.isDiscount?this.getPrice(this.nodeData.current_offer.strikethrough_price.offset_amount):null}},methods:{getCoverUrl:function(e){return"./detail/".concat(e,"/cover/square.jpg")},getPrice:function(e){return"0"==e?null:(e*this.rate.USD/100).toFixed(2)},getDate:function(e){return P.a.unix(e).format("YYYY-MM-DD")},timeRemain:function(e){var t=n("4208");P.a.extend(t);var a=P.a.unix(e);return"剩余：".concat(a.fromNow(!0))},onCardClicked:function(){this.$router.push(this.cardClickLink)}}}),K=R,Q=(n("0ab0"),Object(F["a"])(K,H,J,!1,null,null,null)),G=Q.exports,V={props:{data:{type:Array,default:function(){return[]}},keywords:{type:String,default:""},type:{type:String,default:"all"},orderType:{type:String,default:"releaseData"}},components:{Card:G},data:function(){return{allData:[],filterType:[],offsetIndex:0,pageItems:20,finished:!1,showBackTopIcon:!0}},computed:{isFree:function(){return"free"===this.type},isDiscount:function(){return"discount"===this.type},filtedData:function(){var e=this;return this.data.filter((function(t){if(e.isDiscount&&!t.node.current_offer.promo_benefit)return!1;if(e.isFree&&"$0.00"!==t.node.current_offer.price.formatted)return!1;if("paid"===e.type&&"$0.00"===t.node.current_offer.price.formatted)return!1;var n=t.node.display_name.toLowerCase();return-1!=n.indexOf(e.keywords.toLowerCase())})).sort((function(t,n){if("name"===e.orderType){var a=t.node.display_name.toLowerCase(),r=n.node.display_name.toLowerCase();return a<r?-1:1}if("releaseData"===e.orderType){var o=t.node.release_date,i=n.node.release_data;return o-i}if("price"===e.orderType){var s=t.node.current_offer.price.offset_amount,u=n.node.current_offer.price.offset_amount;return s-u}if("endTime"===e.orderType){var c=t.node.current_offer.end_time,d=n.node.current_offer.end_time;return c-d}return 0}))},showData:function(){return this.filtedData.slice(0,this.offsetIndex)},itemCount:function(){return"列表数量：".concat(this.showData.length)}},watch:{filtedData:function(){this.offsetIndex=this.pageItems,this.updateOffesetIndex()}},methods:{updateOffesetIndex:function(){this.offsetIndex>=this.filtedData.length?(this.offsetIndex=this.filtedData.length,this.offsetIndex>this.pageItems&&(this.finished=!0)):this.finished=!1},onLoad:function(){this.offsetIndex<this.filtedData.length&&(this.offsetIndex+=this.pageItems),this.updateOffesetIndex()},backTop:function(){}}},W=V,X=(n("f62b"),Object(F["a"])(W,Y,z,!1,null,null,null)),Z=X.exports,ee=n("f8c8"),te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"el-fade-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"page-component-up",on:{click:e.scrollToTop}},[n("van-icon",{staticClass:"el-icon-caret-top",attrs:{name:"back-top"}})],1)])},ne=[],ae={data:function(){return{toTopShow:!1}},methods:{scrollToTop:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0,document.getElementById("scroller-box").children[0].scrollTop=0}}},re=ae,oe=(n("203f"),Object(F["a"])(re,te,ne,!1,null,"c27c9f24",null)),ie=oe.exports,se={name:"App",components:{List:Z,ScrollTop:ie},data:function(){return{dataLoaded:!1,rateLoaded:!1,allData:[],filterType:[],keywords:"",isFree:!1,isDiscount:!1,offsetIndex:0,pageItems:20,finished:!1,rate:{USD:6.53},dataType:"all",orderType:"releaseData",dataTypeList:[{text:"全部",value:"all"},{text:"免费",value:"free"},{text:"收费",value:"paid"},{text:"打折",value:"discount"}],orderTypeListAll:[{text:"发售日期排序",value:"releaseData"},{text:"名称排序",value:"name"},{text:"价格排序",value:"price"},{text:"截止时间排序",value:"endTime"}]}},provide:function(){return{rate:this.rate}},computed:{loaded:function(){return this.dataLoaded&this.rateLoaded},orderTypeList:function(){return"free"===this.dataType?this.orderTypeListAll.filter((function(e){return["releaseData","name"].includes(e.value)})):"discount"===this.dataType?this.orderTypeListAll.filter((function(e){return["releaseData","name","endTime","price"].includes(e.value)})):this.orderTypeListAll.filter((function(e){return["releaseData","name","price"].includes(e.value)}))},filtedData:function(){var e=this;return this.allData.filter((function(t){if(e.isDiscount&&!t.node.current_offer.promo_benefit)return!1;if(e.isFree&&"$0.00"!==t.node.current_offer.price.formatted)return!1;var n=t.node.display_name.toLowerCase();return-1!=n.indexOf(e.keywords.toLowerCase())}))},showData:function(){return this.filtedData.slice(0,this.offsetIndex)},itemCount:function(){return"列表数量：".concat(this.showData.length)}},created:function(){var e=this;Object(ee["c"])().then((function(t){console.log("get store data",t),e.allData=t.data.data.node.all_items.edges,e.dataLoaded=!0})),Object(ee["b"])().then((function(t){e.rate.USD=t?t.data.data.rate:6.53,e.rateLoaded=!0}))},methods:{onDataTypeChanged:function(e){this.orderType="discount"===e?"endTime":"releaseData"}}},ue=se,ce=Object(F["a"])(ue,q,B,!1,null,null,null),de=ce.exports,le=n("323e"),fe=n.n(le);n("a5d8");L["a"].use(U["a"]);var pe=[{path:"/",name:"Home",component:de},{path:"/detail/:id",name:"Detail",component:function(){return n.e("about").then(n.bind(null,"c84b"))}}],he=new U["a"]({routes:pe});he.beforeEach((function(e,t,n){fe.a.start(),n()})),he.afterEach((function(){fe.a.done()}));var me=he;L["a"].config.productionTip=!1,L["a"].use(C["a"]),L["a"].use(k["a"]),L["a"].use(x["a"]),L["a"].use(w["a"]),L["a"].use(T["a"]),L["a"].use(D["a"]),L["a"].use(_["a"]),L["a"].use(g["a"]),L["a"].use(b["a"]),L["a"].use(y["a"]),L["a"].use(v["a"]),L["a"].use(m["a"]),L["a"].use(h["a"]),L["a"].use(p["a"]),L["a"].use(f["a"]),L["a"].use(l["a"]),L["a"].use(d["a"]),L["a"].use(c["a"]),L["a"].use(u["a"]),L["a"].use(s["a"]),L["a"].use(i["a"]),L["a"].use(o["a"]),L["a"].use(r["a"]),L["a"].use(a["a"]),new L["a"]({router:me,render:function(e){return e(M)}}).$mount("#app")},"65da":function(e,t,n){},"85d7":function(e,t,n){},c432:function(e,t,n){},f62b:function(e,t,n){"use strict";n("65da")},f8c8:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var a=n("bc3a"),r=n.n(a);function o(){return r.a.get("./oculus-quest-store.json?v=".concat(Date.now()))}function i(){return r.a.get("./usd-rate.json?v=".concat(Date.now()))}function s(e){return r.a.get("./detail/".concat(e,"/appinfo.json"))}}});