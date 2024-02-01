"use strict";(self.webpackChunkconfetti_docs=self.webpackChunkconfetti_docs||[]).push([[60],{5868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>j,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var a=n(5893),r=n(1151),s=n(4866),c=n(5162),i=(n(9286),n(4999)),o=n.n(i),l=n(5625);const d={},u="Create",p={id:"contacts/create",title:"Create",description:"",source:"@site/docs/contacts/create.mdx",sourceDirName:"contacts",slug:"/contacts/create",permalink:"/docs/contacts/create",draft:!1,unlisted:!1,editUrl:"https://github.com/confetti/confetti-docs/docs/contacts/create.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Find one",permalink:"/docs/workspace/find"},next:{title:"Find one",permalink:"/docs/contacts/find"}},m={},h=[];function f(e){const t={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"create",children:"Create"}),"\n",(0,a.jsx)(l.Z,{model:o().models.contact,isCreateOrUpdate:!0}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(c.Z,{value:"javascript",label:"JavaScript",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const Confetti = require('confetti')\n\nconst confetti = new Confetti({ apiKey: 'your-key' })\nconst data = await confetti.contacts.create({\n  firstName: 'Foo',\n  lastName: 'Bar',\n  email: 'foo@bar.se',\n  phone: '+46700000000',\n  comment: 'Foo bar',\n  categoryIds: [1, 2],\n  company: 'Foo Bar AB',\n})\n"})})}),(0,a.jsx)(c.Z,{value:"curl",label:"curl",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'curl -X POST "https://api.confetti.events/contacts"\n-H "Content-Type: application/json"\n-H "Authorization: apikey your-key"\n-d \'{\n  "data": {\n    "type": "contact",\n    "attributes": {\n      "firstName": "Foo",\n      "lastName": "Bar",\n      "email": "foo@bar.se",\n      "phone": "+46700000000",\n      "comment": "Foo bar",\n      "company": "Foo Bar AB",\n    },\n      "relationships": {\n        "categories": {\n          "data": [\n            { "id": "1" },\n            { "id": "2" }\n          ]\n        }\n      }\n    }\n  }\'\n'})})})]})]})}function j(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},5625:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(5893);function r(e){let{isCreateOrUpdate:t}=e;return(0,a.jsxs)("thead",{children:[(0,a.jsx)("th",{children:"Parameter"}),(0,a.jsx)("th",{children:t?"Type":"Default"}),(0,a.jsx)("th",{children:"Values / Description"})]})}function s(e){let{name:t,defaultValue:n,description:r}=e;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:t}),(0,a.jsx)("td",{children:n}),(0,a.jsx)("td",{children:r})]})}const c=e=>["string","boolean","number"].includes(e.type)?e.type:e.values.map((e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("code",{children:e.value})," "]}))),i=e=>Array.isArray(e.default)?e.default.map((e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("code",{children:e})," "]}))):e.default;function o(e){let{attributes:t}=e;return t&&0!==t.length?t.map((e=>{const t=e.values?e.values.map((e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("code",{children:e})," "]}))):e.helpText,n=e.multiple?`array of ${e.type}s`:e.type,r=`${e.key}${e.required?"*":""}`;return(0,a.jsx)(s,{name:r,defaultValue:n,description:t})})):null}function l(e){let{filters:t}=e;return t&&0!==Object.keys(t).length?(0,a.jsx)(a.Fragment,{children:Object.keys(t).map((e=>{const n=t[e],r=n.required?`filter[${e}]*`:`filter[${e}]`;return(0,a.jsx)(s,{name:r,defaultValue:i(n),description:c(n)})}))}):null}function d(e){let{model:t,includeOnly:n,isCreateOrUpdate:c}=e;return(0,a.jsxs)("table",{children:[(0,a.jsx)(r,{isCreateOrUpdate:c}),c?(0,a.jsx)(o,{attributes:t.operations.create.attributes}):(0,a.jsxs)(a.Fragment,{children:[!n&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{filters:t.filters}),(0,a.jsx)(s,{name:"page[size]",defaultValue:"50",description:"Maximum number of results"}),(0,a.jsx)(s,{name:"page[number]",defaultValue:"1",description:"Page number"})]}),t.includes&&(0,a.jsx)(s,{name:"include",defaultValue:"",description:t.includes.map((e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("code",{children:e})," "]})))})]})]})}}}]);