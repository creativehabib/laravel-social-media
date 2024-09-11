import{o,f as r,b as e,h as p,c as _,a as s,w as c,u as a,t as g,E as y}from"./app-8a1ff713.js";import{U as b,i as m,G as k,r as C,S as B}from"./transition-3ca82db8.js";function V(l,t){return o(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z","clip-rule":"evenodd"})])}function z(l,t){return o(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z","clip-rule":"evenodd"})])}function L(l,t){return o(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z","clip-rule":"evenodd"})])}function F(l,t){return o(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})])}const M=l=>{let t=l.mime||l.type;return t=t.split("/"),t[0].toLowerCase()==="image"},A=l=>{let t=l.mime||l.type;return t=t.split("/"),t[0].toLowerCase()==="video"},j=e("div",{class:"fixed inset-0 bg-black/25"},null,-1),$={class:"fixed inset-0 overflow-y-auto"},N={class:"h-screen w-screen"},S={class:"relative group h-full"},E={class:"flex items-center justify-center w-full h-full p-3"},G=["src"],I={key:1,class:"flex items-center"},U=["src"],q={key:2,class:"p-32 flex flex-col justify-center items-center text-gray-100"},H={__name:"AttachmentPreviewModal",props:{attachments:{type:Array,required:!0},index:Number,modelValue:Boolean},emits:["update:modelValue","update:index","hide"],setup(l,{emit:t}){const u=l,v=p({get:()=>u.modelValue,set:d=>f("update:modelValue",d)}),n=p({get:()=>u.index,set:d=>f("update:index",d)}),i=p(()=>u.attachments[n.value]),f=t;function h(){v.value=!1,f("hide")}function w(){n.value!==0&&n.value--}function x(){n.value!==u.attachments.length-1&&n.value++}return(d,D)=>(o(),_(y,{to:"body"},[s(a(B),{appear:"",show:v.value,as:"template"},{default:c(()=>[s(a(b),{as:"div",onClose:h,class:"relative z-50"},{default:c(()=>[s(a(m),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:c(()=>[j]),_:1}),e("div",$,[e("div",N,[s(a(m),{as:"template",class:"w-full h-full",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:c(()=>[s(a(k),{class:"flex flex-col w-full transform overflow-hidden bg-slate-800 text-left align-middle shadow-xl transition-all"},{default:c(()=>[e("button",{onClick:h,class:"absolute right-3 top-3 z-30 w-10 h-10 rounded-full hover:bg-black/10 transition flex items-center justify-center text-gray-100 z-40"},[s(a(C),{class:"w-6 h-6"})]),e("div",S,[e("div",{onClick:w,class:"absolute opacity-0 group-hover:opacity-100 text-gray-100 cursor-pointer flex items-center w-12 h-full left-0 bg-black/5 z-30"},[s(a(V),{class:"w-12"})]),e("div",{onClick:x,class:"absolute opacity-0 group-hover:opacity-100 text-gray-100 cursor-pointer flex items-center w-12 h-full right-0 bg-black/5 z-30"},[s(a(z),{class:"w-12"})]),e("div",E,[a(M)(i.value)?(o(),r("img",{key:0,src:i.value.url,class:"max-w-full max-h-full"},null,8,G)):a(A)(i.value)?(o(),r("div",I,[e("video",{src:i.value.url,controls:"",autoplay:""},null,8,U)])):(o(),r("div",q,[s(a(L),{class:"w-10 h-10 mb-3"}),e("small",null,g(i.value.name),1)]))])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]))}};export{H as _,L as a,z as b,A as c,M as i,F as r};
