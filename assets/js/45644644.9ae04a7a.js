"use strict";(self.webpackChunkmetro_docs=self.webpackChunkmetro_docs||[]).push([[3268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3},a="Pipeline",l={unversionedId:"explanation/pipeline",id:"explanation/pipeline",title:"Pipeline",description:"Responsiblity",source:"@site/docs/explanation/pipeline.md",sourceDirName:"explanation",slug:"/explanation/pipeline",permalink:"/Metro-docs/docs/explanation/pipeline",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/explanation/pipeline.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"introSidebar",previous:{title:"Runner",permalink:"/Metro-docs/docs/explanation/runner"},next:{title:"Transformation Types",permalink:"/Metro-docs/docs/explanation/transformers"}},p={},s=[{value:"Responsiblity",id:"responsiblity",level:3},{value:"How to run it",id:"how-to-run-it",level:3},{value:"How to debug it",id:"how-to-debug-it",level:3},{value:"Features",id:"features",level:3},{value:"Some Ideas",id:"some-ideas",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pipeline"},"Pipeline"),(0,i.kt)("h3",{id:"responsiblity"},"Responsiblity"),(0,i.kt)("p",null,"Each pipeline resposible for some kind of transformation.\nEvery pipeline contains three parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"input"),(0,i.kt)("li",{parentName:"ul"},"transformer"),(0,i.kt)("li",{parentName:"ul"},"output")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The pipeline consuming the messages from your input, transform the data, and than pass the new data to the output for the next pipeline in the chain.")),(0,i.kt)("h3",{id:"how-to-run-it"},"How to run it"),(0,i.kt)("p",null,"The runner resposible of running the pipelines the he is the one who pass the pipeline all the neccesery enviroment variables."),(0,i.kt)("h3",{id:"how-to-debug-it"},"How to debug it"),(0,i.kt)("p",null,"TODO"),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"consuming data in streaming"),(0,i.kt)("li",{parentName:"ul"},"running transformation logic"),(0,i.kt)("li",{parentName:"ul"},"produce the new data")),(0,i.kt)("h3",{id:"some-ideas"},"Some Ideas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"logs"),(0,i.kt)("li",{parentName:"ul"},"metrics"),(0,i.kt)("li",{parentName:"ul"},"error handling")))}d.isMDXComponent=!0}}]);