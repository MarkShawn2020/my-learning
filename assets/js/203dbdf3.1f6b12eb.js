(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8527],{32501:(n,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>c,default:()=>L,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(87462),r=(t(67294),t(3905)),o=t(93456);const s={},c="slam-research",i={unversionedId:"SLAM/slam-research",id:"version-0.16.0/SLAM/slam-research",title:"slam-research",description:"logic",source:"@site/versioned_docs/version-0.16.0/SLAM/slam-research.md",sourceDirName:"SLAM",slug:"/SLAM/slam-research",permalink:"/docs/0.16.0/SLAM/slam-research",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/SLAM/slam-research.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"A01: \u5bfb\u627e\u5149\u70b9",permalink:"/docs/0.16.0/SLAM/A01-findLights"},next:{title:"slambook2 - ch13",permalink:"/docs/0.16.0/SLAM/slambook2-ch13"}},m={},l=[{value:"logic",id:"logic",level:2}],d={toc:l};function L(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"slam-research"},"slam-research"),(0,r.kt)("h2",{id:"logic"},"logic"),(0,r.kt)(o.Mermaid,{config:{},chart:"flowchart LR\nCameraIntrKnown[\u76f8\u673a\u5185\u53c2\u5df2\u77e5]\n\nLIntrKnown[\u5de6\u624b\u67c4\u5185\u53c2\u5df2\u77e5]\n\nRIntrKnown[\u53f3\u624b\u67c4\u5185\u53c2\u5df2\u77e5]\n\nLDistance(\u5de6\u624b\u67c4\u4e0e\u76f8\u673a\u8ddd\u79bb\u672a\u77e5)\n\nRDistance(\u53f3\u624b\u67c4\u4e0e\u76f8\u673a\u8ddd\u79bb\u672a\u77e5)\n\nsubgraph LCVEstimate[\u4f30\u8ba1\u5de6\u624b\u67c4CV\u5f97\u5230\u7cbe\u7ec6\u7279\u5f81\u70b9]\ndirection TB\nCameraIntrForL[\u76f8\u673a\u5185\u53c2]\nLIntrKnown\nLDistance\nend\n\nsubgraph RCVEstimate[\u4f30\u8ba1\u5de6\u624b\u67c4CV\u5f97\u5230\u7cbe\u7ec6\u7279\u5f81\u70b9]\ndirection TB\nCameraIntrForR[\u76f8\u673a\u5185\u53c2]\nRIntrKnown\nRDistance\nend\n\nCameraIntrKnown --\x3e CameraIntrForL\nCameraIntrKnown --\x3e CameraIntrForR\n\nsubgraph ReliableFeaturesMatch[\u53ef\u9760\u7684\u7279\u5f81\u70b9\u5339\u914d]\nLCVEstimate\nRCVEstimate\nend\n\nsubgraph PNP[\u53ef\u9760\u7684PNP\u89e3\u7b97]\nCameraIntrKnown\nReliableFeaturesMatch\nend\n\nPNP --\x3e LDistanceEstimate[\u5de6\u624b\u67c4\u76f8\u5bf9\u76f8\u673a\u8ddd\u79bb\u4f30\u8ba1]\nPNP --\x3e RDistanceEstimate[\u53f3\u624b\u67c4\u76f8\u5bf9\u76f8\u673a\u8ddd\u79bb\u4f30\u8ba1]\nLDistanceEstimate --\x3e LDistance\nRDistanceEstimate --\x3e RDistance",mdxType:"Mermaid"}),(0,r.kt)(o.Mermaid,{chart:"flowchart\nLImuKnown[\u5de6\u624b\u67c4Imu\u5386\u53f2\u6570\u636e\u5df2\u77e5] --\x3e LRelPoseLocKnown[\u5de6\u624b\u67c4\u76f8\u5bf9\u4e8e\u8d77\u59cb\u65f6\u7684\u4f4d\u7f6e\u4e0e\u59ff\u6001\u53ef\u6c42]\n\nRImuKnown[\u53f3\u624b\u67c4Imu\u5386\u53f2\u6570\u636e\u5df2\u77e5] --\x3e RRelPoseLocKnown[\u53f3\u624b\u67c4\u76f8\u5bf9\u4e8e\u8d77\u59cb\u65f6\u7684\u4f4d\u7f6e\u4e0e\u59ff\u6001\u53ef\u6c42]\n\nHImuKnown[\u773c\u955cImu\u5386\u53f2\u6570\u636e\u5df2\u77e5] --\x3e HRelPoseLocKnown[\u773c\u955c\u76f8\u5bf9\u4e8e\u8d77\u59cb\u65f6\u7684\u4f4d\u7f6e\u4e0e\u59ff\u6001\u53ef\u6c42]\n\nLRelPoseLocKnown  -. \u5f7c\u6b64\u76f8\u5bf9\u4f4d\u7f6e\u4e0d\u53ef\u77e5 .-  RRelPoseLocKnown\nLRelPoseLocKnown  -. \u5f7c\u6b64\u76f8\u5bf9\u4f4d\u7f6e\u4e0d\u53ef\u77e5 .-  HRelPoseLocKnown\nRRelPoseLocKnown  -. \u5f7c\u6b64\u76f8\u5bf9\u4f4d\u7f6e\u4e0d\u53ef\u77e5 .-  HRelPoseLocKnown\n",mdxType:"Mermaid"}))}L.isMDXComponent=!0},11748:(n,e,t)=>{var a={"./locale":89234,"./locale.js":89234};function r(n){var e=o(n);return t(e)}function o(n){if(!t.o(a,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return a[n]}r.keys=function(){return Object.keys(a)},r.resolve=o,n.exports=r,r.id=11748}}]);