"use strict";(self.webpackChunkconfetti_docs=self.webpackChunkconfetti_docs||[]).push([[28],{8083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>x,frontMatter:()=>h,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"webhooks/findAll","title":"Find all","description":"{${JSON.stringify(confetti.models.webhook.sample.multiple.formatted, null, 2)}}","source":"@site/docs/webhooks/findAll.mdx","sourceDirName":"webhooks","slug":"/webhooks/findAll","permalink":"/docs/webhooks/findAll","draft":false,"unlisted":false,"editUrl":"https://github.com/confetti/confetti-docs/docs/webhooks/findAll.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Find one","permalink":"/docs/webhooks/find"},"next":{"title":"Find one","permalink":"/docs/workspace/find"}}');var l=n(4848),r=n(8453),i=n(5537),a=n(9329),d=n(8069),o=n(1980),c=n.n(o),u=n(4021);const h={},p="Find all",f={},m=[];function j(e){const t={code:"code",h1:"h1",header:"header",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"find-all",children:"Find all"})}),"\n",(0,l.jsx)(u.A,{model:c().models.webhook}),"\n",(0,l.jsxs)(i.A,{children:[(0,l.jsxs)(a.A,{value:"javascript",label:"JavaScript",default:!0,children:[(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"const Confetti = require('confetti')\n\nconst confetti = new Confetti({ apiKey: 'your-key' })\nconst webhooks = await confetti.webhooks.findAll()\n"})}),(0,l.jsx)(d.A,{language:"javascript",title:"Result",children:`${JSON.stringify(c().models.webhook.sample.multiple.formatted,null,2)}`})]}),(0,l.jsxs)(a.A,{value:"curl",label:"curl",children:[(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:'curl "https://api.confetti.events/webhooks"\n  -H "Authorization: apikey your-key"\n'})}),(0,l.jsx)(d.A,{language:"javascript",title:"Result",children:`${JSON.stringify(c().models.webhook.sample.multiple.raw,null,2)}`})]})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(j,{...e})}):j(e)}},4021:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(4848);function l(e){let{isCreateOrUpdate:t}=e;return(0,s.jsxs)("thead",{children:[(0,s.jsx)("th",{children:"Parameter"}),(0,s.jsx)("th",{children:t?"Type":"Default"}),(0,s.jsx)("th",{children:"Values / Description"})]})}function r(e){let{name:t,defaultValue:n,description:l}=e;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:t}),(0,s.jsx)("td",{children:n}),(0,s.jsx)("td",{children:l})]})}const i=e=>["string","boolean","number"].includes(e.type)?e.type:e.values.map((e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:e.value})," "]}))),a=e=>Array.isArray(e.default)?e.default.map((e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:e})," "]}))):e.default;function d(e){let{attributes:t}=e;return t&&0!==t.length?t.map((e=>{const t=e.values?e.values.map((e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:e})," "]}))):e.helpText,n=e.multiple?`array of ${e.type}s`:e.type,l=`${e.key}${e.required?"*":""}`;return(0,s.jsx)(r,{name:l,defaultValue:n,description:t})})):null}function o(e){let{filters:t}=e;return t&&0!==Object.keys(t).length?(0,s.jsx)(s.Fragment,{children:Object.keys(t).map((e=>{const n=t[e],l=n.required?`filter[${e}]*`:`filter[${e}]`;return(0,s.jsx)(r,{name:l,defaultValue:a(n),description:i(n)})}))}):null}function c(e){let{model:t,includeOnly:n,isCreateOrUpdate:i}=e;return(0,s.jsxs)("table",{children:[(0,s.jsx)(l,{isCreateOrUpdate:i}),i?(0,s.jsx)(d,{attributes:t.operations.create.attributes}):(0,s.jsxs)(s.Fragment,{children:[!n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{filters:t.filters}),(0,s.jsx)(r,{name:"page[size]",defaultValue:"50",description:"Maximum number of results"}),(0,s.jsx)(r,{name:"page[number]",defaultValue:"1",description:"Page number"})]}),t.includes&&(0,s.jsx)(r,{name:"include",defaultValue:"",description:t.includes.map((e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:e})," "]})))})]})]})}}}]);