var _JUPYTERLAB;(()=>{"use strict";var e,t,r,a,o,n,l,i,f,d,u,c,s,b,p,h,m,v,y,g,j,w,P,S,E={7928:(e,t,r)=>{var a={"./index":()=>Promise.all([r.e(66),r.e(881),r.e(308),r.e(29),r.e(211),r.e(222),r.e(704),r.e(789)]).then((()=>()=>r(655))),"./extension":()=>Promise.all([r.e(66),r.e(881),r.e(308),r.e(29),r.e(211),r.e(222),r.e(704),r.e(789)]).then((()=>()=>r(655))),"./style":()=>r.e(747).then((()=>()=>r(9747)))},o=(e,t)=>(r.R=t,t=r.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),n=(e,t)=>{if(r.S){var a="default",o=r.S[a];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[a]=e,r.I(a,t)}};r.d(t,{get:()=>o,init:()=>n})}},k={};function T(e){var t=k[e];if(void 0!==t)return t.exports;var r=k[e]={id:e,exports:{}};return E[e](r,r.exports,T),r.exports}T.m=E,T.c=k,T.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return T.d(t,{a:t}),t},T.d=(e,t)=>{for(var r in t)T.o(t,r)&&!T.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},T.f={},T.e=e=>Promise.all(Object.keys(T.f).reduce(((t,r)=>(T.f[r](e,t),t)),[])),T.u=e=>e+"."+{10:"6b01aeeda69547263561",27:"96eaab30453ba73d0911",29:"23f005316d6d6ffe08a3",66:"43ea78698c0b68dd185e",122:"5ba163cf07ee5ab4b45f",171:"3886234f49e694ae95b7",211:"754909450400a069e84e",222:"8405f148d598d004ac46",242:"ca107b156a41aa38af3c",266:"45b6171124f7c87df871",282:"d7c76becd5c65086b75b",308:"7fdaf50366be965d87a8",338:"e6e982cc684fe40f637d",378:"ba25417c17d90ae2da47",392:"c5c9794b5ab642294edf",405:"a3174e55e00ed9436e42",612:"284a1c84e063a1f3247e",638:"7c1aca2e676069b2614f",704:"1bd65297c41da81e6f3d",725:"f68c9b248131f7920e24",728:"552705d5c0c271b81970",747:"30dabbfed4f4994e24bc",789:"270919a0cb6c3ffb4b8c",798:"864317e9546f5ac03d44",799:"ca56b06c5b0b3b8ef460",846:"a9161577f8b977644eaf",881:"42c4dde967f7d347bc86",946:"0b568842df5b992322e5",967:"2aaf8ca7c37a92081b62"}[e]+".js?v="+{10:"6b01aeeda69547263561",27:"96eaab30453ba73d0911",29:"23f005316d6d6ffe08a3",66:"43ea78698c0b68dd185e",122:"5ba163cf07ee5ab4b45f",171:"3886234f49e694ae95b7",211:"754909450400a069e84e",222:"8405f148d598d004ac46",242:"ca107b156a41aa38af3c",266:"45b6171124f7c87df871",282:"d7c76becd5c65086b75b",308:"7fdaf50366be965d87a8",338:"e6e982cc684fe40f637d",378:"ba25417c17d90ae2da47",392:"c5c9794b5ab642294edf",405:"a3174e55e00ed9436e42",612:"284a1c84e063a1f3247e",638:"7c1aca2e676069b2614f",704:"1bd65297c41da81e6f3d",725:"f68c9b248131f7920e24",728:"552705d5c0c271b81970",747:"30dabbfed4f4994e24bc",789:"270919a0cb6c3ffb4b8c",798:"864317e9546f5ac03d44",799:"ca56b06c5b0b3b8ef460",846:"a9161577f8b977644eaf",881:"42c4dde967f7d347bc86",946:"0b568842df5b992322e5",967:"2aaf8ca7c37a92081b62"}[e],T.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),T.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="@jupyterlab/git:",T.l=(r,a,o,n)=>{if(e[r])e[r].push(a);else{var l,i;if(void 0!==o)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var u=f[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+o){l=u;break}}l||(i=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,T.nc&&l.setAttribute("nonce",T.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[a];var c=(t,a)=>{l.onerror=l.onload=null,clearTimeout(s);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(a))),t)return t(a)},s=setTimeout(c.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=c.bind(null,l.onerror),l.onload=c.bind(null,l.onload),i&&document.head.appendChild(l)}},T.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{T.S={};var e={},t={};T.I=(r,a)=>{a||(a=[]);var o=t[r];if(o||(o=t[r]={}),!(a.indexOf(o)>=0)){if(a.push(o),e[r])return e[r];T.o(T.S,r)||(T.S[r]={});var n=T.S[r],l="@jupyterlab/git",i=(e,t,r,a)=>{var o=n[e]=n[e]||{},i=o[t];(!i||!i.loaded&&(!a!=!i.eager?a:l>i.from))&&(o[t]={get:r,from:l,eager:!!a})},f=[];return"default"===r&&(i("@emotion/react","11.11.1",(()=>Promise.all([T.e(846),T.e(338),T.e(29),T.e(171)]).then((()=>()=>T(338))))),i("@emotion/styled","11.11.0",(()=>Promise.all([T.e(378),T.e(29),T.e(211),T.e(799),T.e(122)]).then((()=>()=>T(9860))))),i("@jupyterlab/git","0.50.1",(()=>Promise.all([T.e(66),T.e(881),T.e(308),T.e(29),T.e(211),T.e(222),T.e(704),T.e(789)]).then((()=>()=>T(655))))),i("@lumino/collections","2.0.1",(()=>T.e(266).then((()=>()=>T(9266))))),i("@mui/icons-material","5.14.12",(()=>Promise.all([T.e(66),T.e(242),T.e(29),T.e(222)]).then((()=>()=>T(4242))))),i("@mui/material","5.14.12",(()=>Promise.all([T.e(846),T.e(66),T.e(612),T.e(881),T.e(29),T.e(211),T.e(222),T.e(704)]).then((()=>()=>T(3799))))),i("diff-match-patch","1.0.5",(()=>T.e(27).then((()=>()=>T(2027))))),i("filesize","10.0.7",(()=>T.e(967).then((()=>()=>T(8967))))),i("react-virtualized-auto-sizer","1.0.7",(()=>Promise.all([T.e(29),T.e(728)]).then((()=>()=>T(1728))))),i("react-window","1.8.7",(()=>Promise.all([T.e(405),T.e(29),T.e(725)]).then((()=>()=>T(9405))))),i("typestyle","2.4.0",(()=>T.e(946).then((()=>()=>T(9946)))))),e[r]=f.length?Promise.all(f).then((()=>e[r]=1)):1}}})(),(()=>{var e;T.g.importScripts&&(e=T.g.location+"");var t=T.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),T.p=e})(),r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},a=(e,t)=>{e=r(e),t=r(t);for(var a=0;;){if(a>=e.length)return a<t.length&&"u"!=(typeof t[a])[0];var o=e[a],n=(typeof o)[0];if(a>=t.length)return"u"==n;var l=t[a],i=(typeof l)[0];if(n!=i)return"o"==n&&"n"==i||"s"==i||"u"==n;if("o"!=n&&"u"!=n&&o!=l)return o<l;a++}},o=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var a=1,n=1;n<e.length;n++)a--,r+="u"==(typeof(i=e[n]))[0]?"-":(a>0?".":"")+(a=2,i);return r}var l=[];for(n=1;n<e.length;n++){var i=e[n];l.push(0===i?"not("+f()+")":1===i?"("+f()+" || "+f()+")":2===i?l.pop()+" "+l.pop():o(i))}return f();function f(){return l.pop().replace(/^\((.+)\)$/,"$1")}},n=(e,t)=>{if(0 in e){t=r(t);var a=e[0],o=a<0;o&&(a=-a-1);for(var l=0,i=1,f=!0;;i++,l++){var d,u,c=i<e.length?(typeof e[i])[0]:"";if(l>=t.length||"o"==(u=(typeof(d=t[l]))[0]))return!f||("u"==c?i>a&&!o:""==c!=o);if("u"==u){if(!f||"u"!=c)return!1}else if(f)if(c==u)if(i<=a){if(d!=e[i])return!1}else{if(o?d>e[i]:d<e[i])return!1;d!=e[i]&&(f=!1)}else if("s"!=c&&"n"!=c){if(o||i<=a)return!1;f=!1,i--}else{if(i<=a||u<c!=o)return!1;f=!1}else"s"!=c&&"n"!=c&&(f=!1,i--)}}var s=[],b=s.pop.bind(s);for(l=1;l<e.length;l++){var p=e[l];s.push(1==p?b()|b():2==p?b()&b():p?n(p,t):!b())}return!!b()},l=(e,t)=>{var r=T.S[e];if(!r||!T.o(r,t))throw new Error("Shared module "+t+" doesn't exist in shared scope "+e);return r},i=(e,t)=>{var r=e[t];return(t=Object.keys(r).reduce(((e,t)=>!e||a(e,t)?t:e),0))&&r[t]},f=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&a(e,t)?t:e),0)},d=(e,t,r,a)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+o(a)+")",u=(e,t,r,a)=>{var o=f(e,r);return n(a,o)||b(d(e,r,o,a)),h(e[r][o])},c=(e,t,r)=>{var o=e[t];return(t=Object.keys(o).reduce(((e,t)=>!n(r,t)||e&&!a(e,t)?e:t),0))&&o[t]},s=(e,t,r,a)=>{var n=e[r];return"No satisfying version ("+o(a)+") of shared module "+r+" found in shared scope "+t+".\nAvailable versions: "+Object.keys(n).map((e=>e+" from "+n[e].from)).join(", ")},b=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},p=(e,t,r,a)=>{b(s(e,t,r,a))},h=e=>(e.loaded=1,e.get()),v=(m=e=>function(t,r,a,o){var n=T.I(t);return n&&n.then?n.then(e.bind(e,t,T.S[t],r,a,o)):e(t,T.S[t],r,a,o)})(((e,t,r,a)=>t&&T.o(t,r)?h(i(t,r)):a())),y=m(((e,t,r,a)=>(l(e,r),h(c(t,r,a)||p(t,e,r,a)||i(t,r))))),g=m(((e,t,r,a)=>(l(e,r),u(t,0,r,a)))),j=m(((e,t,r,a,o)=>{var n=t&&T.o(t,r)&&c(t,r,a);return n?h(n):o()})),w={},P={6029:()=>g("default","react",[1,18,2,0]),5211:()=>v("default","@emotion/react",(()=>Promise.all([T.e(846),T.e(338),T.e(282)]).then((()=>()=>T(338))))),2148:()=>j("default","@emotion/react",[1,11,4,1],(()=>Promise.all([T.e(846),T.e(338),T.e(282)]).then((()=>()=>T(338))))),8800:()=>j("default","@emotion/styled",[1,11,3,0],(()=>Promise.all([T.e(378),T.e(211),T.e(799)]).then((()=>()=>T(9860))))),7704:()=>g("default","react-dom",[1,18,2,0]),715:()=>g("default","@jupyterlab/translation",[1,4,2,0]),737:()=>j("default","react-window",[1,1,8,5],(()=>T.e(405).then((()=>()=>T(9405))))),786:()=>g("default","@jupyterlab/statusbar",[1,4,2,0]),1373:()=>g("default","@codemirror/language",[1,6,0,0]),1517:()=>y("default","@jupyterlab/docregistry",[1,4,2,0]),1926:()=>j("default","typestyle",[1,2,0,1],(()=>T.e(946).then((()=>()=>T(9946))))),2363:()=>g("default","@jupyterlab/coreutils",[1,6,2,0]),2733:()=>g("default","@jupyter/ydoc",[1,2,0,1]),2944:()=>g("default","@jupyterlab/ui-components",[1,4,2,0]),2994:()=>g("default","@jupyterlab/filebrowser",[1,4,2,0]),3708:()=>j("default","diff-match-patch",[1,1,0,4],(()=>T.e(27).then((()=>()=>T(2027))))),3712:()=>g("default","@jupyterlab/apputils",[1,4,3,0]),3749:()=>j("default","@lumino/collections",[1,2,0,0],(()=>T.e(266).then((()=>()=>T(9266))))),4550:()=>g("default","@jupyterlab/docmanager",[1,4,2,0]),4882:()=>g("default","@lumino/widgets",[1,2,3,1,,"alpha",0]),4901:()=>g("default","@lumino/signaling",[1,2,0,0]),5359:()=>g("default","@lumino/dragdrop",[1,2,0,0]),5572:()=>y("default","@jupyterlab/outputarea",[1,4,2,0]),5633:()=>g("default","@lumino/messaging",[1,2,0,0]),6211:()=>g("default","@codemirror/view",[1,6,9,6]),6480:()=>g("default","@jupyterlab/codeeditor",[1,4,2,0]),6550:()=>g("default","@jupyterlab/settingregistry",[1,4,2,0]),6697:()=>g("default","@lumino/algorithm",[1,2,0,0]),6797:()=>g("default","@lumino/polling",[1,2,0,0]),6898:()=>g("default","@jupyterlab/application",[1,4,2,0]),6979:()=>j("default","filesize",[1,10,0,7],(()=>T.e(967).then((()=>()=>T(8967))))),7098:()=>g("default","@jupyterlab/services",[1,7,2,0]),7120:()=>g("default","@lumino/commands",[1,2,0,1]),7489:()=>j("default","@mui/material",[1,5,12,1],(()=>Promise.all([T.e(846),T.e(612)]).then((()=>()=>T(3799))))),7749:()=>g("default","@jupyterlab/codemirror",[1,4,2,0]),7858:()=>j("default","@mui/icons-material",[1,5,11,16],(()=>T.e(242).then((()=>()=>T(4242))))),7930:()=>g("default","@lumino/coreutils",[1,2,0,0]),8196:()=>j("default","react-virtualized-auto-sizer",[1,1,0,2],(()=>T.e(392).then((()=>()=>T(1728))))),8204:()=>g("default","@codemirror/state",[1,6,2,0]),8505:()=>g("default","@jupyterlab/rendermime",[1,4,2,0]),8889:()=>y("default","@jupyterlab/nbformat",[1,4,2,0]),9928:()=>g("default","@jupyterlab/mainmenu",[1,4,2,0]),799:()=>j("default","@emotion/react",[1,11,0,0,,"rc",0],(()=>Promise.all([T.e(846),T.e(338)]).then((()=>()=>T(338))))),851:()=>g("default","@lezer/common",[1,1,0,0]),7138:()=>g("default","@lezer/highlight",[1,1,0,0])},S={29:[6029],211:[5211],222:[2148,8800],704:[7704],789:[715,737,786,1373,1517,1926,2363,2733,2944,2994,3708,3712,3749,4550,4882,4901,5359,5572,5633,6211,6480,6550,6697,6797,6898,6979,7098,7120,7489,7749,7858,7930,8196,8204,8505,8889,9928],798:[851,7138],799:[799]},T.f.consumes=(e,t)=>{T.o(S,e)&&S[e].forEach((e=>{if(T.o(w,e))return t.push(w[e]);var r=t=>{w[e]=0,T.m[e]=r=>{delete T.c[e],r.exports=t()}},a=t=>{delete w[e],T.m[e]=r=>{throw delete T.c[e],t}};try{var o=P[e]();o.then?t.push(w[e]=o.then(r).catch(a)):r(o)}catch(e){a(e)}}))},(()=>{var e={30:0};T.f.j=(t,r)=>{var a=T.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(2(11|22|9)|7(04|98|99))$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=T.p+T.u(t),l=new Error;T.l(n,(r=>{if(T.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",l.name="ChunkLoadError",l.type=o,l.request=n,a[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,o,[n,l,i]=r,f=0;if(n.some((t=>0!==e[t]))){for(a in l)T.o(l,a)&&(T.m[a]=l[a]);i&&i(T)}for(t&&t(r);f<n.length;f++)o=n[f],T.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunk_jupyterlab_git=self.webpackChunk_jupyterlab_git||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),T.nc=void 0;var _=T(7928);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyterlab/git"]=_})();