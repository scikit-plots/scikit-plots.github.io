var _JUPYTERLAB;(()=>{"use strict";var e,r,t,a,n,o,i,l,u,d,f,s,c,p,b,h,m,v,g,y,j,w,S={6167:(e,r,t)=>{var a={"./index":()=>Promise.all([t.e(426),t.e(324)]).then((()=>()=>t(4324))),"./extension":()=>Promise.all([t.e(426),t.e(324)]).then((()=>()=>t(4324))),"./style":()=>t.e(971).then((()=>()=>t(3971)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",n=t.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>n,init:()=>o})}},k={};function E(e){var r=k[e];if(void 0!==r)return r.exports;var t=k[e]={id:e,exports:{}};return S[e].call(t.exports,t,t.exports,E),t.exports}E.m=S,E.c=k,E.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return E.d(r,{a:r}),r},E.d=(e,r)=>{for(var t in r)E.o(r,t)&&!E.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},E.f={},E.e=e=>Promise.all(Object.keys(E.f).reduce(((r,t)=>(E.f[t](e,r),r)),[])),E.u=e=>e+"."+{204:"3786a529841b519e5d5d",324:"0cfa28d7690db13a18b6",426:"bddb0c2da3cfe0585528",513:"2a37cfe0725cbaac9a70",798:"1ee0daafeb0a138cb174",971:"472368f83dff20e4fce9"}[e]+".js?v="+{204:"3786a529841b519e5d5d",324:"0cfa28d7690db13a18b6",426:"bddb0c2da3cfe0585528",513:"2a37cfe0725cbaac9a70",798:"1ee0daafeb0a138cb174",971:"472368f83dff20e4fce9"}[e],E.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),E.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="nbdime-jupyterlab:",E.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var i,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var f=u[d];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+n){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,E.nc&&i.setAttribute("nonce",E.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[a];var s=(r,a)=>{i.onerror=i.onload=null,clearTimeout(c);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),l&&document.head.appendChild(i)}},E.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{E.S={};var e={},r={};E.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];E.o(E.S,t)||(E.S[t]={});var o=E.S[t],i="nbdime-jupyterlab",l=[];return"default"===t&&((e,r,t,a)=>{var n=o[e]=o[e]||{},l=n[r];(!l||!l.loaded&&(1!=!l.eager?a:i>l.from))&&(n[r]={get:()=>Promise.all([E.e(426),E.e(324)]).then((()=>()=>E(4324))),from:i,eager:!1})})("nbdime-jupyterlab","3.0.1"),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;E.g.importScripts&&(e=E.g.location+"");var r=E.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!e;)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),E.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(l=e[o]))[0]?"-":(a>0?".":"")+(a=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():n(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var i=0,l=1,u=!0;;l++,i++){var d,f,s=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(f=(typeof(d=r[i]))[0]))return!u||("u"==s?l>a&&!n:""==s!=n);if("u"==f){if(!u||"u"!=s)return!1}else if(u)if(s==f)if(l<=a){if(d!=e[l])return!1}else{if(n?d>e[l]:d<e[l])return!1;d!=e[l]&&(u=!1)}else if("s"!=s&&"n"!=s){if(n||l<=a)return!1;u=!1,l--}else{if(l<=a||f<s!=n)return!1;u=!1}else"s"!=s&&"n"!=s&&(u=!1,l--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var b=e[i];c.push(1==b?p()|p():2==b?p()&p():b?o(b,r):!p())}return!!p()},i=(e,r)=>{var t=E.S[e];if(!t||!E.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},l=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||a(e,r)?r:e),0))&&t[r]},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},d=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(a)+")",f=(e,r,t,a)=>{var n=u(e,t);return o(a,n)||p(d(e,t,n,a)),h(e[t][n])},s=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!o(t,r)||e&&!a(e,r)?e:r),0))&&n[r]},c=(e,r,t,a)=>{var o=e[t];return"No satisfying version ("+n(a)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(o).map((e=>e+" from "+o[e].from)).join(", ")},p=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},b=(e,r,t,a)=>{p(c(e,r,t,a))},h=e=>(e.loaded=1,e.get()),v=(m=e=>function(r,t,a,n){var o=E.I(r);return o&&o.then?o.then(e.bind(e,r,E.S[r],t,a,n)):e(r,E.S[r],t,a,n)})(((e,r,t,a)=>(i(e,t),h(s(r,t,a)||b(r,e,t,a)||l(r,t))))),g=m(((e,r,t,a)=>(i(e,t),f(r,0,t,a)))),y={},j={125:()=>g("default","@jupyterlab/services",[1,7,0,9]),1373:()=>g("default","@codemirror/language",[1,6,0,0]),4901:()=>g("default","@lumino/signaling",[1,2,0,0]),5633:()=>g("default","@lumino/messaging",[1,2,0,0]),6211:()=>g("default","@codemirror/view",[1,6,9,6]),6697:()=>g("default","@lumino/algorithm",[1,2,0,0]),7308:()=>g("default","@jupyterlab/apputils",[1,4,1,9]),7454:()=>g("default","@jupyterlab/codemirror",[1,4,0,9]),7717:()=>g("default","@lumino/disposable",[1,2,0,0]),7749:()=>g("default","@jupyterlab/coreutils",[1,6,0,9]),7807:()=>g("default","@jupyterlab/codeeditor",[1,4,0,9]),7930:()=>g("default","@lumino/coreutils",[1,2,0,0]),7932:()=>v("default","@jupyterlab/nbformat",[1,4,0,9]),8093:()=>g("default","@jupyter/ydoc",[1,1,1,1]),8190:()=>g("default","@jupyterlab/settingregistry",[1,4,0,9]),8204:()=>g("default","@codemirror/state",[1,6,2,0]),8778:()=>g("default","@lumino/widgets",[1,2,0,1]),9053:()=>g("default","@jupyterlab/translation",[1,4,0,9]),9122:()=>g("default","@jupyterlab/notebook",[1,4,0,9]),9499:()=>g("default","@jupyterlab/rendermime",[1,4,0,9]),851:()=>g("default","@lezer/common",[1,1,0,0]),7138:()=>g("default","@lezer/highlight",[1,1,0,0])},w={324:[125,1373,4901,5633,6211,6697,7308,7454,7717,7749,7807,7930,7932,8093,8190,8204,8778,9053,9122,9499],798:[851,7138]},E.f.consumes=(e,r)=>{E.o(w,e)&&w[e].forEach((e=>{if(E.o(y,e))return r.push(y[e]);var t=r=>{y[e]=0,E.m[e]=t=>{delete E.c[e],t.exports=r()}},a=r=>{delete y[e],E.m[e]=t=>{throw delete E.c[e],r}};try{var n=j[e]();n.then?r.push(y[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={706:0};E.f.j=(r,t)=>{var a=E.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(798!=r){var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=E.p+E.u(r),i=new Error;E.l(o,(t=>{if(E.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var a,n,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(a in i)E.o(i,a)&&(E.m[a]=i[a]);l&&l(E)}for(r&&r(t);u<o.length;u++)n=o[u],E.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunknbdime_jupyterlab=self.webpackChunknbdime_jupyterlab||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),E.nc=void 0;var P=E(6167);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["nbdime-jupyterlab"]=P})();