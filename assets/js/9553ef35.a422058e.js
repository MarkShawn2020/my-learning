(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4625],{65144:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>L,default:()=>R,frontMatter:()=>p,metadata:()=>w,toc:()=>h});var r=t(3905),a=t(93456),o=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&d(e,t,n[t]);if(c)for(var t of c(n))m.call(n,t)&&d(e,t,n[t]);return e};const p={},L=void 0,w={unversionedId:"SLAM/slam-research",id:"SLAM/slam-research",title:"slam-research",description:"logic",source:"@site/docs/SLAM/slam-research.md",sourceDirName:"SLAM",slug:"/SLAM/slam-research",permalink:"/keeps-learning/docs/SLAM/slam-research",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/SLAM/slam-research.md",tags:[],version:"current",lastUpdatedAt:1658966475,formattedLastUpdatedAt:"2022\u5e747\u670828\u65e5",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"A01: recognize lights",permalink:"/keeps-learning/docs/SLAM/A01-recognizeLights"},next:{title:"slambook2-ch13",permalink:"/keeps-learning/docs/SLAM/slambook2-ch13"}},f={},h=[{value:"logic",id:"logic",level:2}],b={toc:h};function R(e){var n,t=e,{components:o}=t,d=((e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&m.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=u(u({},b),d),s(n,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h2",u({},{id:"logic"}),"logic"),(0,r.kt)(a.Mermaid,{config:{},chart:"flowchart LR\nCameraIntrKnown[\u76f8\u673a\u5185\u53c2\u5df2\u77e5]\n\nLIntrKnown[\u5de6\u624b\u67c4\u5185\u53c2\u5df2\u77e5]\n\nRIntrKnown[\u53f3\u624b\u67c4\u5185\u53c2\u5df2\u77e5]\n\nLDistance(\u5de6\u624b\u67c4\u4e0e\u76f8\u673a\u8ddd\u79bb\u672a\u77e5)\n\nRDistance(\u53f3\u624b\u67c4\u4e0e\u76f8\u673a\u8ddd\u79bb\u672a\u77e5)\n\nsubgraph LCVEstimate[\u4f30\u8ba1\u5de6\u624b\u67c4CV\u5f97\u5230\u7cbe\u7ec6\u7279\u5f81\u70b9]\ndirection TB\nCameraIntrForL[\u76f8\u673a\u5185\u53c2]\nLIntrKnown\nLDistance\nend\n\nsubgraph RCVEstimate[\u4f30\u8ba1\u5de6\u624b\u67c4CV\u5f97\u5230\u7cbe\u7ec6\u7279\u5f81\u70b9]\ndirection TB\nCameraIntrForR[\u76f8\u673a\u5185\u53c2]\nRIntrKnown\nRDistance\nend\n\nCameraIntrKnown --\x3e CameraIntrForL\nCameraIntrKnown --\x3e CameraIntrForR\n\nsubgraph ReliableFeaturesMatch[\u53ef\u9760\u7684\u7279\u5f81\u70b9\u5339\u914d]\nLCVEstimate\nRCVEstimate\nend\n\nsubgraph PNP[\u53ef\u9760\u7684PNP\u89e3\u7b97]\nCameraIntrKnown\nReliableFeaturesMatch\nend\n\nPNP --\x3e LDistanceEstimate[\u5de6\u624b\u67c4\u76f8\u5bf9\u76f8\u673a\u8ddd\u79bb\u4f30\u8ba1]\nPNP --\x3e RDistanceEstimate[\u53f3\u624b\u67c4\u76f8\u5bf9\u76f8\u673a\u8ddd\u79bb\u4f30\u8ba1]\nLDistanceEstimate --\x3e LDistance\nRDistanceEstimate --\x3e RDistance",mdxType:"Mermaid"}),(0,r.kt)(a.Mermaid,{chart:"flowchart\nLImuKnown[\u5de6\u624b\u67c4Imu\u5386\u53f2\u6570\u636e\u5df2\u77e5] --\x3e LRelPoseLocKnown[\u5de6\u624b\u67c4\u76f8\u5bf9\u4e8e\u8d77\u59cb\u65f6\u7684\u4f4d\u7f6e\u4e0e\u59ff\u6001\u53ef\u6c42]\n\nRImuKnown[\u53f3\u624b\u67c4Imu\u5386\u53f2\u6570\u636e\u5df2\u77e5] --\x3e RRelPoseLocKnown[\u53f3\u624b\u67c4\u76f8\u5bf9\u4e8e\u8d77\u59cb\u65f6\u7684\u4f4d\u7f6e\u4e0e\u59ff\u6001\u53ef\u6c42]\n\nHImuKnown[\u773c\u955cImu\u5386\u53f2\u6570\u636e\u5df2\u77e5] --\x3e HRelPoseLocKnown[\u773c\u955c\u76f8\u5bf9\u4e8e\u8d77\u59cb\u65f6\u7684\u4f4d\u7f6e\u4e0e\u59ff\u6001\u53ef\u6c42]\n\nLRelPoseLocKnown  -. \u5f7c\u6b64\u76f8\u5bf9\u4f4d\u7f6e\u4e0d\u53ef\u77e5 .-  RRelPoseLocKnown\nLRelPoseLocKnown  -. \u5f7c\u6b64\u76f8\u5bf9\u4f4d\u7f6e\u4e0d\u53ef\u77e5 .-  HRelPoseLocKnown\nRRelPoseLocKnown  -. \u5f7c\u6b64\u76f8\u5bf9\u4f4d\u7f6e\u4e0d\u53ef\u77e5 .-  HRelPoseLocKnown\n",mdxType:"Mermaid"}))}R.isMDXComponent=!0},11748:(e,n,t)=>{var r={"./locale":89234,"./locale.js":89234};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=11748}}]);