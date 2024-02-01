"use strict";(self.webpackChunkconfetti_docs=self.webpackChunkconfetti_docs||[]).push([[74],{6145:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>f,toc:()=>k});var n=i(5893),s=i(1151),c=i(4866),l=i(5162),r=i(9286),a=i(4999),o=i.n(a);const d={},u="Find one",f={id:"tickets/find",title:"Find one",description:"{${JSON.stringify(confetti.models.ticket.sample.single.formatted, null, 2)}}",source:"@site/docs/tickets/find.mdx",sourceDirName:"tickets",slug:"/tickets/find",permalink:"/docs/tickets/find",draft:!1,unlisted:!1,editUrl:"https://github.com/confetti/confetti-docs/docs/tickets/find.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create",permalink:"/docs/tickets/create"},next:{title:"Find all",permalink:"/docs/tickets/findAll"}},p={},k=[];function h(e){const t={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"find-one",children:"Find one"}),"\n",(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(l.Z,{value:"javascript",label:"JavaScript",default:!0,children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const Confetti = require('confetti')\n\nconst confetti = new Confetti({ apiKey: 'your-key' })\nconst ticket = await confetti.tickets.find(2)\n"})}),(0,n.jsx)(r.Z,{language:"javascript",title:"Result",children:`${JSON.stringify(o().models.ticket.sample.single.formatted,null,2)}`})]}),(0,n.jsxs)(l.Z,{value:"curl",label:"curl",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'curl "https://api.confetti.events/tickets/2"\n  -H "Authorization: apikey your-key"\n'})}),(0,n.jsx)(r.Z,{language:"javascript",title:"Result",children:`${JSON.stringify(o().models.ticket.sample.single.raw,null,2)}`})]})]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);