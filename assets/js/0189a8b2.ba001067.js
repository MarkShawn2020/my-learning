"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),g=o,m=f["".concat(c,".").concat(g)]||f[g]||s[g]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},55636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>g,default:()=>b,frontMatter:()=>f,metadata:()=>m,toc:()=>h});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&p(e,n,t[n]);return e};const f={},g="nginx-howto",m={unversionedId:"Softwares/nginx/nginx-howto",id:"Softwares/nginx/nginx-howto",title:"nginx-howto",description:"nginx config file",source:"@site/docs/Softwares/nginx/nginx-howto.md",sourceDirName:"Softwares/nginx",slug:"/Softwares/nginx/nginx-howto",permalink:"/keeps-learning/docs/Softwares/nginx/nginx-howto",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/Softwares/nginx/nginx-howto.md",tags:[],version:"current",lastUpdatedAt:1658966475,formattedLastUpdatedAt:"2022\u5e747\u670828\u65e5",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"mongodb-howto",permalink:"/keeps-learning/docs/Softwares/mongodb/mongodb-howto"},next:{title:"TODO-closed",permalink:"/keeps-learning/docs/TODO-closed"}},d={},h=[{value:"nginx config file",id:"nginx-config-file",level:2},{value:"how to install and configure nginx on Ubuntu",id:"how-to-install-and-configure-nginx-on-ubuntu",level:2},{value:"configure for fastapi",id:"configure-for-fastapi",level:2},{value:"configure for react, so the react app lies on the domain",id:"configure-for-react-so-the-react-app-lies-on-the-domain",level:2},{value:"break through the default max size limit (1m)",id:"break-through-the-default-max-size-limit-1m",level:2}],w={toc:h};function b(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},w),p),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"nginx-howto"}),"nginx-howto"),(0,r.kt)("h2",s({},{id:"nginx-config-file"}),"nginx config file"),(0,r.kt)("p",null,"reference:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.nginx.com/resources/wiki/start/topics/examples/full/"}),"Full Example Configuration | NGINX"))),(0,r.kt)("h2",s({},{id:"how-to-install-and-configure-nginx-on-ubuntu"}),"how to install and configure nginx on Ubuntu"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04"}),"How To Install Nginx on Ubuntu 18.04 | DigitalOcean"))),(0,r.kt)("h2",s({},{id:"configure-for-fastapi"}),"configure for fastapi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://dev.to/shuv1824/deploy-fastapi-application-on-ubuntu-with-nginx-gunicorn-and-uvicorn-3mbl"}),"Deploy FastAPI Application on Ubuntu with Nginx, Gunicorn and Uvicorn - DEV Community"))),(0,r.kt)("h2",s({},{id:"configure-for-react-so-the-react-app-lies-on-the-domain"}),"configure for react, so the react app lies on the domain"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/how-to-deploy-a-react-application-with-nginx-on-ubuntu-20-04"}),"How To Deploy a React Application with Nginx on Ubuntu 20.04 | DigitalOcean"))),(0,r.kt)("h2",s({},{id:"break-through-the-default-max-size-limit-1m"}),"break through the default max size limit (1m)"),(0,r.kt)("p",null,"add this line in ",(0,r.kt)("inlineCode",{parentName:"p"},"http"),", be cautious if you occur problem because nested application."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-text"}),"; nginx.conf\nclient_max_body_size 200m;\n")),(0,r.kt)("p",null,"reference:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",s({parentName:"p"},{href:"https://blog.csdn.net/fdipzone/article/details/45544497"}),"(20\u6761\u6d88\u606f) nginx \u51fa\u73b0413 Request Entity Too Large\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6cd5_\u50b2\u96ea\u661f\u67ab-CSDN\u535a\u5ba2_large"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",s({parentName:"p"},{href:"https://stackoverflow.com/questions/43643829/nginx-emerg-http-directive-is-not-allowed-here-in-etc-nginx-sites-enabled"}),'nginx: [emerg] "http" directive is not allowed here in /etc/nginx/sites-enabled/default:1 - Stack Overflow')))))}b.isMDXComponent=!0}}]);