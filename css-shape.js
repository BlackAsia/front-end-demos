!function(e){function r(e){var r=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.charset="utf-8",t.src=f.p+""+e+"."+w+".hot-update.js",r.appendChild(t)}function t(e){if("undefined"==typeof XMLHttpRequest)return e(new Error("No browser support"));try{var r=new XMLHttpRequest,t=f.p+""+w+".hot-update.json";r.open("GET",t,!0),r.timeout=1e4,r.send(null)}catch(n){return e(n)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)e(new Error("Manifest request to "+t+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)e(new Error("Manifest request to "+t+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(o){return void e(o)}e(null,n)}}}function n(e){function r(e,r){"ready"===k&&i("prepare"),_++,f.e(e,function(){function t(){_--,"prepare"===k&&(H[e]||p(e),0===_&&0===O&&c())}try{r.call(null,n)}finally{t()}})}var t=E[e];if(!t)return f;var n=function(r){return t.hot.active?E[r]?(E[r].parents.indexOf(e)<0&&E[r].parents.push(e),t.children.indexOf(r)<0&&t.children.push(r)):x=[e]:(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),x=[]),f(r)};for(var o in f)Object.prototype.hasOwnProperty.call(f,o)&&(Object.defineProperty?Object.defineProperty(n,o,function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(r){f[e]=r}}}(o)):n[o]=f[o]);return Object.defineProperty?Object.defineProperty(n,"e",{enumerable:!0,value:r}):n.e=r,n}function o(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],active:!0,accept:function(e,t){if("undefined"==typeof e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t;else r._acceptedDependencies[e]=t},decline:function(e){if("undefined"==typeof e)r._selfDeclined=!0;else if("number"==typeof e)r._declinedDependencies[e]=!0;else for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);t>=0&&r._disposeHandlers.splice(t,1)},check:d,apply:l,status:function(e){return e?void m.push(e):k},addStatusHandler:function(e){m.push(e)},removeStatusHandler:function(e){var r=m.indexOf(e);r>=0&&m.splice(r,1)},data:b[e]};return r}function i(e){k=e;for(var r=0;r<m.length;r++)m[r].call(null,e)}function a(e){var r=+e+""===e;return r?+e:e}function d(e,r){if("idle"!==k)throw new Error("check() is only allowed in idle status");"function"==typeof e?(g=!1,r=e):(g=e,r=r||function(e){if(e)throw e}),i("check"),t(function(e,t){if(e)return r(e);if(!t)return i("idle"),void r(null,null);j={},D={},H={};for(var n=0;n<t.c.length;n++)D[t.c[n]]=!0;y=t.h,i("prepare"),h=r,v={};var o=15;p(o),"prepare"===k&&0===_&&0===O&&c()})}function s(e,r){if(D[e]&&j[e]){j[e]=!1;for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(v[t]=r[t]);0===--O&&0===_&&c()}}function p(e){D[e]?(j[e]=!0,O++,r(e)):H[e]=!0}function c(){i("ready");var e=h;if(h=null,e)if(g)l(g,e);else{var r=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&r.push(a(t));e(null,r)}}function l(r,t){function n(e){for(var r=[e],t={},n=r.slice();n.length>0;){var i=n.pop(),e=E[i];if(e&&!e.hot._selfAccepted){if(e.hot._selfDeclined)return new Error("Aborted because of self decline: "+i);if(0===i)return;for(var a=0;a<e.parents.length;a++){var d=e.parents[a],s=E[d];if(s.hot._declinedDependencies[i])return new Error("Aborted because of declined dependency: "+i+" in "+d);r.indexOf(d)>=0||(s.hot._acceptedDependencies[i]?(t[d]||(t[d]=[]),o(t[d],[i])):(delete t[d],r.push(d),n.push(d)))}}}return[r,t]}function o(e,r){for(var t=0;t<r.length;t++){var n=r[t];e.indexOf(n)<0&&e.push(n)}}if("ready"!==k)throw new Error("apply() is only allowed in ready status");"function"==typeof r?(t=r,r={}):r&&"object"==typeof r?t=t||function(e){if(e)throw e}:(r={},t=t||function(e){if(e)throw e});var d={},s=[],p={};for(var c in v)if(Object.prototype.hasOwnProperty.call(v,c)){var l=a(c),u=n(l);if(!u){if(r.ignoreUnaccepted)continue;return i("abort"),t(new Error("Aborted because "+l+" is not accepted"))}if(u instanceof Error)return i("abort"),t(u);p[l]=v[l],o(s,u[0]);for(var l in u[1])Object.prototype.hasOwnProperty.call(u[1],l)&&(d[l]||(d[l]=[]),o(d[l],u[1][l]))}for(var h=[],g=0;g<s.length;g++){var l=s[g];E[l]&&E[l].hot._selfAccepted&&h.push({module:l,errorHandler:E[l].hot._selfAccepted})}i("dispose");for(var m=s.slice();m.length>0;){var l=m.pop(),O=E[l];if(O){for(var _={},H=O.hot._disposeHandlers,j=0;j<H.length;j++){var D=H[j];D(_)}b[l]=_,O.hot.active=!1,delete E[l];for(var j=0;j<O.children.length;j++){var P=E[O.children[j]];if(P){var z=P.parents.indexOf(l);z>=0&&P.parents.splice(z,1)}}}}for(var l in d)if(Object.prototype.hasOwnProperty.call(d,l))for(var O=E[l],A=d[l],j=0;j<A.length;j++){var q=A[j],z=O.children.indexOf(q);z>=0&&O.children.splice(z,1)}i("apply"),w=y;for(var l in p)Object.prototype.hasOwnProperty.call(p,l)&&(e[l]=p[l]);var M=null;for(var l in d)if(Object.prototype.hasOwnProperty.call(d,l)){for(var O=E[l],A=d[l],S=[],g=0;g<A.length;g++){var q=A[g],D=O.hot._acceptedDependencies[q];S.indexOf(D)>=0||S.push(D)}for(var g=0;g<S.length;g++){var D=S[g];try{D(d)}catch(T){M||(M=T)}}}for(var g=0;g<h.length;g++){var L=h[g],l=L.module;x=[l];try{f(l)}catch(T){if("function"==typeof L.errorHandler)try{L.errorHandler(T)}catch(T){M||(M=T)}else M||(M=T)}}return M?(i("fail"),t(M)):(i("idle"),void t(null,s))}function f(r){if(E[r])return E[r].exports;var t=E[r]={exports:{},id:r,loaded:!1,hot:o(r),parents:x,children:[]};return e[r].call(t.exports,t,t.exports,n(r)),t.loaded=!0,t.exports}var u=this.webpackHotUpdate;this.webpackHotUpdate=function(e,r){s(e,r),u&&u(e,r)};var h,v,y,g=!0,w="a9d55e14bf18e3dcfadf",b={},x=[],m=[],k="idle",O=0,_=0,H={},j={},D={},E={};return f.m=e,f.c=E,f.p="",f.h=function(){return w},n(0)(0)}({0:function(e,r,t){"use strict";document.querySelector("#main").innerHTML=t(30)},30:function(e,r){e.exports="<style>#oval{width:200px;height:100px;background:red;-moz-border-radius:100px/50px;-webkit-border-radius:100px/50px;border-radius:100px/50px}</style> <div id=oval></div> <style>#test-border-radious{width:200px;height:100px;background:red;border-radius:5px 50px 15px 20px/120px 85px 50px 10px}</style> <div id=test-border-radious></div> <style>#parallelogram{width:100px;height:70px;-webkit-transform:skew(-20deg);-moz-transform:skew(-20deg);-o-transform:skew(-20deg);-ms-transform:skew(-20deg);transform:skew(-20deg);background:red;margin:30px}</style> <div id=parallelogram></div> <style>#trapezoid-1{width:100px;height:70px;-webkit-transform:skew(-20deg);-moz-transform:skew(-20deg);-o-transform:skew(-20deg);-ms-transform:skew(-20deg);transform:skew(-20deg);background:red;margin:30px}#trapezoid-1:after{content:'';display:block;width:100px;height:70px;background:red;margin-left:29px;-webkit-transform:skew(40deg);-moz-transform:skew(40deg);-o-transform:skew(40deg);-ms-transform:skew(40deg);transform:skew(40deg)}</style> <div id=trapezoid-1></div> <style>#trapezoid-2{height:0;width:100px;border-bottom:100px solid red;border-left:60px solid transparent;border-right:60px solid transparent}</style> <div id=trapezoid-2></div> <style>#triangle-up{height:0;width:0;border:50px solid red;border-color:transparent transparent red transparent;margin:30px}</style> <div id=triangle-up></div>"}});