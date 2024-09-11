import{j as g,T as A,h as F,o as t,c as x,w as c,b as e,a as s,u as r,d as w,f as l,F as m,l as $,n as k,Z as L}from"./app-8a1ff713.js";import{_ as V}from"./TextInput-0d41f712.js";import{_ as N}from"./GroupItem-a66bc4a5.js";import{r as T,_ as E,i as H}from"./BaseModal-b216c2d5.js";import{_ as I}from"./GroupForm-2874d794.js";import{r as K}from"./transition-3ca82db8.js";import{X as C,Y as M,V as j}from"./PostModal-9aa825e0.js";import{a as S,_ as U}from"./PostList-bca80cac.js";import{_ as z}from"./CreatePost-3bc9e0e4.js";import{_ as O}from"./AuthenticatedLayout-58d86ad8.js";import"./Checkbox-6b2247f8.js";import"./AttachmentPreviewModal-0e7c2918.js";import"./ApplicationLogo-6577eed8.js";import"./_plugin-vue_export-helper-c27b6911.js";const W={class:"p-4 dark:text-gray-100"},X={class:"flex justify-end gap-2 py-3 px-4"},Y={__name:"GroupModal",props:{modelValue:Boolean},emits:["update:modelValue","hide","create"],setup(o,{emit:a}){const n=o,u=g({}),i=A({name:"",auto_approval:!0,about:""}),f=F({get:()=>n.modelValue,set:h=>d("update:modelValue",h)}),d=a;function _(){f.value=!1,d("hide"),G()}function G(){i.reset(),u.value={}}function B(){H.post(route("group.create"),i).then(({data:h})=>{_(),d("create",h)})}return(h,p)=>(t(),x(E,{title:"Create new Group",modelValue:f.value,"onUpdate:modelValue":p[1]||(p[1]=v=>f.value=v),onHide:p[2]||(p[2]=v=>_())},{default:c(()=>[e("div",W,[s(I,{form:r(i)},null,8,["form"])]),e("div",X,[e("button",{onClick:p[0]||(p[0]=v=>f.value=!1),class:"text-gray-800 flex gap-1 items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200 py-2 px-4"},[s(r(K),{class:"w-5 h-5"}),w(" Cancel ")]),e("button",{type:"button",class:"flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:B},[s(r(T),{class:"w-4 h-4 mr-2"}),w(" Submit ")])])]),_:1},8,["modelValue"]))}},Z={class:"flex gap-2 mt-4"},q={class:"mt-3 h-[200px] lg:flex-1 overflow-auto"},D={key:1},b={__name:"GroupListItems",props:{groups:Array},setup(o){const a=g(""),n=g(!1),u=o;function i(f){u.groups.unshift(f)}return(f,d)=>(t(),l(m,null,[e("div",Z,[s(V,{"model-value":a.value,placeholder:"Type to search",class:"w-full rounded-md"},null,8,["model-value"]),e("button",{onClick:d[0]||(d[0]=_=>n.value=!0),class:"text-sm bg-indigo-500 hover:bg-indigo-600 text-white rounded py-1 px-2 w-[120px]"}," new group ")]),e("div",q,[(t(),l("div",D,[(t(!0),l(m,null,$(o.groups,_=>(t(),x(N,{group:_},null,8,["group"]))),256))]))]),s(Y,{modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=_=>n.value=_),onCreate:i},null,8,["modelValue"])],64))}},J={class:"px-3 bg-white dark:bg-slate-950 rounded border dark:border-slate-900 dark:text-gray-100 h-full py-3 overflow-hidden"},P={class:"block lg:hidden"},Q={class:"flex justify-between items-center"},R=e("h2",{class:"text-xl font-bold"},"My Groups",-1),ee=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"},null,-1),se=[ee],oe={class:"h-full overflow-hidden flex-col hidden lg:flex"},te=e("div",{class:"flex justify-between"},[e("h2",{class:"text-xl font-bold"},"My Groups")],-1),le={__name:"GroupList",props:{groups:Array},setup(o){return(a,n)=>(t(),l("div",J,[e("div",P,[s(r(j),null,{default:c(({open:u})=>[s(r(C),{class:"w-full"},{default:c(()=>[e("div",Q,[R,(t(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:k(["w-6 h-6 transition-all",u?"rotate-90 transform":""])},se,2))])]),_:2},1024),s(r(M),null,{default:c(()=>[s(b,{groups:o.groups},null,8,["groups"])]),_:1})]),_:1})]),e("div",oe,[te,s(b,{groups:o.groups},null,8,["groups"])])]))}},re={class:"mt-3 h-[200px] lg:flex-1 overflow-auto"},ne={key:1},y={__name:"FollowingListItems",props:{users:Array},setup(o){const a=g("");return(n,u)=>(t(),l(m,null,[s(V,{"model-value":a.value,placeholder:"Type to search",class:"w-full rounded-md mt-3"},null,8,["model-value"]),e("div",re,[(t(),l("div",ne,[(t(!0),l(m,null,$(o.users,i=>(t(),x(S,{user:i,key:i.id,class:"rounded-lg"},null,8,["user"]))),128))]))])],64))}},ae={class:"px-3 bg-white dark:bg-slate-950 dark:border-slate-900 dark:text-gray-100 rounded border h-full py-3 overflow-hidden"},ue={class:"block lg:hidden"},ie={class:"flex justify-between items-center"},de=e("h2",{class:"text-xl font-bold"},"My Followings",-1),ce=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"},null,-1),fe=[ce],_e={class:"h-full overflow-hidden flex-col hidden lg:flex"},pe=e("h2",{class:"text-xl font-bold"},"My Followings",-1),me={__name:"FollowingList",props:{users:Array},setup(o){return(a,n)=>(t(),l("div",ae,[e("div",ue,[s(r(j),null,{default:c(({open:u})=>[s(r(C),{class:"w-full"},{default:c(()=>[e("div",ie,[de,(t(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:k(["w-6 h-6 transition-all",u?"rotate-90 transform":""])},fe,2))])]),_:2},1024),s(r(M),null,{default:c(()=>[s(y,{users:o.users},null,8,["users"])]),_:1})]),_:1})]),e("div",_e,[pe,s(y,{users:o.users},null,8,["users"])])]))}},he={class:"grid lg:grid-cols-12 gap-3 p-4 h-full"},ge={class:"lg:col-span-3 lg:order-1 h-full overflow-hidden"},ve={class:"lg:col-span-3 lg:order-3 h-full overflow-hidden"},xe={class:"lg:col-span-6 lg:order-2 h-full overflow-hidden flex flex-col"},Ne={__name:"Home",props:{posts:Object,groups:Array,followings:Array},setup(o){return(a,n)=>(t(),l(m,null,[s(r(L),{title:"Social Media Website"}),s(O,null,{default:c(()=>[e("div",he,[e("div",ge,[s(le,{groups:o.groups},null,8,["groups"])]),e("div",ve,[s(me,{users:o.followings},null,8,["users"])]),e("div",xe,[s(z),s(U,{posts:o.posts.data,class:"flex-1"},null,8,["posts"])])])]),_:1})],64))}};export{Ne as default};
