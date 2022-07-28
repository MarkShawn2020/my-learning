(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3594],{19498:(a,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>N,default:()=>v,frontMatter:()=>k,metadata:()=>u,toc:()=>g});var r=n(3905),t=n(93456),p=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(a,e,n)=>e in a?p(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,c=(a,e)=>{for(var n in e||(e={}))o.call(e,n)&&d(a,n,e[n]);if(m)for(var n of m(e))l.call(e,n)&&d(a,n,e[n]);return a};const k={},N="arpara vr logic",u={unversionedId:"AndroidFramework/arpara/arpara-vr-logic",id:"AndroidFramework/arpara/arpara-vr-logic",title:"arpara vr logic",description:"anti-distortion: implementation",source:"@site/docs/AndroidFramework/arpara/arpara-vr-logic.md",sourceDirName:"AndroidFramework/arpara",slug:"/AndroidFramework/arpara/arpara-vr-logic",permalink:"/keeps-learning/docs/AndroidFramework/arpara/arpara-vr-logic",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/AndroidFramework/arpara/arpara-vr-logic.md",tags:[],version:"current",lastUpdatedAt:1658966475,formattedLastUpdatedAt:"2022\u5e747\u670828\u65e5",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"adb howto",permalink:"/keeps-learning/docs/AndroidFramework/adb-howto"},next:{title:"\u5357\u5ddd\u6838\u5fc3\u7814\u53d1\u7b14\u8bb0 | VR\u7cfb\u7edf\u539f\u7406\u4e0e\u8bbe\u8ba1\u5b9e\u73b0",permalink:"/keeps-learning/docs/AndroidFramework/arpara/mark_vr-principle-and-implementation"}},h={},g=[{value:"anti-distortion: implementation",id:"anti-distortion-implementation",level:2},{value:"data",id:"data",level:2},{value:"package names",id:"package-names",level:3},{value:"info",id:"info",level:2}],y={toc:g};function v(a){var e,n=a,{components:p}=n,d=((a,e)=>{var n={};for(var r in a)o.call(a,r)&&e.indexOf(r)<0&&(n[r]=a[r]);if(null!=a&&m)for(var r of m(a))e.indexOf(r)<0&&l.call(a,r)&&(n[r]=a[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=c(c({},y),d),s(e,i({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"arpara-vr-logic"}),"arpara vr logic"),(0,r.kt)("h2",c({},{id:"anti-distortion-implementation"}),"anti-distortion: implementation"),(0,r.kt)("p",null,"\u6211\u4eec\u9700\u8981\u751f\u6210\u4e00\u4e2a ",(0,r.kt)("span",c({parentName:"p"},{className:"math math-inline"}),(0,r.kt)("span",c({parentName:"span"},{className:"katex"}),(0,r.kt)("span",c({parentName:"span"},{className:"katex-mathml"}),(0,r.kt)("math",c({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",c({parentName:"mrow"},{stretchy:"false"}),"("),(0,r.kt)("mn",{parentName:"mrow"},"100"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mo",c({parentName:"msup"},{stretchy:"false"}),")"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mn",{parentName:"mrow"},"2")),(0,r.kt)("annotation",c({parentName:"semantics"},{encoding:"application/x-tex"}),"(100+1)^2*2")))),(0,r.kt)("span",c({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,r.kt)("span",c({parentName:"span"},{className:"base"}),(0,r.kt)("span",c({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),(0,r.kt)("span",c({parentName:"span"},{className:"mopen"}),"("),(0,r.kt)("span",c({parentName:"span"},{className:"mord"}),"100"),(0,r.kt)("span",c({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",c({parentName:"span"},{className:"mbin"}),"+"),(0,r.kt)("span",c({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222em"}}))),(0,r.kt)("span",c({parentName:"span"},{className:"base"}),(0,r.kt)("span",c({parentName:"span"},{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}})),(0,r.kt)("span",c({parentName:"span"},{className:"mord"}),"1"),(0,r.kt)("span",c({parentName:"span"},{className:"mclose"}),(0,r.kt)("span",c({parentName:"span"},{className:"mclose"}),")"),(0,r.kt)("span",c({parentName:"span"},{className:"msupsub"}),(0,r.kt)("span",c({parentName:"span"},{className:"vlist-t"}),(0,r.kt)("span",c({parentName:"span"},{className:"vlist-r"}),(0,r.kt)("span",c({parentName:"span"},{className:"vlist",style:{height:"0.8141em"}}),(0,r.kt)("span",c({parentName:"span"},{style:{top:"-3.063em",marginRight:"0.05em"}}),(0,r.kt)("span",c({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),(0,r.kt)("span",c({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),(0,r.kt)("span",c({parentName:"span"},{className:"mord mtight"}),"2")))))))),(0,r.kt)("span",c({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",c({parentName:"span"},{className:"mbin"}),"\u2217"),(0,r.kt)("span",c({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222em"}}))),(0,r.kt)("span",c({parentName:"span"},{className:"base"}),(0,r.kt)("span",c({parentName:"span"},{className:"strut",style:{height:"0.6444em"}})),(0,r.kt)("span",c({parentName:"span"},{className:"mord"}),"2")))))," \u7684mesh\u7f51\uff0c\u8fd9\u7531\u6211\u53f8\u5185\u90e8\u751f\u6210\uff0c\u6587\u4ef6\u5206\u522b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"HmdTypeXXXDistortionMesh.*"),"\n\uff0c\u76ee\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"XXX=8"),"\u3002"),(0,r.kt)("p",null,"\u751f\u6210\u7b97\u6cd5\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"opengl")," \u4e09\u89d2\u578b\u7ed8\u5236\u539f\u7406\u6709\u5173\uff0c\u5e76\u4e14\u9700\u8981\u7efc\u5408\u773c\u955c\u7126\u8ddd\u3001\u5206\u8fa8\u7387\u7b49\u8fdb\u884c\u8c03\u6574\uff0c\u6b64\u5904\u4e0d\u5c55\u5f00\u3002"),(0,r.kt)("p",null,"\u6838\u5fc3\u95ee\u9898\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"mesh"),"\u7684\u521d\u59cb\u5316\u4f4d\u7f6e\u4e0e\u5b9e\u73b0\u3002"),(0,r.kt)("img",{alt:"picture 50",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/arpara-vr-logic-1645799660292-b30748482118e3c0214c2f314d65d241d5dc18a6ed7ba08a488601511d77b73d.png"}),(0,r.kt)("p",null,"\u68c0\u7d22\u53ef\u77e5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"AOSP")," \u5185\u90e8\u53ea\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"GLESRenderEngine.cpp"),"\u7684\u4e09\u4e2a\u51fd\u6570\u5185\u90e8\u521d\u59cb\u5316\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"mesh"),"\n,\u5206\u522b\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"fillRegionWithColor | drawLayers | handleShadow"),"\n\uff0c\u8fd9\u4e09\u8005\u5728\u4e1a\u52a1\u4e0a\u5e76\u975e\u9009\u62e9\u5173\u7cfb\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5904\u7406 ",(0,r.kt)("inlineCode",{parentName:"p"},"drawLayers"),"\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"drawLayers")," \u51fd\u6570\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh"),"\n\u7684\u6784\u5efa\u53c2\u6570\u4e0e\u6211\u4eec\u7684\u4e0d\u540c\uff0c\u6700\u4e3b\u8981\u7684\u5dee\u5f02\u662f\u4f53\u73b0\u5728\u9876\u70b9\u7684\u4e2a\u6570\u4e0a\uff0cAOSP\u53ea\u9700\u8981\u5904\u74064\u4e2a\u9876\u70b9\uff0c\u4f46\u6211\u4eec\u7684\u53cd\u7578\u53d8\u5728\u6548\u679c\u4e0a\u5219\u9700\u8981\u8d8a\u591a\u8d8a\u597d\uff0c\u56e0\u6b64\u4e0d\u53ef\u5171\u7528\u540c\u4e00\u4e2amesh\u3002\u6211\u4eec\u7b2c\u4e00\u7248\u4fee\u6539\u5982\u4e0b\uff1a"),(0,r.kt)("img",{alt:"picture 51",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/arpara-vr-logic-1645799848783-1be7214a86835bb5d9aa49d083caacc2363ed48546d1366a3bd356919c45bdd3.png"}),(0,r.kt)("p",null,"\u4f46\u8be5\u8bbe\u8ba1\u5b58\u5728\u95ee\u9898\uff0c\u6309\u7167\u73b0\u5728\u7684\u9700\u6c42\uff0c\u6211\u4eec\u53ea\u5e94\u5728\u68c0\u6d4b\u5230 Arpara \u7684 app\n\u5728\u8fd0\u884c\u65f6\u624d\u9700\u8981\u542f\u7528\uff0c\u66f4\u51c6\u786e\u5730\u8bf4\uff0c\u662f\u5728\u68c0\u6d4b\u5230\u67d0\u4e2alayer\u662f\u5728\u6e32\u67d3arpara\u7684app\u65f6\u624d\u8981\u542f\u7528\u53cd\u7578\u53d8\uff0c\u4ee5\u6392\u9664\u7cfb\u7edf\u5f39\u7a97\u8fd9\u79cd\u4e0d\u80fd\u542f\u7528\u53cd\u7578\u53d8\u7684\u573a\u666f\uff0c\u5426\u5219\u5c06\u9020\u6210\u5206\u88c2\uff08\u667a\u59d4\uff09\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\u6211\u4eec\u7684\u53cd\u7578\u53d8\u63a7\u5236\u903b\u8f91\u9700\u8981\u8fdb\u4e00\u6b65\u7cbe\u7ec6\u5230\u6bcf\u4e2a layer \u5c42\u9762\u3002"),(0,r.kt)("p",null,"\u8fd9\u65f6\uff0c\u5982\u679c\u6211\u4eec\u76f4\u63a5\u628a mesh\n\u521d\u59cb\u5316\u4e0b\u79fb\uff0c\u9884\u671f\u4f1a\u5927\u5e45\u964d\u4f4e\u6027\u80fd\uff0c\u56e0\u4e3a\u6bcf\u6b21\u7ed8\u56fe\u65f6\uff0c\u904d\u5386layer\uff0c\u7136\u540e\u5206\u522b\u521d\u59cb\u5316\u6bcf\u4e2amesh\u3002\u7406\u8bba\u4e0a\uff0cAOSP\u53ef\u4ee5\u76f4\u63a5\u628amesh\u5199\u6210\u9759\u6001\u53d8\u91cf\uff0c\u4f46\u4ed6\u4eec\u6ca1\u6709\uff0c\u800c\u662f\u5199\u5728\u4e86\u51fd\u6570\u7684\u5185\u90e8\uff0c\u8fd9\u4e5f\u8bb8\u662f\u51fa\u4e8e\u540e\u7eed\u8fd8\u8981\u8fdb\u884c\u88c1\u526a\u7b49\u5904\u7406\u6216\u9632\u6b62\u6cc4\u9732\u7b49\u539f\u56e0\u3002"),(0,r.kt)("p",null,"\u8003\u8651\u5230\u6211\u4eec\u7684mesh\u7684\u9876\u70b9\u3001\u5c3a\u5bf8",(0,r.kt)("inlineCode",{parentName:"p"},"3840*1920"),"\n\u7b49\u90fd\u662f\u56fa\u5b9a\u7684\uff0c\u7406\u8bba\u4e0a\u6211\u4eec\u53ef\u4ee5\u9759\u6001\u5199\u6b7b\u53cd\u7578\u53d8mesh\u7684\u4e00\u5207\u5c5e\u6027\uff0c\u4f46\u7531\u4e8e\u6761\u4ef6\u9650\u5236\u6211\u7684\u5f00\u53d1\u73af\u5883\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"1920*1080"),"\u4ea6\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"1280*720"),"\n\uff0c\u56e0\u6b64\u6bd4\u8f83\u5408\u9002\u7684\u662f\uff0c\u81f3\u5c11\u5c3a\u5bf8\u8fd9\u5757\u8fd8\u662f\u57fa\u4e8elayer\u7684\u5b9e\u9645\u5927\u5c0f\u6765\u91cd\u65b0\u8bbe\u5b9a\u3002"),(0,r.kt)("p",null,"\u4e5f\u5c31\u662f\uff0c\u6700\u5408\u9002\u7684\u529e\u6cd5\uff0c\u9759\u6001\u521d\u59cb\u5316\u4e00\u4e2a\u53cd\u7578\u53d8mesh\uff0c\u7136\u540e\u5728\u904d\u5386layer\u65f6\uff0c\u9700\u8981\u8be5layer\u6b63\u5728\u6e32\u67d3arpara\u7684app\uff0c\u5219\u57fa\u4e8e\u8fd9\u4e2alayer\u91cd\u65b0\u8c03\u6574\u5c3a\u5bf8\uff0c\u5e76\u91c7\u7528\u6211\u4eec\u7684mesh\u8fdb\u884c\u6e32\u67d3\u3002"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u4f46\u8fd9\u91cc\u6709\u4e2a\u95ee\u9898\uff1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"drawLayers")," \u4e2d\u904d\u5386\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"layer")," \u5e76\u975e ",(0,r.kt)("inlineCode",{parentName:"p"},"class Layer")," \u800c\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"class LayerSettings*"),"\n\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"LayerSettings"),"\u4e2d\u9ed8\u8ba4\u662f\u6ca1\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"activity name"),"\u7684\u76f8\u5173\u4fe1\u606f\u7684\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5b9a\u5236\u3002"),(0,r.kt)("hr",null),(0,r.kt)(t.Mermaid,{config:{},chart:'flowchart TD;\n\nsubgraph logics\ndirection TB\n\n    Layer::isArparaVrEnv["logic of Layer::isArparaVrEnv:\nThe activity name of layer\nincludes one of the following:\n1. \'com.XR.LeadingIdeal\' for release\n2.\'com.arpara.vr.sample\' for debug"]\n\n    --\x3e \n    isTimewarpEnabled["logic of ProgramCache::isArparaTimewarpEnabled:\n`(mKey & ARPARA_MASK) == ARPARA_ON`"]\nend\n\nsubgraph initLayer[Layer::Layer]\n    initArparaVrEnv[const mArparaVrEnv = Layer::isArparaVrEnv]\nend\n\nsubgraph prepareFrame[Layer::preparePerFrameCompositionState]\nforceClient[compositionState->forceClientComposition = mArparaVrEnv]\nend\n\nsubgraph prepareClientComposition[Layer::prepareClientComposition]\nsettingLayer[layerSettings.mArparaVrEnv = mArparaVrEnv]\nend\n\nsubgraph drawLayers[GLESRenderEngine::drawLayers]\ndirection TB\n    subgraph traverseLayers\n    direction TB\n        layerSettings.mArparaVrEnv -- YES --\x3e arparaVr\n    end\nend\n\nsubgraph arparaVr[ARPARA VR SYSTEM]\ndirection TB\n    antiDistortion & timewarp \nend\n\nsubgraph antiDistortion[ARPARA AntiDistortion]\ndirection TB\n    buildArparaMesh\n    --\x3e initArparaPosition\n    --\x3e initArparaTexCoords\n    --\x3e drawMesh\nend\n\n\nsubgraph timewarp[ARPARA Timewarp]\ndirection TB\n\n    subgraph inputPoses[generate poses]\n        hmdService[["hmdService\n(stable only)"]] & mockQuaternion["mockQuaternion\n(`persist.mock.arpara.timewarp`)"]\n        --\x3e poses[renderPose + presentPose]\n    end\n\n\n    poses\n    --\x3e setTimewarpMatrix["mState.arparaTimewarpMatrix =\n calculateTimewarpMatrix\n(renderPose, presentPose)"]\n    --\x3e setUniform["Program::setUniforms(mState.arparaTimewarpMatrix)"]\n    --\x3e generateVertexShader["ProgramCache::generateVertexShader(ARPARA_SHADER)"]\n\n    enableTimewarp["mState.arparaTimewarpEnable \n= mArparaVrEnv"]\n    --\x3e calculateNeeds["ProgramCache::computeKey\n(mState.arparaTimewarpEnable)"]\n    -- Key::ARPARA_ON --\x3e setUniform\nend\n\nsubgraph Layer\n    initLayer \n    -- decide forceClient --\x3e prepareFrame \n    -- carry ARPARA info --\x3e prepareClientComposition\nend\n\nLayer --\x3e drawLayers',mdxType:"Mermaid"}),(0,r.kt)("h2",c({},{id:"data"}),"data"),(0,r.kt)("h3",c({},{id:"package-names"}),"package names"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"release:  ",(0,r.kt)("inlineCode",{parentName:"li"},"com.XR.LeadingIdeal")),(0,r.kt)("li",{parentName:"ul"},"debug:    ",(0,r.kt)("inlineCode",{parentName:"li"},"com.arpara.vr.sample")),(0,r.kt)("li",{parentName:"ul"},"debug:    ",(0,r.kt)("inlineCode",{parentName:"li"},"com.arpara.arparahome"))),(0,r.kt)("h2",c({},{id:"info"}),"info"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"version: 0.0.1"),(0,r.kt)("li",{parentName:"ul"},"date: 2022-02-25"),(0,r.kt)("li",{parentName:"ul"},"author: \u5357\u5ddd")))}v.isMDXComponent=!0},11748:(a,e,n)=>{var r={"./locale":89234,"./locale.js":89234};function t(a){var e=p(a);return n(e)}function p(a){if(!n.o(r,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return r[a]}t.keys=function(){return Object.keys(r)},t.resolve=p,a.exports=t,t.id=11748}}]);