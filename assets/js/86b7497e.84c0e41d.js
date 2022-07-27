"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=m(n),s=a,c=d["".concat(p,".").concat(s)]||d[s]||u[s]||o;return n?r.createElement(c,l(l({ref:t},g),{},{components:n})):r.createElement(c,l({ref:t},g))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={},l="opengl howto",i={unversionedId:"AndroidFramework/timewarp/TaskC2-opengl/opengl-howto",id:"AndroidFramework/timewarp/TaskC2-opengl/opengl-howto",title:"opengl howto",description:"1. documentation",source:"@site/docs/AndroidFramework/timewarp/TaskC2-opengl/opengl-howto.md",sourceDirName:"AndroidFramework/timewarp/TaskC2-opengl",slug:"/AndroidFramework/timewarp/TaskC2-opengl/opengl-howto",permalink:"/keeps-learning/docs/AndroidFramework/timewarp/TaskC2-opengl/opengl-howto",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/AndroidFramework/timewarp/TaskC2-opengl/opengl-howto.md",tags:[],version:"current",lastUpdatedAt:1658896346,formattedLastUpdatedAt:"2022\u5e747\u670827\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"TIMEWARP RESEARCH",permalink:"/keeps-learning/docs/AndroidFramework/timewarp/TaskC1-timewarp/tw-research"},next:{title:"arpara glass howto",permalink:"/keeps-learning/docs/AndroidFramework/timewarp/arpara-glass-howto"}},p={},m=[{value:"documentation",id:"documentation",level:2},{value:"config <code>opengl | glfw | glad</code>",id:"config-opengl--glfw--glad",level:2},{value:"<code>glUniform*</code>",id:"gluniform",level:2},{value:"shader language",id:"shader-language",level:2},{value:"FIXED: <code>glGetUniformLocation() returning -1 even though used in vertex shader</code>",id:"fixed-glgetuniformlocation-returning--1-even-though-used-in-vertex-shader",level:3}],g={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"opengl-howto"},"opengl howto"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#documentation"},"documentation")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#config-opengl--glfw--glad"},"config ",(0,a.kt)("inlineCode",{parentName:"a"},"opengl | glfw | glad"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#gluniform"},(0,a.kt)("inlineCode",{parentName:"a"},"glUniform*"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#shader-language"},"shader language"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#fixed-glgetuniformlocation-returning--1-even-though-used-in-vertex-shader"},"FIXED: ",(0,a.kt)("inlineCode",{parentName:"a"},"glGetUniformLocation() returning -1 even though used in vertex shader")))))),(0,a.kt)("h2",{id:"documentation"},"documentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2728\u2728\u2728 \u82f1\u6587\u539f\u7248\u4ee3\u7801\u5e93\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JoeyDeVries/LearnOpenGL"},"JoeyDeVries/LearnOpenGL: Code repository of all OpenGL chapters from the book and its accompanying website https://learnopengl.com"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2728\u2728\u2728 \u4e2d\u6587\u6700\u65b0\u7248\u6559\u7a0b\u7ffb\u8bd1\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://learnopengl-cn.github.io/01%20Getting%20started/04%20Hello%20Triangle/"},"\u4f60\u597d\uff0c\u4e09\u89d2\u5f62 - LearnOpenGL CN"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2728\u2728: \u4e2d\u6587\u6700\u65b0\u7248github\u7ffb\u8bd1\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/LearnOpenGL-CN/LearnOpenGL-CN"},"LearnOpenGL-CN/LearnOpenGL-CN: http://learnopengl.com \u7cfb\u5217\u6559\u7a0b\u7684\u7b80\u4f53\u4e2d\u6587\u7ffb\u8bd1"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u4eba\u7684\u535a\u5ba2\u5f88\u7cbe\u81f4\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://blog.hawkhai.com/blog/2020/12/12/shader-OpenGL-ES-syntax#varying-%E9%99%90%E5%AE%9A%E7%AC%A6"},"Hawkhai | \u56fe\u5f62\u5b66\u7b14\u8bb0 -- GLSL ES \u8bed\u6cd5\u8be6\u89e3")))),(0,a.kt)("h2",{id:"config-opengl--glfw--glad"},"config ",(0,a.kt)("inlineCode",{parentName:"h2"},"opengl | glfw | glad")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6eglad\u5730\u5740\uff1a ",(0,a.kt)("a",{parentName:"li",href:"https://glad.dav1d.de/"},"https://glad.dav1d.de"))),(0,a.kt)("p",null,"ref:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://1-riverfish.github.io/2018/10/27/Ubuntu%E4%B8%8BClion%E9%85%8D%E7%BD%AE%E3%80%81%E4%BD%BF%E7%94%A8Glfw-Glad%E5%BC%80%E5%8F%91OpenGL%E9%A1%B9%E7%9B%AE/"},"Ubuntu\u4e0bClion\u914d\u7f6e\u3001\u4f7f\u7528glfw,glad\u5f00\u53d1OpenGL\u9879\u76ee \xb7 Ginger's blog"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/89549290"},"ubuntu16.04+glfw3+glad+glm+assimp - \u77e5\u4e4e")))),(0,a.kt)("h2",{id:"gluniform"},(0,a.kt)("inlineCode",{parentName:"h2"},"glUniform*")),(0,a.kt)("p",null,"ref:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glUniform.xhtml"},"glUniform - OpenGL 4 Reference Pages")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/mumuzi_1/article/details/62047112"},"(1\u6761\u6d88\u606f) OpenGL\u2014\u2014glUniform1i \u7528\u6cd5_\u4e00\u68a6\u5341\u5e74-CSDN\u535a\u5ba2_gluniform1i"))),(0,a.kt)("h2",{id:"shader-language"},"shader language"),(0,a.kt)("h3",{id:"fixed-glgetuniformlocation-returning--1-even-though-used-in-vertex-shader"},"FIXED: ",(0,a.kt)("inlineCode",{parentName:"h3"},"glGetUniformLocation() returning -1 even though used in vertex shader")),(0,a.kt)("p",null,"\u8981\u4fdd\u8bc1\u4e24\u70b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u4efb\u610f\u4e00\u4e2ashader\u4e2d\u7684\u5b9a\u4e49\u7684\u53d8\u91cf\u8981\u88ab\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ol"},"!IMPORTANT: \u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"vertexShader")," \u4e2d\u8f93\u51fa\u7684\u53d8\u91cf\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"fragmentShader")," \u4e2d\u4f7f\u7528\uff0c\u5426\u5219\u8be5\u53d8\u91cf\u5c31\u4f1a\u88ab\u4f18\u5316")),(0,a.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u5f53\u65f6\u78b0\u5230\u8fd9\u4e2a\u95ee\u9898\uff0c\u662f\u56e0\u4e3a\u6653\u7814\u8bf4 ",(0,a.kt)("inlineCode",{parentName:"p"},"fragmentShader")," \u4e0d\u9700\u8981\uff0c\u4f46\u5b9e\u9645\u662f\u9700\u8981\u7684\u3002"),(0,a.kt)("p",null,"ref:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/23319288/glgetuniformlocation-returning-1-even-though-used-in-vertex-shader"},"c++ - glGetUniformLocation() returning -1 even though used in vertex shader - Stack Overflow"))))}u.isMDXComponent=!0}}]);