"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[121],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),l=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),d=a,m=c["".concat(i,".").concat(d)]||c[d]||g[d]||o;return r?t.createElement(m,p(p({ref:n},u),{},{components:r})):t.createElement(m,p({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:a,p[1]=s;for(var l=2;l<o;l++)p[l]=r[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4105:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(7462),a=(r(7294),r(3905));const o={title:"Running a Proxy for Angular",slug:"/runningAProxyForAngular"},p=void 0,s={unversionedId:"Homeserver/NET Core and Angular/RunningAProxyForAngular",id:"Homeserver/NET Core and Angular/RunningAProxyForAngular",title:"Running a Proxy for Angular",description:"Seperate Proxy Service",source:"@site/docs/Homeserver/NET Core and Angular/RunningAProxyForAngular.md",sourceDirName:"Homeserver/NET Core and Angular",slug:"/runningAProxyForAngular",permalink:"/runningAProxyForAngular",draft:!1,tags:[],version:"current",frontMatter:{title:"Running a Proxy for Angular",slug:"/runningAProxyForAngular"},sidebar:"tutorialSidebar",previous:{title:"JSON Convert",permalink:"/jsonConvert"},next:{title:"TrueNAS Scale",permalink:"/trueNasScale"}},i={},l=[{value:"Seperate Proxy Service",id:"seperate-proxy-service",level:2},{value:"Proxy-Service",id:"proxy-service",level:3},{value:"Angular App",id:"angular-app",level:3},{value:"Proxy in Angular:",id:"proxy-in-angular",level:2}],u={toc:l},c="wrapper";function g(e){let{components:n,...r}=e;return(0,a.kt)(c,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"seperate-proxy-service"},"Seperate Proxy Service"),(0,a.kt)("p",null,"Way to go!"),(0,a.kt)("p",null,"Mit diesem Proxy wird erm\xf6glicht, dass Backends angesprochen werden k\xf6nnen, welche nicht von einem selbst sind. Diese werfen oft den CORS Fehler. Dieser Fehler tritt aber nur auf, wenn Browser versuchen auf diese APIs zuzugreiffen. Mit diesem Proxy zwischen Frontend und der externen API tritt das Problem nicht mehr auf, da nun der Proxy (als Backend) auf die externe API zugreift."),(0,a.kt)("h3",{id:"proxy-service"},"Proxy-Service"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"server.js"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// @ts-check\n// Doku: https://github.com/chimurai/http-proxy-middleware/tree/v2.0.4#intercept-and-manipulate-requests\n\nconst express = require("express");\nconst { createProxyMiddleware } = require("http-proxy-middleware");\nvar cors = require("cors");\n\nconst morgan = require("morgan");\nconst app = express();\n\napp.use(\n\xa0 cors({\n\xa0 \xa0 origin: "*",\n\xa0 })\n);\n\nconst serveProxy = createProxyMiddleware({\n\xa0 target: "https://api.clashofclans.com/v1/",\n\xa0 onProxyReq: (proxyReq, req, res) => {\n\xa0 \xa0 proxyReq.removeHeader("Origin");\n\xa0 },\n\xa0 secure: false,\n\xa0 logLevel: "debug",\n\xa0 pathRewrite: {\n\xa0 \xa0 "^/api": "",\n\xa0 },\n});\n\n// Logging\napp.use(morgan("dev"));\n\napp.use("/api/*", serveProxy);\napp.listen(3000);\n// proxy and change the base path from "/api" to "/secret"\n// http://127.0.0.1:3000/api/foo/bar -> http://www.example.org/secret/foo/bar\n')),(0,a.kt)("p",null,"Wichtig war in dem Beispiel von CoC, dass der Header (Origin) entfernt wird."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"package.json"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Json"},'{\n\xa0 "name": "proxy",\n\xa0 "version": "1.0.0",\n\xa0 "description": "",\n\xa0 "main": "index.js",\n\xa0 "scripts": {\n\xa0 \xa0 "start": "node server.js"\n\xa0 },\n\xa0 "author": "",\n\xa0 "license": "ISC",\n\xa0 "dependencies": {\n\xa0 \xa0 "cors": "^2.8.5",\n\xa0 \xa0 "express": "^4.18.2",\n\xa0 \xa0 "http-proxy-middleware": "^2.0.6",\n\xa0 \xa0 "morgan": "^1.10.0"\n\xa0 }\n}\n')),(0,a.kt)("p",null,"Starten des Proxy-Service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")),(0,a.kt)("h3",{id:"angular-app"},"Angular App"),(0,a.kt)("p",null,"Von der Angular Applikation kann folgenderma\xdfen auf den Proxy zugegriffen werden:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"environment.ts"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const environment = {\n\xa0 production: false,\n\xa0 //apiHostname: 'api',\n\xa0 apiHostname: 'http://localhost:3000/api',\n};\n")),(0,a.kt)("h2",{id:"proxy-in-angular"},"Proxy in Angular:"),(0,a.kt)("p",null,"creating a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"proxy.conf.json"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "/api/*": {\n       "target": "https://api.clashofclans.com/v1/",\n        "secure": false,\n        "changeOrigin": true,\n        "logLevel": "debug",\n        "pathRewrite": {\n             "^/api": ""\n        }\n\xa0 }\n}\n')),(0,a.kt)("p",null,"The start scipt needs a additional parameter."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"package.json"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Json"},'"scripts": {\n\xa0 \xa0 "ng": "ng",\n\xa0 \xa0 "start": "ng serve --proxy-config proxy.conf.json",\n\xa0 }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"environment.ts"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export const environment = {\n  production: false,\n  apiHostname: 'api',\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"angular.json"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"serve": {\n\xa0 \xa0 \xa0 \xa0 \xa0 "builder": "@angular-devkit/build-angular:dev-server",\n\xa0 \xa0 \xa0 \xa0 \xa0 "options": {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 "browserTarget": "dmz:build",\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 "proxyConfig": "src/proxy.conf.json"\n\xa0 \xa0 \xa0 \xa0 \xa0 },\n')))}g.isMDXComponent=!0}}]);