"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8588],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),c=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,f=m["".concat(d,".").concat(u)]||m[u]||s[u]||a;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>h,frontMatter:()=>m,metadata:()=>f,toc:()=>g});var o=r(3905),n=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&l(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&l(e,r,t[r]);return e};const m={},u="aosp coding howto",f={unversionedId:"AndroidFramework/AOSP/TaskA7-aosp-coding/aosp-coding-howto",id:"AndroidFramework/AOSP/TaskA7-aosp-coding/aosp-coding-howto",title:"aosp coding howto",description:"use androidmk to change mk file into bp file",source:"@site/docs/AndroidFramework/AOSP/TaskA7-aosp-coding/aosp-coding-howto.md",sourceDirName:"AndroidFramework/AOSP/TaskA7-aosp-coding",slug:"/AndroidFramework/AOSP/TaskA7-aosp-coding/aosp-coding-howto",permalink:"/keeps-learning/docs/AndroidFramework/AOSP/TaskA7-aosp-coding/aosp-coding-howto",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/AndroidFramework/AOSP/TaskA7-aosp-coding/aosp-coding-howto.md",tags:[],version:"current",lastUpdatedAt:1658911274,formattedLastUpdatedAt:"2022\u5e747\u670827\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"aosp read howto",permalink:"/keeps-learning/docs/AndroidFramework/AOSP/TaskA6-aosp-read/aosp-read-howto"},next:{title:"adb howto",permalink:"/keeps-learning/docs/AndroidFramework/adb-howto"}},k={},g=[{value:"use <code>androidmk</code> to change <code>mk</code> file into <code>bp</code> file",id:"use-androidmk-to-change-mk-file-into-bp-file",level:2}],b={toc:g};function h(e){var t,r=e,{components:n}=r,l=((e,t)=>{var r={};for(var o in e)d.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&p)for(var o of p(e))t.indexOf(o)<0&&c.call(e,o)&&(r[o]=e[o]);return r})(r,["components"]);return(0,o.kt)("wrapper",(t=s(s({},b),l),a(t,i({components:n,mdxType:"MDXLayout"}))),(0,o.kt)("h1",s({},{id:"aosp-coding-howto"}),"aosp coding howto"),(0,o.kt)("h2",s({},{id:"use-androidmk-to-change-mk-file-into-bp-file"}),"use ",(0,o.kt)("inlineCode",{parentName:"h2"},"androidmk")," to change ",(0,o.kt)("inlineCode",{parentName:"h2"},"mk")," file into ",(0,o.kt)("inlineCode",{parentName:"h2"},"bp")," file"),(0,o.kt)("p",null,"path: ",(0,o.kt)("inlineCode",{parentName:"p"},"out/soong/host/linux-x86/bin/androidmk")),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-sh"}),"# create soft link\nln -s out/soong/host/linux-x86/bin/androidmk androidmk\n")),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"official intro:",(0,o.kt)("a",s({parentName:"p"},{href:"https://source.android.google.cn/setup/build?hl=zh-cn"}),"Soong \u7f16\u8bd1\u7cfb\u7edf \xa0|\xa0 Android \u5f00\u6e90\u9879\u76ee \xa0|\xa0 Android Open Source Project"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",s({parentName:"p"},{href:"https://www.i4k.xyz/article/weixin_34342589/117589957"}),"android mk\u4e0ebp,Android.bp\u4f60\u771f\u7684\u4e86\u89e3\u5417_\u65b9\u840c-CFT\u7684\u535a\u5ba2-\u7a0b\u5e8f\u5458\u4fe1\u606f\u7f51 - \u7a0b\u5e8f\u5458\u4fe1\u606f\u7f51"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",s({parentName:"p"},{href:"https://blog.csdn.net/tkwxty/article/details/104411520"}),"(23\u6761\u6d88\u606f) Android.bp\u5165\u95e8\u6307\u5357\u4e4bAndroid.mk\u8f6c\u6362\u6210Android.bp_IT\u5148\u68ee-CSDN\u535a\u5ba2_android.mk\u8f6candroid.bp")))))}h.isMDXComponent=!0}}]);