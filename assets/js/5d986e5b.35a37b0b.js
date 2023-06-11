"use strict";(self.webpackChunkmetro_docs=self.webpackChunkmetro_docs||[]).push([[8930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,u=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(u,i(i({ref:t},m),{},{components:n})):r.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},i="Transformation Types",s={unversionedId:"explanation/transformers",id:"explanation/transformers",title:"Transformation Types",description:"In the system, you can normalize raw data using various transformation types. Each transformation type offers a different approach to data normalization. Choose the one that best fits your requirements and data processing needs.",source:"@site/docs/explanation/transformers.md",sourceDirName:"explanation",slug:"/explanation/transformers",permalink:"/Metro-docs/docs/explanation/transformers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/explanation/transformers.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"introSidebar",previous:{title:"Pipeline",permalink:"/Metro-docs/docs/explanation/pipeline"},next:{title:"Client",permalink:"/Metro-docs/docs/explanation/client"}},l={},c=[{value:"SQL Transformation",id:"sql-transformation",level:2},{value:"HTTP Request Transformation",id:"http-request-transformation",level:2},{value:"Pickle File Transformation",id:"pickle-file-transformation",level:2},{value:"Container Transformation",id:"container-transformation",level:2},{value:"Some Ideas",id:"some-ideas",level:3}],m={toc:c},f="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(f,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transformation-types"},"Transformation Types"),(0,a.kt)("p",null,"In the system, you can normalize raw data using various transformation types. Each transformation type offers a different approach to data normalization. Choose the one that best fits your requirements and data processing needs."),(0,a.kt)("h2",{id:"sql-transformation"},"SQL Transformation"),(0,a.kt)("p",null,"The SQL transformation allows you to normalize data using SQL queries. You can write custom SQL statements to manipulate and transform the data stored in a database. This transformation type is useful when you need to perform complex data manipulations or leverage the power of SQL for data normalization."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(6866).Z,width:"415",height:"480"})),(0,a.kt)("h2",{id:"http-request-transformation"},"HTTP Request Transformation"),(0,a.kt)("p",null,"The HTTP Request transformation enables you to normalize data by making HTTP requests to external services or APIs. You can fetch data from remote sources, process it, and transform it according to your needs. This transformation type is beneficial when you need to integrate with external systems or retrieve data from web services."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(8513).Z,width:"394",height:"585"})),(0,a.kt)("h2",{id:"pickle-file-transformation"},"Pickle File Transformation"),(0,a.kt)("p",null,"The Pickle File transformation involves using a pickle file that contains a pre-trained model or function for data normalization. You can load the pickle file in your transformation pipeline and utilize the provided function or model to transform the data. This transformation type is suitable when you have a trained model or a custom data processing function that can be applied to your dataset."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(9510).Z,width:"715",height:"606"})),(0,a.kt)("h2",{id:"container-transformation"},"Container Transformation"),(0,a.kt)("p",null,"The Container transformation allows you to normalize data by running a containerized process that performs the required data transformation. You can build a container image with your data normalization logic, and then run the container to process the data. This transformation type offers flexibility and isolation, making it ideal for complex or specialized data normalization tasks."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(6469).Z,width:"424",height:"699"})),(0,a.kt)("p",null,"Select the transformation type that aligns with your data transformation needs and refer to the corresponding documentation for detailed instructions on how to utilize each transformation type effectively."),(0,a.kt)("h3",{id:"some-ideas"},"Some Ideas"))}p.isMDXComponent=!0},6469:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/container-transformer-17c397fbc6fed0ca7ec5f8fa240bb3de.png"},8513:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/http-transformer-d584c70aebef2b5e785eb1342c4ff8de.png"},9510:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ml-transformer-1a9b675435ed5fa6374c1b17b7f89511.png"},6866:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sql-tranformer-bd2301cdb7233a676bcc6edce3598d8a.png"}}]);