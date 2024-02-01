"use strict";(self.webpackChunkconfetti_docs=self.webpackChunkconfetti_docs||[]).push([[915],{3598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>x,frontMatter:()=>u,metadata:()=>f,toc:()=>h});var s=n(5893),l=n(1151),r=n(4866),a=n(5162),i=n(9286),c=n(4999),d=n.n(c),o=n(5625);const u={},p="Find all",f={id:"contacts/findAll",title:"Find all",description:"{${JSON.stringify(confetti.models.contact.sample.multiple.formatted, null, 2)}}",source:"@site/docs/contacts/findAll.mdx",sourceDirName:"contacts",slug:"/contacts/findAll",permalink:"/docs/contacts/findAll",draft:!1,unlisted:!1,editUrl:"https://github.com/confetti/confetti-docs/docs/contacts/findAll.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Find one",permalink:"/docs/contacts/find"}},m={},h=[];function j(e){const t={code:"code",h1:"h1",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"find-all",children:"Find all"}),"\n",(0,s.jsx)(o.Z,{model:d().models.contact}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(a.Z,{value:"javascript",label:"JavaScript",default:!0,children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const Confetti = require('confetti')\n\nconst confetti = new Confetti({ apiKey: 'your-key' })\nconst contacts = await confetti.contacts.findAll({\n  page: {\n    size: 50,\n    number: 1\n  }\n})\n"})}),(0,s.jsx)(i.Z,{language:"javascript",title:"Result",children:`${JSON.stringify(d().models.contact.sample.multiple.formatted,null,2)}`})]}),(0,s.jsxs)(a.Z,{value:"curl",label:"curl",children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'curl "https://api.confetti.events/contacts?page[number]=1&page[size]=50"\n  -H "Authorization: apikey your-key"\n'})}),(0,s.jsx)(i.Z,{language:"javascript",title:"Result",children:`${JSON.stringify(d().models.contact.sample.multiple.raw,null,2)}`})]})]})]})}function x(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},5625:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(5893);function l(e){let{isCreateOrUpdate:t}=e;return(0,s.jsxs)("thead",{children:[(0,s.jsx)("th",{children:"Parameter"}),(0,s.jsx)("th",{children:t?"Type":"Default"}),(0,s.jsx)("th",{children:"Values / Description"})]})}function r(e){let{name:t,defaultValue:n,description:l}=e;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:t}),(0,s.jsx)("td",{children:n}),(0,s.jsx)("td",{children:l})]})}const a=e=>["string","boolean","number"].includes(e.type)?e.type:e.values.map((e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:e.value})," "]}))),i=e=>Array.isArray(e.default)?e.default.map((e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:e})," "]}))):e.default;function c(e){let{attributes:t}=e;return t&&0!==t.length?t.map((e=>{const t=e.values?e.values.map((e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:e})," "]}))):e.helpText,n=e.multiple?`array of ${e.type}s`:e.type,l=`${e.key}${e.required?"*":""}`;return(0,s.jsx)(r,{name:l,defaultValue:n,description:t})})):null}function d(e){let{filters:t}=e;return t&&0!==Object.keys(t).length?(0,s.jsx)(s.Fragment,{children:Object.keys(t).map((e=>{const n=t[e],l=n.required?`filter[${e}]*`:`filter[${e}]`;return(0,s.jsx)(r,{name:l,defaultValue:i(n),description:a(n)})}))}):null}function o(e){let{model:t,includeOnly:n,isCreateOrUpdate:a}=e;return(0,s.jsxs)("table",{children:[(0,s.jsx)(l,{isCreateOrUpdate:a}),a?(0,s.jsx)(c,{attributes:t.operations.create.attributes}):(0,s.jsxs)(s.Fragment,{children:[!n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{filters:t.filters}),(0,s.jsx)(r,{name:"page[size]",defaultValue:"50",description:"Maximum number of results"}),(0,s.jsx)(r,{name:"page[number]",defaultValue:"1",description:"Page number"})]}),t.includes&&(0,s.jsx)(r,{name:"include",defaultValue:"",description:t.includes.map((e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:e})," "]})))})]})]})}}}]);