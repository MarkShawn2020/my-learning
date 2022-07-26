"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6236],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=l,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||n;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(87462),l=(r(67294),r(3905));const n={},o="alfred howto",i={unversionedId:"OS/Mac/alfred-howto",id:"OS/Mac/alfred-howto",title:"alfred howto",description:"1. create interactive shell",source:"@site/docs/OS/Mac/alfred-howto.md",sourceDirName:"OS/Mac",slug:"/OS/Mac/alfred-howto",permalink:"/docs/OS/Mac/alfred-howto",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/OS/Mac/alfred-howto.md",tags:[],version:"current",lastUpdatedAt:1658770976,formattedLastUpdatedAt:"2022\u5e747\u670825\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"ubuntu init manual",permalink:"/docs/OS/Linux/ubuntu-init-manual"},next:{title:"ios\u9006\u5411",permalink:"/docs/OS/Mac/ios-hack"}},p={},c=[{value:"create interactive shell",id:"create-interactive-shell",level:2},{value:"alfred documentation",id:"alfred-documentation",level:3},{value:"alfred create script",id:"alfred-create-script",level:3},{value:"alfred repo",id:"alfred-repo",level:3},{value:"script filter",id:"script-filter",level:2},{value:"generate icon based on number",id:"generate-icon-based-on-number",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"alfred-howto"},"alfred howto"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#create-interactive-shell"},"create interactive shell"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#alfred-documentation"},"alfred documentation")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#alfred-create-script"},"alfred create script")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#alfred-repo"},"alfred repo")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#script-filter"},"script filter")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#generate-icon-based-on-number"},"generate icon based on number"))),(0,l.kt)("h2",{id:"create-interactive-shell"},"create interactive shell"),(0,l.kt)("p",null,"In this post ",(0,l.kt)("a",{parentName:"p",href:"https://unix.stackexchange.com/questions/146570/arrow-key-enter-menu/415155"},"shell - Arrow key/Enter menu - Unix & Linux Stack Exchange"),", there is a few of hacked scripts that allow me to design a potion list."),(0,l.kt)("p",null,"Among of this, the package ",(0,l.kt)("inlineCode",{parentName:"p"},"dialog")," is a little too fancy."),(0,l.kt)("h3",{id:"alfred-documentation"},"alfred documentation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.alfredapp.com/help/guides-and-tutorials/"},"Guides and Tutorials - Alfred Help and Support"))),(0,l.kt)("h3",{id:"alfred-create-script"},"alfred create script"),(0,l.kt)("p",null,"use ",(0,l.kt)("inlineCode",{parentName:"p"},"script filter")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/jays-blog/using-script-filters-in-alfred-workflows-61432fd78e39"},"Using script filters in Alfred Workflows | by Jay McCormack | Jay\u2019s Blog | Medium"))),(0,l.kt)("h3",{id:"alfred-repo"},"alfred repo"),(0,l.kt)("p",null,"Strongly Recommended"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/zenorocha/alfred-workflows"},"zenorocha/alfred-workflows: A collection of Alfred 3 and 4 workflows that will rock your world"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/hzlzh/AlfredWorkflow.com"},"hzlzh/AlfredWorkflow.com: A public Collection of Alfred Workflows.")))),(0,l.kt)("p",null,"a python kit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/deanishe/alfred-workflow"},"deanishe/alfred-workflow: Full-featured library for writing Alfred 3 & 4 workflows"))),(0,l.kt)("p",null,"ref:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.alfredapp.com/help/workflows/actions/run-script/"},"Run Script Action - Alfred Help and Support"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.alfredforum.com/topic/10631-permission-error-on-external-applescript-script/"},"Permission Error on External AppleScript Script - Workflow Help & Questions - Alfred App Community Forum"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.alfredforum.com/topic/8066-run-script-not-working-for-workflow/"},'"Run script" not working for workflow - Workflow Help & Questions - Alfred App Community Forum')))),(0,l.kt)("p",null,"ref:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/146570/arrow-key-enter-menu/415155"},"shell - Arrow key/Enter menu - Unix & Linux Stack Exchange"))),(0,l.kt)("h2",{id:"script-filter"},"script filter"),(0,l.kt)("p",null,"ref:"),(0,l.kt)("p",null,"official documentation of script filter with interface"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://alfred-workflow.readthedocs.io/en/latest/xml_format.html"},"Script Filter Results and the XML Format \u2014 Alfred-Workflow 1.13 documentation"))),(0,l.kt)("p",null,"icon interface"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.alfredforum.com/topic/14230-solved-show-correct-icons-in-script-filter/"},"[SOLVED] Show correct icons in Script Filter - Workflow Help & Questions - Alfred App Community Forum"))),(0,l.kt)("h2",{id:"generate-icon-based-on-number"},"generate icon based on number"),(0,l.kt)("p",null,"ref:"),(0,l.kt)("p",null,"install pillow"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://pillow.readthedocs.io/en/stable/installation.html"},"Installation \u2014 Pillow (PIL Fork) 8.4.0 documentation"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://code-maven.com/create-images-with-python-pil-pillow"},"Create images with Python PIL and Pillow and write text on them")))),(0,l.kt)("p",null,"use ",(0,l.kt)("inlineCode",{parentName:"p"},"multiline_text")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pillow.readthedocs.io/en/stable/reference/ImageDraw.html#example-draw-multiline-text"},"ImageDraw Module \u2014 Pillow (PIL Fork) 8.4.0 documentation"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'anchor="mm"')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pillow.readthedocs.io/en/stable/handbook/text-anchors.html#text-anchors"},"Text anchors \u2014 Pillow (PIL Fork) 8.4.0 documentation"))))}s.isMDXComponent=!0}}]);