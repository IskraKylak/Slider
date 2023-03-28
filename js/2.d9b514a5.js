"use strict";(self["webpackChunktzcarousel"]=self["webpackChunktzcarousel"]||[]).push([[2],{2:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var l=n(252);const a={class:"mainPage"};function i(e,t,n,i,o,r){const s=(0,l.up)("Slider");return(0,l.wg)(),(0,l.iD)("div",a,[(0,l.Wm)(s)])}var o=n(577);const r={class:"popularBlock"},s={class:"popularBlock__title"},u={class:"popularBlock__wrapCarousel"},d={class:"listLink"},c=["href"];function v(e,t,n,a,i,v){const p=(0,l.up)("ItemSlide"),m=(0,l.up)("slide"),f=(0,l.up)("Navigation"),h=(0,l.up)("carousel");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("h2",s,(0,o.zw)(i.title),1),(0,l._)("div",u,[(0,l.Wm)(h,{class:"popularBlock__carousel",wrapAround:!0,itemsToScroll:1,itemsToShow:i.width<=768?1:i.width<=1199?2:4,snapAlign:"start"},{addons:(0,l.w5)((()=>[(0,l.Wm)(f)])),default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.SLIDER,((e,t)=>((0,l.wg)(),(0,l.j4)(m,{key:t},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{content:e},null,8,["content"])])),_:2},1024)))),128))])),_:1},8,["itemsToShow"])]),(0,l._)("div",d,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(v.ListSelected,((e,t)=>((0,l.wg)(),(0,l.iD)("a",{href:e.download_url,key:t,class:"listLink__item",target:"_blanc"},(0,o.zw)(e.download_url),9,c)))),128))])])}var p=n(907);const m={class:"slide"},f=["src"];function h(e,t,n,a,i,r){return(0,l.wg)(),(0,l.iD)("div",m,[(0,l._)("div",{class:(0,o.C_)(["slide_img",n.content.selected?"selected":""]),onClick:t[0]||(t[0]=e=>n.content.selected=!n.content.selected)},[(0,l._)("img",{src:n.content.download_url,alt:"img"},null,8,f)],2)])}var g={props:["content"],data(){return{}},methods:{},mounted(){}},w=n(744);const b=(0,w.Z)(g,[["render",h]]);var _=b,S=n(262);
/**
 * Vue 3 Carousel 0.2.12
 * (c) 2023
 * @license MIT
 */
