"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),h=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=h(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var h=2;h<o;h++)r[h]=n[h];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>w,frontMatter:()=>m,metadata:()=>f,toc:()=>k});var i=n(3905),a=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))h.call(t,n)&&p(e,n,t[n]);return e};const m={},d="css howto",f={unversionedId:"Coding/CSS/css-howto",id:"Coding/CSS/css-howto",title:"css howto",description:"1. shrink flex item to the remaining space",source:"@site/docs/Coding/CSS/css-howto.md",sourceDirName:"Coding/CSS",slug:"/Coding/CSS/css-howto",permalink:"/keeps-learning/docs/Coding/CSS/css-howto",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/Coding/CSS/css-howto.md",tags:[],version:"current",lastUpdatedAt:1658911274,formattedLastUpdatedAt:"2022\u5e747\u670827\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"cpp howto",permalink:"/keeps-learning/docs/Coding/CPP/cpp-howto"},next:{title:"flex",permalink:"/keeps-learning/docs/Coding/CSS/flex/"}},u={},k=[{value:"shrink flex item to the remaining space",id:"shrink-flex-item-to-the-remaining-space",level:2},{value:"set height to equal to its sibling",id:"set-height-to-equal-to-its-sibling",level:2},{value:"use <code>table</code>",id:"use-table",level:3},{value:"use <code>absolute position</code>",id:"use-absolute-position",level:3},{value:"use <code>flex-shrink</code> with <code>min-w/h: 0</code>",id:"use-flex-shrink-with-min-wh-0",level:3},{value:"start indent from second line (hanging indent)",id:"start-indent-from-second-line-hanging-indent",level:3}],g={toc:k};function w(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var i in e)l.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&s)for(var i of s(e))t.indexOf(i)<0&&h.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=c(c({},g),p),o(t,r({components:a,mdxType:"MDXLayout"}))),(0,i.kt)("h1",c({},{id:"css-howto"}),"css howto"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#shrink-flex-item-to-the-remaining-space"}),"shrink flex item to the remaining space")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#set-height-to-equal-to-its-sibling"}),"set height to equal to its sibling"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#use-table"}),"use ",(0,i.kt)("inlineCode",{parentName:"a"},"table"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#use-absolute-position"}),"use ",(0,i.kt)("inlineCode",{parentName:"a"},"absolute position"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#use-flex-shrink-with-min-wh-0"}),"use ",(0,i.kt)("inlineCode",{parentName:"a"},"flex-shrink")," with ",(0,i.kt)("inlineCode",{parentName:"a"},"min-w/h: 0"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#text-intent-settings"}),"text-intent settings"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#only-first-line-indent-like-chinese--paragraph"}),"only first line indent (like chinese  paragraph)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#start-indent-from-second-line-hanging-indent"}),"start indent from second line (hanging indent)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#conclusion"}),"conclusion"))))),(0,i.kt)("h2",c({},{id:"shrink-flex-item-to-the-remaining-space"}),"shrink flex item to the remaining space"),(0,i.kt)("p",null,"In many places, I need to adjust the dimension of one container to its father container, rather than the opposite, which is easier."),(0,i.kt)("p",null,"We know, as the most fundamental flex knowledge tells us, if there is some remaining space for its children, then the child can grow its size to fill these remaining space when we set their ",(0,i.kt)("inlineCode",{parentName:"p"},"flex-grow")," property to 1 or a number else."),(0,i.kt)("p",null,"However, if the content of one child exceeds its father's space limitation, then the default ",(0,i.kt)("inlineCode",{parentName:"p"},"flex-shrink")," property would not work as much effective as what the ",(0,i.kt)("inlineCode",{parentName:"p"},"flex-grow")," does."),(0,i.kt)("p",null,"The reason behind this would owe to the mechanism that the default ",(0,i.kt)("inlineCode",{parentName:"p"},"min-width/height")," is set as ",(0,i.kt)("inlineCode",{parentName:"p"},"auto"),", that means the size of child can't shrink to less than the size of its content, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"min-content"),"."),(0,i.kt)("p",null,"Whereas, if only we change the ",(0,i.kt)("inlineCode",{parentName:"p"},"min-width/height")," to 0, then we can breakthrough this limitation, so that the child can shrink to what the real remaining space constraints on it, like this:"),(0,i.kt)("img",{alt:"picture 66",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640632027477-css-howto-f75027ef00865b10611266614232d862a4635b41f0faa880a1b3bbb5cbac4cf7.png",width:"480"}),(0,i.kt)("p",null,"Much thanks to:"),(0,i.kt)("img",{alt:"picture 65",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640631380241-css-howto-9725ea4af91f2d39309b1461fcc48150f84b3f0c534be6116eeae3a9ebdae13b.png",width:"480"}),(0,i.kt)("p",null,"And after knowing this remedy, we can answer another problem based on this technique, refer to: ",(0,i.kt)("a",c({parentName:"p"},{href:"#set-height-to-equal-to-its-sibling"}),"set height to equal to its sibling")),(0,i.kt)("p",null,"ref:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax"}),"Controlling Ratios of Flex Items Along the Main Axis - CSS: Cascading Style Sheets | MDN"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",c({parentName:"p"},{href:"https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size"}),"html - Why don't flex items shrink past content size? - Stack Overflow"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",c({parentName:"p"},{href:"https://stackoverflow.com/questions/38723559/flex-item-exceeds-its-container"}),"css - Flex item exceeds its container - Stack Overflow"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",c({parentName:"p"},{href:"https://stackoverflow.com/questions/2715360/html-css-set-div-to-height-of-sibling"}),"HTML/CSS set div to height of sibling - Stack Overflow")))),(0,i.kt)("h2",c({},{id:"set-height-to-equal-to-its-sibling"}),"set height to equal to its sibling"),(0,i.kt)("p",null,"There may be many techniques to solve this problem."),(0,i.kt)("p",null,"And if you try to search on the stackoverflow, you will get at least methods."),(0,i.kt)("h3",c({},{id:"use-table"}),"use ",(0,i.kt)("inlineCode",{parentName:"h3"},"table")),(0,i.kt)("p",null,"The first one is that you can use a ",(0,i.kt)("inlineCode",{parentName:"p"},"table"),", which is handy to set the dimension of one element to its sibling."),(0,i.kt)("p",null,"However, I didn't research it so much since using ",(0,i.kt)("inlineCode",{parentName:"p"},"table")," element would cause misunderstanding to user and later review, which at the same time is definitely not graceful."),(0,i.kt)("h3",c({},{id:"use-absolute-position"}),"use ",(0,i.kt)("inlineCode",{parentName:"h3"},"absolute position")),(0,i.kt)("p",null,"The second one is to use a ",(0,i.kt)("inlineCode",{parentName:"p"},"relative")," position on father, and use an ",(0,i.kt)("inlineCode",{parentName:"p"},"absolute")," position on which the one element you wanner to dynamically control, supposing its name is B."),(0,i.kt)("p",null,"In this way, the father's dimension is decided by the content of A, the sibling of B."),(0,i.kt)("p",null,"Then, since B is absolute, so that won't affect its father. And we can continue to set B's height or max-height equals to its father, adding with ",(0,i.kt)("inlineCode",{parentName:"p"},"overflow: auto"),"."),(0,i.kt)("p",null,"The biggest disadvantage of this solution is that it's dependent on the ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," layout, which conflicts with the modern ",(0,i.kt)("inlineCode",{parentName:"p"},"flex")," solution."),(0,i.kt)("h3",c({},{id:"use-flex-shrink-with-min-wh-0"}),"use ",(0,i.kt)("inlineCode",{parentName:"h3"},"flex-shrink")," with ",(0,i.kt)("inlineCode",{parentName:"h3"},"min-w/h: 0")),(0,i.kt)("p",null,"The third method I came up with based on ",(0,i.kt)("inlineCode",{parentName:"p"},"flex"),", is to set B's properties as the following:"),(0,i.kt)("p",null,"cppss\nflex-shrink: 1;\nmin-height: 0;"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{}),"\nIf the `flex-shrink` sets to be 0, it means to disable shrink; and otherwise.\n\nHowever, in the flex ecosystem, the default `min-height` is `auto`, which means we can't decrease/shrink one's size downward to its down limitation.\n\nThat's where `min-hight: 0` does its work. More refer to: [shrink flex item to the remaining space](#shrink-flex-item-to-the-remaining-space) .\n\n## text-intent settings\n\n### only first line indent (like chinese  paragraph)\n\ncppss\ntext-intent: 2em;\n")),(0,i.kt)("h3",c({},{id:"start-indent-from-second-line-hanging-indent"}),"start indent from second line (hanging indent)"),(0,i.kt)("p",null,"cppss\ntext-indent: -2em;\nmargin-left: 2em;"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{}),"\n### conclusion\n\nAs a paragraph (i.e. `p` element), the `text-indent` controls the indent to the content of this element, which equals the indent of first line.\n\nAnd if we want to realize the effect of 'a hanging indent', which equals that the indent of first line is negative, and thus to remedy the overflow of first line, we force the entire paragraph move a step to the right. That's where `margin-left` does its work.\n\nref:\n\n- [html - Indent starting from the second line of a paragraph with CSS - Stack Overflow](https://stackoverflow.com/questions/17158253/indent-starting-from-the-second-line-of-a-paragraph-with-css)\n")))}w.isMDXComponent=!0}}]);