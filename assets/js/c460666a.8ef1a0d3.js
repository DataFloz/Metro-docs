"use strict";(self.webpackChunkmetro_docs=self.webpackChunkmetro_docs||[]).push([[2688],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7260:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2},i="Config YAML",s={unversionedId:"explanation/config",id:"explanation/config",title:"Config YAML",description:"The Metro.yaml file, located at /runner/cfg/metro.yaml, is a central configuration file for the system. It contains all the necessary configuration settings for the system, including queue connections, pipeline definitions, transformers, and runtime configuration.",source:"@site/docs/explanation/config.md",sourceDirName:"explanation",slug:"/explanation/config",permalink:"/Metro-docs/docs/explanation/config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/explanation/config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"introSidebar",previous:{title:"Intro",permalink:"/Metro-docs/docs/explanation/intro"},next:{title:"Runner",permalink:"/Metro-docs/docs/explanation/runner"}},l={},c=[{value:"Infrastructure as Code (IAC) Approach",id:"infrastructure-as-code-iac-approach",level:2},{value:"Metro.yaml Examples",id:"metroyaml-examples",level:2}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"config-yaml"},"Config YAML"),(0,a.kt)("h1",{id:"metroyaml-configuration"},"Metro.yaml Configuration"),(0,a.kt)("p",null,"The Metro.yaml file, located at ",(0,a.kt)("inlineCode",{parentName:"p"},"/runner/cfg/metro.yaml"),", is a central configuration file for the system. It contains all the necessary configuration settings for the system, including queue connections, pipeline definitions, transformers, and runtime configuration."),(0,a.kt)("h2",{id:"infrastructure-as-code-iac-approach"},"Infrastructure as Code (IAC) Approach"),(0,a.kt)("p",null,"The Metro.yaml configuration file embodies the Infrastructure as Code (IAC) approach. IAC is a methodology that treats infrastructure and configuration settings as code, enabling automation, version control, and reproducibility. Here are some benefits of using the IAC approach in the system:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Consistency and Reproducibility"),": With IAC, the system configuration is defined in code, allowing you to recreate the exact infrastructure and configuration across different environments consistently. This ensures reproducibility and reduces the risk of configuration drift.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Version Control"),": Treating the system configuration as code enables version control. You can track changes, revert to previous versions, and collaborate with others using established version control practices. This improves collaboration, transparency, and accountability.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Automation and Efficiency"),": IAC allows for automated provisioning and configuration management. You can automate the deployment and configuration processes, reducing manual errors, and improving efficiency. Changes can be easily applied, tested, and rolled back if necessary."))),(0,a.kt)("h2",{id:"metroyaml-examples"},"Metro.yaml Examples"),(0,a.kt)("p",null,"To help you get started with the Metro.yaml configuration file, here are a few examples of different configuration sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Queue Connection Configuration"),":",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  name: 'sample-config'\n  running_infrastructure:\n  infrustructure_type: container\n  connectors:\n  -\n      name: 'local-kafka-connector'\n      type: 'kafka'\n      brokers: 'kafka:29092'\n      group_id: 'some-group-id'\n  pipelines:\n  -\n      name: 'calculate-fullname'\n      input:\n      type: 'kafka'\n      topic: 'persons'\n      output:\n      type: 'kafka'\n      topic: 'persons-with-full-name'\n      transformation:\n      type: 'sql'\n      sql_query: 'SELECT *, first_name || \" \" || last_name as full_name FROM msg'\n  -\n      name: 'calculate-is-adult'\n      input:\n      type: 'kafka'\n      topic: 'persons-with-full-name'\n      output:\n      type: 'kafka'\n      topic: 'persons-with-full-name-is-adult'\n      transformation:\n      type: 'sql'\n      sql_query: 'SELECT *, age > 18 as is_adult FROM msg'\n  -\n      name: 'filter-only-abults'\n      input:\n      type: 'kafka'\n      topic: 'persons-with-full-name-is-adult'\n      output:\n      type: 'kafka'\n      topic: 'persons-only-adults'\n      transformation:\n      type: 'sql'\n      sql_query: 'SELECT * FROM msg WHERE is_adult'\n  -\n      name: 'predict-person-with-ML'\n      input:\n      type: 'kafka'\n      topic: 'persons-with-full-name'\n      output:\n      type: 'kafka'\n      topic: 'persons-with-ml'\n      transformation:\n      type: 'pickle'\n    file_name: 'test.pkl'\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n\nThese examples provide a glimpse into the structure and syntax of the Metro.yaml configuration file. Refer to the system's documentation for detailed information on each configuration option and the available configuration settings.\n\nEmbrace the power of Infrastructure as Code with the Metro.yaml configuration file, enabling reproducibility, automation, and version control in your system configuration.\n\n\nWith this sample Markdown content, you can explain the purpose and benefits of the Metro.yaml configuration file, as well as provide a few examples to illustrate its structure and syntax. Feel free to customize and expand upon this content based on your specific system's configuration options and requirements.\n")))}f.isMDXComponent=!0}}]);