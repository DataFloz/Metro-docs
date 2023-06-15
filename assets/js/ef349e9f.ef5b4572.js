"use strict";(self.webpackChunkmetro_docs=self.webpackChunkmetro_docs||[]).push([[3591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=o,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},a="Running",l={unversionedId:"getting-stated/running",id:"getting-stated/running",title:"Running",description:"Running it locally",source:"@site/docs/getting-stated/running.md",sourceDirName:"getting-stated",slug:"/getting-stated/running",permalink:"/Metro-docs/docs/getting-stated/running",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-stated/running.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"introSidebar",previous:{title:"Installation",permalink:"/Metro-docs/docs/getting-stated/installation"},next:{title:"Create your own pipeline",permalink:"/Metro-docs/docs/getting-stated/your-own-pipeline"}},c={},u=[{value:"Running it locally",id:"running-it-locally",level:3},{value:"Debuging",id:"debuging",level:3},{value:"Rollout your changes",id:"rollout-your-changes",level:3},{value:"Running in production / cloud enviroment",id:"running-in-production--cloud-enviroment",level:3}],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running"},"Running"),(0,o.kt)("h3",{id:"running-it-locally"},"Running it locally"),(0,o.kt)("p",null,"The available options to run the project locally are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Using the Docker Compose file"),": This option provides a convenient way to run the entire project with all its components. Simply use the following command to start the containers using Docker Compose:\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Using the dev container configuration"),": If you prefer a more customizable setup, you can use the dev container configuration. This option requires the VS Code Remote - Containers extension. Follow these steps:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the VS Code Remote - Containers extension."),(0,o.kt)("li",{parentName:"ul"},"Open the project folder in Visual Studio Code."),(0,o.kt)("li",{parentName:"ul"},'When prompted, click on the "Reopen in Container" button.'),(0,o.kt)("li",{parentName:"ul"},"Once inside the dev container, start the runner application manually using the appropriate command.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Running specific parts with Docker containers"),": If you only need to run specific parts of the project, you can utilize Docker containers. Start only the necessary containers and exclude the ones you don't require for your specific use case. Use the relevant Docker commands to start the desired containers.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Running the runner and client locally"),": For even more flexibility, you can choose to run the runner and the client directly on your local machine. Ensure you have the necessary dependencies installed and use the appropriate commands to start the runner and client components."))),(0,o.kt)("p",null,"Choose the option that best suits your needs and follow the provided instructions to run the project locally."),(0,o.kt)("h3",{id:"debuging"},"Debuging"),(0,o.kt)("h3",{id:"rollout-your-changes"},"Rollout your changes"),(0,o.kt)("h3",{id:"running-in-production--cloud-enviroment"},"Running in production / cloud enviroment"))}d.isMDXComponent=!0}}]);