"use strict";var precacheConfig=[["/Personal-Website-Two/index.html","2362d048e6ed578ccd242a53646faf57"],["/Personal-Website-Two/static/css/main.ed07c471.css","6b44e198b4359836cb139bb3a67b699c"],["/Personal-Website-Two/static/js/main.57363823.js","de3bab7bdf7fde51377fb167ad440e29"],["/Personal-Website-Two/static/media/dcmap2grnnobacc.8a5fc21b.PNG","8a5fc21b1086395de07056156ac84a7e"],["/Personal-Website-Two/static/media/homenobacc.251eb97e.PNG","251eb97eaa101872f92a58f6fbb60b7e"],["/Personal-Website-Two/static/media/mlbapphome.c6d89f10.PNG","c6d89f1074aca15640f41e8d0c999177"],["/Personal-Website-Two/static/media/mlbappscore.c906b025.PNG","c906b025139f15df403f39e24bed2381"],["/Personal-Website-Two/static/media/tuliphardware.18e57e36.png","18e57e36a1ed5778eebfab12899f5248"],["/Personal-Website-Two/static/media/website.f31556d9.PNG","f31556d98f64bd098890a9a852028164"],["/Personal-Website-Two/static/media/whatcanieat.c460d42e.PNG","c460d42e2a378d399f498b0ed76537fc"],["/Personal-Website-Two/static/media/whatcanieat2.1f2fea91.PNG","1f2fea9130adaeddafe0093e26a6cb93"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/Personal-Website-Two/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});