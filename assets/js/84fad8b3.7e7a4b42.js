"use strict";(self.webpackChunkconfetti_docs=self.webpackChunkconfetti_docs||[]).push([[197],{5863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>x,frontMatter:()=>f,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tickets/findAll","title":"Find all","description":"{${JSON.stringify(confetti.models.ticket.sample.multiple.formatted, null, 2)}}","source":"@site/docs/tickets/findAll.mdx","sourceDirName":"tickets","slug":"/tickets/findAll","permalink":"/docs/tickets/findAll","draft":false,"unlisted":false,"editUrl":"https://github.com/confetti/confetti-docs/docs/tickets/findAll.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Find one","permalink":"/docs/tickets/find"},"next":{"title":"Find one","permalink":"/docs/events/find"}}');var i=n(4848),l=n(8453),r=n(5537),a=n(9329),c=n(8069),d=n(1980),u=n.n(d),o=n(4021);const f={},p="Find all",m={},h=[];function j(e){const t={code:"code",h1:"h1",header:"header",pre:"pre",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"find-all",children:"Find all"})}),"\n",(0,i.jsx)(o.A,{model:u().models.ticket}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsxs)(a.A,{value:"javascript",label:"JavaScript",default:!0,children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const Confetti = require('confetti')\n\nconst confetti = new Confetti({ apiKey: 'your-key' })\nconst tickets = await confetti.tickets.findAll({\n  filter: {\n    eventId: 16969\n  },\n  page: {\n    size: 10,\n    number: 3\n  }\n})\n"})}),(0,i.jsx)(c.A,{language:"javascript",title:"Result",children:`${JSON.stringify(u().models.ticket.sample.multiple.formatted,null,2)}`})]}),(0,i.jsxs)(a.A,{value:"curl",label:"curl",children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'curl "https://api.confetti.events/tickets?filter[eventId]=16969"\n  -H "Authorization: apikey your-key"\n'})}),(0,i.jsx)(c.A,{language:"javascript",title:"Result",children:`${JSON.stringify(u().models.ticket.sample.multiple.raw,null,2)}`})]})]})]})}function x(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},4021:(e,t,n)=>{n.d(t,{A:()=>u});var s=n(4848);function i(e){let{isCreateOrUpdate:t}=e;return(0,s.jsxs)("thead",{children:[(0,s.jsx)("th",{children:"Parameter"}),(0,s.jsx)("th",{children:t?"Type":"Default"}),(0,s.jsx)("th",{children:"Values / Description"})]})}function l(e){let{name:t,defaultValue:n,description:i}=e;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:t}),(0,s.jsx)("td",{children:n}),(0,s.jsx)("td",{children:i})]})}const r=e=>["string","boolean","number"].includes(e.type)?e.type:e.values.map((e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:e.value})," "]}))),a=e=>Array.isArray(e.default)?e.default.map((e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:e})," "]}))):e.default;function c(e){let{attributes:t}=e;return t&&0!==t.length?t.map((e=>{const t=e.values?e.values.map((e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:e})," "]}))):e.helpText,n=e.multiple?`array of ${e.type}s`:e.type,i=`${e.key}${e.required?"*":""}`;return(0,s.jsx)(l,{name:i,defaultValue:n,description:t})})):null}function d(e){let{filters:t}=e;return t&&0!==Object.keys(t).length?(0,s.jsx)(s.Fragment,{children:Object.keys(t).map((e=>{const n=t[e],i=n.required?`filter[${e}]*`:`filter[${e}]`;return(0,s.jsx)(l,{name:i,defaultValue:a(n),description:r(n)})}))}):null}function u(e){let{model:t,includeOnly:n,isCreateOrUpdate:r}=e;return(0,s.jsxs)("table",{children:[(0,s.jsx)(i,{isCreateOrUpdate:r}),r?(0,s.jsx)(c,{attributes:t.operations.create.attributes}):(0,s.jsxs)(s.Fragment,{children:[!n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{filters:t.filters}),(0,s.jsx)(l,{name:"page[size]",defaultValue:"50",description:"Maximum number of results"}),(0,s.jsx)(l,{name:"page[number]",defaultValue:"1",description:"Page number"})]}),t.includes&&(0,s.jsx)(l,{name:"include",defaultValue:"",description:t.includes.map((e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:e})," "]})))})]})]})}}}]);