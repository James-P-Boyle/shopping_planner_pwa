if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const f=e=>n(e,s),l={module:{uri:s},exports:o,require:f};i[s]=Promise.all(r.map((e=>l[e]||f(e)))).then((e=>(c(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-C1eEFji8.js",revision:null},{url:"assets/index-Pplpmgks.css",revision:null},{url:"index.html",revision:"12eba5c989bc564d41fe6c8f0742bc54"},{url:"registerSW.js",revision:"69725873fc648395c358b2138224d3ae"},{url:"android-chrome-192x192.png",revision:"e2ab61f56aa4b186557df49ba64610e5"},{url:"android-chrome-512x512.png",revision:"b947cecc5fbb86b619e97987dac56e3c"},{url:"apple-touch-icon.png",revision:"2fc94ce729c36d4812bc140b404492e9"},{url:"favicon-16x16.png",revision:"91fea46382ca2b7c51462733fd3983e5"},{url:"favicon-32x32.png",revision:"e206784f3ee713f08547d62a5fdb674c"},{url:"favicon.ico",revision:"4563bc23d5419a965b2a1c4b6c2fb8b2"},{url:"maskable_icon_192x192.png",revision:"417b76d3fe4378c2e9abc0f9567e3695"},{url:"maskable_icon_512x512.png",revision:"91ee252c4197d60632d9feb15878574c"},{url:"manifest.webmanifest",revision:"f2f3a32d1b59d6fd70b3913f4ed32e0d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
