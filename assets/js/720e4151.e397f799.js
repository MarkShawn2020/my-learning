"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3038],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),y=o,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56410:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>y,default:()=>g,frontMatter:()=>d,metadata:()=>f,toc:()=>h});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&s(e,r,t[r]);return e};const d={},y="pandas howto",f={unversionedId:"Coding/Python/pandas-howto",id:"version-0.16.0/Coding/Python/pandas-howto",title:"pandas howto",description:"how to use query",source:"@site/versioned_docs/version-0.16.0/Coding/Python/pandas-howto.md",sourceDirName:"Coding/Python",slug:"/Coding/Python/pandas-howto",permalink:"/keeps-learning/docs/0.16.0/Coding/Python/pandas-howto",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/Coding/Python/pandas-howto.md",tags:[],version:"0.16.0",lastUpdatedAt:1658911274,formattedLastUpdatedAt:"2022\u5e747\u670827\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"jupyter howto",permalink:"/keeps-learning/docs/0.16.0/Coding/Python/jupyter-howto"},next:{title:"python bugfix",permalink:"/keeps-learning/docs/0.16.0/Coding/Python/python-bugfix"}},m={},h=[{value:"how to use <code>query</code>",id:"how-to-use-query",level:2},{value:"use <code>query</code> to perform a <code>LIKE</code>",id:"use-query-to-perform-a-like",level:3}],b={toc:h};function g(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),s),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"pandas-howto"}),"pandas howto"),(0,n.kt)("h2",u({},{id:"how-to-use-query"}),"how to use ",(0,n.kt)("inlineCode",{parentName:"h2"},"query")),(0,n.kt)("h3",u({},{id:"use-query-to-perform-a-like"}),"use ",(0,n.kt)("inlineCode",{parentName:"h3"},"query")," to perform a ",(0,n.kt)("inlineCode",{parentName:"h3"},"LIKE")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-py"}),"# use `.str.contains`\ndf.query('column_a.str.contains(\"abc\") or column_b.str.contains(\"xyz\") and column_c>100', engine='python')\n\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"ref")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/questions/31391275/using-like-inside-pandas-query"}),"python - USING LIKE inside pandas.query() - Stack Overflow"))))}g.isMDXComponent=!0}}]);