(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[168],{52784:(e,r,n)=>{"use strict";n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>u,default:()=>A,frontMatter:()=>m,metadata:()=>g,toc:()=>k});var o=n(3905),a=n(93456),s=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,r,n)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,f=(e,r)=>{for(var n in r||(r={}))p.call(r,n)&&l(e,n,r[n]);if(d)for(var n of d(r))c.call(r,n)&&l(e,n,r[n]);return e};const m={},u="arpara distortion logic",g={unversionedId:"AndroidFramework/AOSP/TaskA4-sf-research/arpara-distortion-logic",id:"AndroidFramework/AOSP/TaskA4-sf-research/arpara-distortion-logic",title:"arpara distortion logic",description:"",source:"@site/docs/AndroidFramework/AOSP/TaskA4-sf-research/arpara-distortion-logic.md",sourceDirName:"AndroidFramework/AOSP/TaskA4-sf-research",slug:"/AndroidFramework/AOSP/TaskA4-sf-research/arpara-distortion-logic",permalink:"/keeps-learning/docs/AndroidFramework/AOSP/TaskA4-sf-research/arpara-distortion-logic",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/AndroidFramework/AOSP/TaskA4-sf-research/arpara-distortion-logic.md",tags:[],version:"current",lastUpdatedAt:1658911274,formattedLastUpdatedAt:"2022\u5e747\u670827\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"aosp changes",permalink:"/keeps-learning/docs/AndroidFramework/AOSP/TaskA3-aosp-changes/aosp-changes"},next:{title:"surfaceflinger display research",permalink:"/keeps-learning/docs/AndroidFramework/AOSP/TaskA4-sf-research/sf-howto"}},h={},k=[],b={toc:k};function A(e){var r,n=e,{components:s}=n,l=((e,r)=>{var n={};for(var o in e)p.call(e,o)&&r.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&d)for(var o of d(e))r.indexOf(o)<0&&c.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(r=f(f({},b),l),t(r,i({components:s,mdxType:"MDXLayout"}))),(0,o.kt)("h1",f({},{id:"arpara-distortion-logic"}),"arpara distortion logic"),(0,o.kt)(a.Mermaid,{config:{},chart:"flowchart TD\n\n\n\nsubgraph doComposition[step4. doComposition]\n    direction TB\n\n    subgraph doDisplayComposition[repaint-framebuffer]\n        direction TB\n\n        r[return]\n        doComposerSurface{doComposerSurface} --\x3e |NO| r\n        doComposerSurface --\x3e |YES| swapBuffer[swapBuffer of presentation] --\x3e r\n    end\n\n    displayStateEnabled{displayStateEnabled}\n    --\x3e |YES| doDisplayComposition\n    --\x3e clearAndFlip[swap framebuffer]\nend\n\n\nsubgraph doDebugFlashRegions[step3. doDebugFlashRegions:2000]\n    direction TB\n\n    needDoComposerSurface{displayStateEnabled +<br> dirtyRegionNotEmpty}\n    --\x3e |YES| doComposerSurface.FlashRegions\n    --\x3e renderEngine.queueBuffer\n    --\x3e postFrameBuffer\n\n    needDoComposerSurface --\x3e |NO| postFrameBuffer\n    --\x3e prepareFrame\nend\n\nsubgraph for:displays\n    direction TB\n\n    beginFrame[step1. beginFrame]\n    --\x3e prepareFrame.Refresh[step2. prepareFrame]\n    --\x3e doDebugFlashRegions\n    --\x3e doComposition\nend\n\nsubgraph handleMessageRefresh\n    direction TB\n\n    preComposition \n    --\x3e rebuildLayerStacks \n    --\x3e calculateWorkingSet \n    --\x3e for:displays\n    --\x3e logLayerStates\n    --\x3e postFrame\n    --\x3e postComposition\n    --\x3e vsync.onRefreshed\n    --\x3e queueFrames.clear\n\nend\n",mdxType:"Mermaid"}))}A.isMDXComponent=!0},11748:(e,r,n)=>{var o={"./locale":89234,"./locale.js":89234};function a(e){var r=s(e);return n(r)}function s(e){if(!n.o(o,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=s,e.exports=a,a.id=11748}}]);