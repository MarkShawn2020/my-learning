"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(h,l(l({ref:t},c),{},{components:n})):i.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>f});var i=n(3905),r=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={},m="eslint howto",h={unversionedId:"Coding/JS/CodeQuality_eslint_prettier_jest/eslint-howto",id:"Coding/JS/CodeQuality_eslint_prettier_jest/eslint-howto",title:"eslint howto",description:"[toc]",source:"@site/docs/Coding/JS/CodeQuality_eslint_prettier_jest/eslint-howto.md",sourceDirName:"Coding/JS/CodeQuality_eslint_prettier_jest",slug:"/Coding/JS/CodeQuality_eslint_prettier_jest/eslint-howto",permalink:"/keeps-learning/docs/Coding/JS/CodeQuality_eslint_prettier_jest/eslint-howto",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/Coding/JS/CodeQuality_eslint_prettier_jest/eslint-howto.md",tags:[],version:"current",lastUpdatedAt:1658911274,formattedLastUpdatedAt:"2022\u5e747\u670827\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"html howto",permalink:"/keeps-learning/docs/Coding/HTML/html-howto"},next:{title:"eslint prettier typescript",permalink:"/keeps-learning/docs/Coding/JS/CodeQuality_eslint_prettier_jest/eslint-prettier-typescript"}},k={},f=[{value:"<code>div</code> element with <code>onClick</code>",id:"div-element-with-onclick",level:2},{value:"Alias error",id:"alias-error",level:2}],g={toc:f};function b(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=u(u({},g),c),a(t,l({components:r,mdxType:"MDXLayout"}))),(0,i.kt)("h1",u({},{id:"eslint-howto"}),"eslint howto"),(0,i.kt)("p",null,"[toc]"),(0,i.kt)("h2",u({},{id:"div-element-with-onclick"}),(0,i.kt)("inlineCode",{parentName:"h2"},"div")," element with ",(0,i.kt)("inlineCode",{parentName:"h2"},"onClick")),(0,i.kt)("p",null,"Although I can just attach a ",(0,i.kt)("inlineCode",{parentName:"p"},"onClick")," method to a ",(0,i.kt)("inlineCode",{parentName:"p"},"div"),"'s property, It would cause a chain of eslint problems."),(0,i.kt)("p",null,"The first one is ",(0,i.kt)("inlineCode",{parentName:"p"},"no-static-element-interactions"),", since ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"span")," can not own 'semantic' behavior."),(0,i.kt)("p",null,"Then, the solution is to add a ",(0,i.kt)("inlineCode",{parentName:"p"},'role="button"')," to make it clickable."),(0,i.kt)("p",null,"After then, it trigger a new eslint problem of ",(0,i.kt)("inlineCode",{parentName:"p"},"interactive-supports-focus"),", which suggests me to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"tabIndex")," property for keyboard support. "),(0,i.kt)("p",null,"However, I didn't intend to let my div capturing 'tab' behavior. Hence, I can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"tabIndex=-1")," to suppress it."),(0,i.kt)("p",null,"And next, another eslint problem of ",(0,i.kt)("inlineCode",{parentName:"p"},"click-events-have-key-events")," occurred, which needs me to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-hidden")," property."),(0,i.kt)("p",null,"At last, to make a ",(0,i.kt)("inlineCode",{parentName:"p"},"div"),"'s 'click' action qualified, I should change the ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," element into like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"<div\n  onClick={requestReadFile}\n  role={'button'}\n  tabIndex={-1}\n  aria-hidden\n  // id={'upload-area'}\n  // className={'flex justify-center items-center flex-col'}\n  // style={{ width: 300, border: '2px dashed' }}\n>{...}</div>\n")),(0,i.kt)("p",null,"ref:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md"}),"eslint-plugin-jsx-a11y/no-static-element-interactions.md at master \xb7 jsx-eslint/eslint-plugin-jsx-a11y")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md"}),"eslint-plugin-jsx-a11y/interactive-supports-focus.md at master \xb7 jsx-eslint/eslint-plugin-jsx-a11y")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md"}),"eslint-plugin-jsx-a11y/click-events-have-key-events.md at master \xb7 jsx-eslint/eslint-plugin-jsx-a11y"))),(0,i.kt)("h2",u({},{id:"alias-error"}),"Alias error"),(0,i.kt)("p",null,"Use this will partially cause error, since the ",(0,i.kt)("inlineCode",{parentName:"p"},"_public")," works well, while ",(0,i.kt)("inlineCode",{parentName:"p"},"_renderer")," won't."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-json"}),'// .eslintrc\n  "settings": {\n    "alias": {\n        "map": [\n            [ "_public", "./public" ],\n            [ "_renderer", "./src/renderer" ]\n        ]\n      },\n    "import/resolver": {\n        "webpack": {\n            "config": "./webpack.config.js"\n        },\n      }\n    }\n  },\n')),(0,i.kt)("p",null,"However, if I just change the ",(0,i.kt)("inlineCode",{parentName:"p"},"config"),"'s value into ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),", then everything goes well including ",(0,i.kt)("inlineCode",{parentName:"p"},"import/no-extraneous-dependencies"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-json"}),'// .eslintrc\n  "settings": {\n    "import/resolver": {\n      "webpack": {\n        "config": {\n        }\n      }\n    }\n  },\n')),(0,i.kt)("p",null,"I don't know why, maybe it's a bug."),(0,i.kt)("p",null,"Here is my installed packages about ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint"),":"),(0,i.kt)("img",{alt:"picture 3",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640339399635-eslint-bugfix-88b6064bdc55bf3495335674e1e254488ee1e239eec5324af609ac1586caddb8.png",width:"480"}),(0,i.kt)("p",null,"Finally, I decided to give up the ",(0,i.kt)("inlineCode",{parentName:"p"},"xxx-webpack")," choice:"),(0,i.kt)("img",{alt:"picture 4",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640340967469-eslint-bugfix-9f20bf6d6ac82d82634fef3e48e09adbf9bd2b77a5502bf8cbca2c33e3e0d2bd.png",width:"480"}),(0,i.kt)("p",null,"refer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"https://github.com/import-js/eslint-plugin-import/issues/1851"}),"Webpack alias not working \xb7 Issue #1851 \xb7 import-js/eslint-plugin-import")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"https://github.com/import-js/eslint-plugin-import"}),"https://github.com/import-js/eslint-plugin-import")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"https://github.com/johvin/eslint-import-resolver-alias"}),"https://github.com/johvin/eslint-import-resolver-alias")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"https://github.com/import-js/eslint-plugin-import"}),"https://github.com/import-js/eslint-plugin-import"))))}b.isMDXComponent=!0}}]);