const x={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},y={itemsToShow:{default:x.itemsToShow,type:Number},itemsToScroll:{default:x.itemsToScroll,type:Number},wrapAround:{default:x.wrapAround,type:Boolean},throttle:{default:x.throttle,type:Number},snapAlign:{default:x.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:x.transition,type:Number},breakpoints:{default:x.breakpoints,type:Object},autoplay:{default:x.autoplay,type:Number},pauseAutoplayOnHover:{default:x.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:x.mouseDrag,type:Boolean},touchDrag:{default:x.touchDrag,type:Boolean},dir:{default:x.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}};function k({config:e,slidesCount:t}){const{snapAlign:n,wrapAround:l,itemsToShow:a=1}=e;if(l)return Math.max(t-1,0);let i;switch(n){case"start":i=t-a;break;case"end":i=t-1;break;case"center":case"center-odd":i=t-Math.ceil((a-.5)/2);break;case"center-even":i=t-Math.ceil(a/2);break;default:i=0;break}return Math.max(i,0)}function T({config:e,slidesCount:t}){const{wrapAround:n,snapAlign:l,itemsToShow:a=1}=e;let i=0;if(n||a>t)return i;switch(l){case"start":i=0;break;case"end":i=a-1;break;case"center":case"center-odd":i=Math.floor((a-1)/2);break;case"center-even":i=Math.floor((a-2)/2);break;default:i=0;break}return i}function C({val:e,max:t,min:n}){return t<n?e:Math.min(Math.max(e,n),t)}function H({config:e,currentSlide:t,slidesCount:n}){const{snapAlign:l,wrapAround:a,itemsToShow:i=1}=e;let o=t;switch(l){case"center":case"center-odd":o-=(i-1)/2;break;case"center-even":o-=(i-2)/2;break;case"end":o-=i-1;break}return a?o:C({val:o,max:n-i,min:0})}function A(e){var t,n,l,a;return e?"v-if"===(null===(t=e[0])||void 0===t?void 0:t.children)||"CarouselSlide"===(null===(l=null===(n=e[0])||void 0===n?void 0:n.type)||void 0===l?void 0:l.name)?e.filter((e=>{var t;return"CarouselSlide"===(null===(t=e.type)||void 0===t?void 0:t.name)})):(null===(a=e[0])||void 0===a?void 0:a.children)||[]:[]}function L({val:e,max:t,min:n=0}){return e>t?L({val:e-(t+1),max:t,min:n}):e<n?L({val:e+(t+1),max:t,min:n}):e}function j(e,t){let n;return t?function(...l){const a=this;n||(e.apply(a,l),n=!0,setTimeout((()=>n=!1),t))}:e}function O(e,t){let n;return function(...l){n&&clearTimeout(n),n=setTimeout((()=>{e(...l),n=null}),t)}}var D=(0,l.aZ)({name:"ARIA",setup(){const e=(0,l.f3)("currentSlide",(0,S.iH)(0)),t=(0,l.f3)("slidesCount",(0,S.iH)(0));return()=>(0,l.h)("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},`Item ${e.value+1} of ${t.value}`)}}),I=(0,l.aZ)({name:"Carousel",props:y,setup(e,{slots:t,emit:n,expose:a}){var i;const o=(0,S.iH)(null),r=(0,S.iH)([]),s=(0,S.iH)(0),u=(0,S.iH)(0);let d=(0,S.iH)({}),c=Object.assign({},x);const v=(0,S.qj)(Object.assign({},c)),p=(0,S.iH)(null!==(i=e.modelValue)&&void 0!==i?i:0),m=(0,S.iH)(0),f=(0,S.iH)(0),h=(0,S.iH)(0),g=(0,S.iH)(0);let w,b;function _(){const t=Object.assign(Object.assign({},e),e.settings);d=(0,S.iH)(Object.assign({},t.breakpoints)),c=Object.assign(Object.assign({},t),{settings:void 0,breakpoints:void 0}),M(c)}function I(){const e=Object.keys(d.value).map((e=>Number(e))).sort(((e,t)=>+t-+e));let t=Object.assign({},c);e.some((e=>{const n=window.matchMedia(`(min-width: ${e}px)`).matches;return!!n&&(t=Object.assign(Object.assign({},t),d.value[e]),!0)})),M(t)}function M(e){Object.entries(e).forEach((([e,t])=>v[e]=t))}(0,l.JJ)("config",v),(0,l.JJ)("slidesCount",u),(0,l.JJ)("currentSlide",p),(0,l.JJ)("maxSlide",h),(0,l.JJ)("minSlide",g),(0,l.JJ)("slideWidth",s);const E=O((()=>{Object.keys(d.value).length&&(I(),N()),J()}),16);function J(){if(!o.value)return;const e=o.value.getBoundingClientRect();s.value=e.width/v.itemsToShow}function N(){u.value<=0||(f.value=Math.ceil((u.value-1)/2),h.value=k({config:v,slidesCount:u.value}),g.value=T({config:v,slidesCount:u.value}),v.wrapAround||(p.value=C({val:p.value,max:h.value,min:g.value})))}(0,l.bv)((()=>{Object.keys(d.value).length&&I(),(0,l.Y3)((()=>{N(),J(),Z(),n("init")})),F(),window.addEventListener("resize",E,{passive:!0})})),(0,l.Ah)((()=>{b&&clearTimeout(b),w&&clearInterval(w),window.removeEventListener("resize",E,{passive:!0})}));let R=!1;const B={x:0,y:0},W={x:0,y:0},z=(0,S.qj)({x:0,y:0}),P=(0,S.iH)(!1),Y=()=>{P.value=!0},$=()=>{P.value=!1};function V(e){["INPUT","TEXTAREA"].includes(e.target.tagName)||(R="touchstart"===e.type,!R&&0!==e.button||K.value||(R||e.preventDefault(),B.x=R?e.touches[0].clientX:e.clientX,B.y=R?e.touches[0].clientY:e.clientY,document.addEventListener(R?"touchmove":"mousemove",X,!0),document.addEventListener(R?"touchend":"mouseup",q,!0)))}let X=()=>{};function Z(){var e;X=j((e=>{W.x=R?e.touches[0].clientX:e.clientX,W.y=R?e.touches[0].clientY:e.clientY;const t=W.x-B.x,n=W.y-B.y;z.y=n,z.x=t}),null!==(e=v.throttle)&&void 0!==e?e:16)}function q(){const e="rtl"===v.dir?-1:1,t=.4*Math.sign(z.x),n=Math.round(z.x/s.value+t)*e;if(n&&!R){const e=t=>{t.stopPropagation(),window.removeEventListener("click",e,!0)};window.addEventListener("click",e,!0)}U(p.value-n),z.x=0,z.y=0,document.removeEventListener(R?"touchmove":"mousemove",X,!0),document.removeEventListener(R?"touchend":"mouseup",q,!0)}function F(){!v.autoplay||v.autoplay<=0||(w=setInterval((()=>{v.pauseAutoplayOnHover&&P.value||Q()}),v.autoplay))}function G(){w&&(clearInterval(w),w=null),F()}const K=(0,S.iH)(!1);function U(e){const t=v.wrapAround?e:C({val:e,max:h.value,min:g.value});p.value===t||K.value||(n("slide-start",{slidingToIndex:e,currentSlideIndex:p.value,prevSlideIndex:m.value,slidesCount:u.value}),K.value=!0,m.value=p.value,p.value=t,b=setTimeout((()=>{if(v.wrapAround){const l=L({val:t,max:h.value,min:0});l!==p.value&&(p.value=l,n("loop",{currentSlideIndex:p.value,slidingToIndex:e}))}n("update:modelValue",p.value),n("slide-end",{currentSlideIndex:p.value,prevSlideIndex:m.value,slidesCount:u.value}),K.value=!1,G()}),v.transition))}function Q(){U(p.value+v.itemsToScroll)}function ee(){U(p.value-v.itemsToScroll)}const te={slideTo:U,next:Q,prev:ee};(0,l.JJ)("nav",te),(0,l.JJ)("isSliding",K);const ne=(0,l.Fl)((()=>H({config:v,currentSlide:p.value,slidesCount:u.value})));(0,l.JJ)("slidesToScroll",ne);const le=(0,l.Fl)((()=>{const e="rtl"===v.dir?-1:1,t=ne.value*s.value*e;return{transform:`translateX(${z.x-t}px)`,transition:`${K.value?v.transition:0}ms`,margin:v.wrapAround?`0 -${u.value*s.value}px`:"",width:"100%"}}));function ae(){_(),I(),N(),J(),G()}Object.keys(y).forEach((t=>{["modelValue"].includes(t)||(0,l.YP)((()=>e[t]),ae)})),(0,l.YP)((()=>e["modelValue"]),(e=>{e!==p.value&&U(Number(e))})),(0,l.YP)(u,N),_();const ie={config:v,slidesCount:u,slideWidth:s,next:Q,prev:ee,slideTo:U,currentSlide:p,maxSlide:h,minSlide:g,middleSlide:f};a({updateBreakpointsConfigs:I,updateSlidesData:N,updateSlideWidth:J,initDefaultConfigs:_,restartCarousel:ae,slideTo:U,next:Q,prev:ee,nav:te,data:ie});const oe=t.default||t.slides,re=t.addons,se=(0,S.qj)(ie);return()=>{const e=A(null===oe||void 0===oe?void 0:oe(se)),t=(null===re||void 0===re?void 0:re(se))||[];e.forEach(((e,t)=>e.props.index=t));let n=e;if(v.wrapAround){const t=e.map(((t,n)=>(0,l.Ho)(t,{index:-e.length+n,isClone:!0,key:`clone-before-${n}`}))),a=e.map(((t,n)=>(0,l.Ho)(t,{index:e.length+n,isClone:!0,key:`clone-after-${n}`})));n=[...t,...e,...a]}r.value=e,u.value=Math.max(e.length,1);const a=(0,l.h)("ol",{class:"carousel__track",style:le.value,onMousedownCapture:v.mouseDrag?V:null,onTouchstartPassiveCapture:v.touchDrag?V:null},n),i=(0,l.h)("div",{class:"carousel__viewport"},a);return(0,l.h)("section",{ref:o,class:{carousel:!0,"carousel--rtl":"rtl"===v.dir},dir:v.dir,"aria-label":"Gallery",tabindex:"0",onMouseenter:Y,onMouseleave:$},[i,t,(0,l.h)(D)])}}});const M={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},E=e=>{const t=e.name;if(!t||"string"!==typeof t)return;const n=M[t],a=(0,l.h)("path",{d:n}),i=e.title||t,o=(0,l.h)("title",i);return(0,l.h)("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:i},[o,a])};E.props={name:String,title:String};const J=(e,{slots:t,attrs:n})=>{const{next:a,prev:i}=t||{},o=(0,l.f3)("config",(0,S.qj)(Object.assign({},x))),r=(0,l.f3)("maxSlide",(0,S.iH)(1)),s=(0,l.f3)("minSlide",(0,S.iH)(1)),u=(0,l.f3)("currentSlide",(0,S.iH)(1)),d=(0,l.f3)("nav",{}),{dir:c,wrapAround:v}=o,p="rtl"===c,m=(0,l.h)("button",{type:"button",class:["carousel__prev",!v&&u.value<=s.value&&"carousel__prev--disabled",null===n||void 0===n?void 0:n.class],"aria-label":"Navigate to previous slide",onClick:d.prev},(null===i||void 0===i?void 0:i())||(0,l.h)(E,{name:p?"arrowRight":"arrowLeft"})),f=(0,l.h)("button",{type:"button",class:["carousel__next",!v&&u.value>=r.value&&"carousel__next--disabled",null===n||void 0===n?void 0:n.class],"aria-label":"Navigate to next slide",onClick:d.next},(null===a||void 0===a?void 0:a())||(0,l.h)(E,{name:p?"arrowLeft":"arrowRight"}));return[m,f]},N=()=>{const e=(0,l.f3)("maxSlide",(0,S.iH)(1)),t=(0,l.f3)("minSlide",(0,S.iH)(1)),n=(0,l.f3)("currentSlide",(0,S.iH)(1)),a=(0,l.f3)("nav",{}),i=t=>L({val:n.value,max:e.value,min:0})===t,o=[];for(let r=t.value;r<e.value+1;r++){const e=(0,l.h)("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":i(r)},"aria-label":`Navigate to slide ${r+1}`,onClick:()=>a.slideTo(r)}),t=(0,l.h)("li",{class:"carousel__pagination-item",key:r},e);o.push(t)}return(0,l.h)("ol",{class:"carousel__pagination"},o)};var R=(0,l.aZ)({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:t}){const n=(0,l.f3)("config",(0,S.qj)(Object.assign({},x))),a=(0,l.f3)("currentSlide",(0,S.iH)(0)),i=(0,l.f3)("slidesToScroll",(0,S.iH)(0)),o=(0,l.f3)("slideWidth",(0,S.iH)(0)),r=(0,l.f3)("isSliding",(0,S.iH)(!1)),s=(0,l.Fl)((()=>({width:o.value?`${o.value}px`:"100%"}))),u=()=>e.index===a.value,d=()=>e.index===a.value-1,c=()=>e.index===a.value+1,v=()=>{const t=Math.floor(i.value),l=Math.ceil(i.value+n.itemsToShow-1);return e.index>=t&&e.index<=l};return()=>{var n;return(0,l.h)("li",{style:s.value,class:{carousel__slide:!0,"carousel_slide--clone":e.isClone,"carousel__slide--visible":v(),"carousel__slide--active":u(),"carousel__slide--prev":d(),"carousel__slide--next":c(),"carousel__slide--sliding":r.value},"aria-hidden":!v()},null===(n=t.default)||void 0===n?void 0:n.call(t))}}}),B={components:{Carousel:I,Slide:R,Navigation:J,ItemSlide:_,Pagination:N},data(){return{title:"Slider Images",width:0}},computed:{...(0,p.Se)(["SLIDER"]),ListSelected(){return this.SLIDER?this.SLIDER.filter((e=>{if(e.selected)return!0})):[]}},methods:{updateWidth(){this.width=window.innerWidth},...(0,p.nv)(["GET_SLIDER_FROM_API"])},mounted(){this.GET_SLIDER_FROM_API()},created(){this.width=window.innerWidth,window.addEventListener("resize",this.updateWidth)}};const W=(0,w.Z)(B,[["render",v]]);var z=W,P={components:{Slider:z},data(){return{}},methods:{},computed:{},mounted(){}};const Y=(0,w.Z)(P,[["render",i]]);var $=Y}}]);
//# sourceMappingURL=2.d9b514a5.js.map