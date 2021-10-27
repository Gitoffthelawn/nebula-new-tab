"use strict";var e=function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function i(e){try{s(o.next(e))}catch(e){c(e)}}function a(e){try{s(o.throw(e))}catch(e){c(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((o=o.apply(e,t||[])).next())}))};const t=document.getElementById("content"),n=document.getElementById("time"),o=document.getElementById("date"),r=document.getElementById("photographer"),c=document.getElementById("attribution");let i=document.getElementById("topSitesCenter");const a=document.getElementById("settings-button"),s=document.getElementById("nebula-version"),l=document.getElementById("hour-mode-switch"),d=document.getElementById("top-sites-switch"),u=document.getElementById("top-sites-center-position-switch"),g=document.getElementById("new-background-button"),m=document.getElementById("new-background-button-icon"),h="https://nebula-unsplash-proxy.hkamran-workers.workers.dev";var p;if(function(e){e[e.Gecko=0]="Gecko",e[e.WebKit=1]="WebKit",e[e.MS=2]="MS"}(p||(p={})),t){const e=browser.storage.local.get("lastUpdated");if(s&&(s.textContent="__NEBULA_VERSION__"),C()==p.WebKit){let e=document.createElement("link");e.rel="icon",e.href="/assets/icons/logo-masked48.png";let t=document.createElement("link");t.rel="shortcut icon",t.href="/assets/icons/logo-masked48.png",document.head.appendChild(e),document.head.appendChild(t)}e.then((({lastUpdated:e})=>{(new Date).getTime()-new Date(e).getTime()>=432e5&&S();browser.storage.local.get(["backgroundImage","photographerName","photographerUrl"]).then((e=>{e.backgroundImage?(t.style.backgroundImage=`url('${e.backgroundImage}')`,I({photographer:e.photographerName,photographerUrl:e.photographerUrl,imageUrl:""})):S((e=>{t.style.backgroundImage=`url('${e}')`}))}),(()=>console.error("Error occurred when setting background image")))}),(()=>console.error("Error occurred when getting last updated time")))}function w(e){browser.storage.local.get("hourStatus").then((t=>{t.hourStatus?e("12"===t.hourStatus):e(!0)}))}function f(){return e(this,void 0,void 0,(function*(){yield function(){return e(this,void 0,void 0,(function*(){"topLeft"!==(yield browser.storage.local.get("topSitesContainer")).topSitesContainer?document.getElementById("topSitesCenter")&&(i=document.getElementById("topSitesCenter")):document.getElementById("topSitesTopLeft")&&(i=document.getElementById("topSitesTopLeft"))}))}();const t=yield browser.storage.local.get("topSites");return!!t.topSites&&!0===t.topSites}))}function b(e){e?(v(),y()):v()}function v(){const e=document.getElementById("topSitesCenter"),t=document.getElementById("topSitesTopLeft");e&&""!==e.innerHTML&&(e.textContent=""),t&&""!==t.innerHTML&&(t.textContent="")}function y(){if(i){const e="topSitesCenter"===i.id?"p-4 bg-black bg-opacity-75 rounded-lg":"",t="topSitesCenter"===i.id?"w-8":"w-6",n="topSitesCenter"===i.id?20:5;C()===p.Gecko?browser.topSites.get({includeFavicon:!0,limit:n}).then((n=>{n.forEach((n=>{const o=document.createElement("a");if(o.href=n.url,o.title=n.title||"",o.target="_blank",o.className=e,n.favicon){const e=document.createElement("img");e.className=t,e.src=n.favicon,o.appendChild(e)}i&&i.appendChild(o)}))})):browser.topSites.get().then((o=>{o.slice(0,n).forEach((n=>{const o=document.createElement("a");o.href=n.url,o.title=n.title||"",o.target="_blank",o.className=e;const r=document.createElement("img");var c,a;r.className=t,c=new URL(n.url).host,a=e=>r.src=e,browser.storage.local.get("topSitesFavicons").then((e=>{e.topSitesFavicons&&-1!==Object.keys(e.topSitesFavicons).indexOf(c)?a(e.topSitesFavicons[`${c}`]):E(`https://api.faviconkit.com/${c}`).then((t=>{browser.storage.local.set({topSitesFavicons:Object.assign(Object.assign({},e.topSitesFavicons),{[c]:t})}),a(t)})).catch((()=>a("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-globe'%3e%3ccircle cx='12' cy='12' r='10'%3e%3c/circle%3e%3cline x1='2' y1='12' x2='22' y2='12'%3e%3c/line%3e%3cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'%3e%3c/path%3e%3c/svg%3e")))}),(()=>E(`https://api.faviconkit.com/${c}`).then((e=>{browser.storage.local.set({topSitesFavicons:{[c]:e}}),a(e)})).catch((()=>a("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-globe'%3e%3ccircle cx='12' cy='12' r='10'%3e%3c/circle%3e%3cline x1='2' y1='12' x2='22' y2='12'%3e%3c/line%3e%3cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'%3e%3c/path%3e%3c/svg%3e"))))),o.appendChild(r),i&&i.appendChild(o)}))}))}}function k(e){const t=new Date;return e?t.toLocaleString("en-us",{hour:"numeric",minute:"numeric",hour12:!0}):t.getHours().toString()+":"+(n=t.getMinutes().toString(),Number(n<10)?"0"+Number(n).toString():Number(n).toString());var n}function S(t=null){const n=new Date;(function(){return e(this,void 0,void 0,(function*(){const e=yield fetch(`${h}/random?collections=935518`),t=yield e.json(),n=encodeURIComponent(t.links.download_location),o=yield fetch(`${h}/download?downloadUrl=${n}`),r=(yield o.json()).url;return{photographer:t.user.name,photographerUrl:t.user.links.html,imageUrl:r}}))})().then((e=>I(e))).then((e=>e.imageUrl&&E(e.imageUrl))).then((e=>{browser.storage.local.set({backgroundImage:e,lastUpdated:n.toISOString()}),t&&t(e)}))}function E(t){return e(this,void 0,void 0,(function*(){let e=yield fetch(t).then((e=>e.blob()));return yield new Promise((t=>{let n=new FileReader;n.onload=()=>t(n.result),n.readAsDataURL(e)}))}))}function I(t){return e(this,void 0,void 0,(function*(){return r&&(r.href=t.photographerUrl+"?utm_source=nebula-new-tab&utm_medium=referral",r.textContent=t.photographer),browser.storage.local.set({photographerName:t.photographer,photographerUrl:t.photographerUrl}),t}))}function C(){switch(Object.values(window.getComputedStyle(document.documentElement,"")).join("").match(/-(moz|webkit|ms)/)[1]){case"moz":return p.Gecko;case"webkit":return p.WebKit;case"ms":return p.MS;default:return null}}setTimeout((()=>{const e=new Date;n&&(n.classList.remove("opacity-0"),w((e=>n.textContent=k(e)))),o&&(o.classList.remove("opacity-0"),o.textContent=e.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),c&&c.classList.remove("opacity-0"),a&&a.classList.remove("opacity-0"),i&&f().then((e=>b(e)))}),300),setInterval((()=>{n&&w((e=>{n.textContent=k(e)}))}),1e3),setInterval((()=>{if(o){const e=new Date;o.textContent=e.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}browser.storage.local.get("lastUpdated").then((({lastUpdated:e})=>{(new Date).getTime()-new Date(e).getTime()>=864e5&&t&&S((e=>{t.style.backgroundImage=`url('${e}')`}))}))}),36e5),l&&d&&u&&g&&m&&(w((e=>l.checked=!e)),i&&(u.checked="topSitesCenter"===i.id),f().then((e=>d.checked=e)),l.addEventListener("click",(()=>w((e=>{browser.storage.local.set({hourStatus:e?"24":"12"}),n&&(n.textContent=k(!e))})))),d.addEventListener("click",(()=>f().then((e=>{browser.storage.local.set({topSites:!e}),b(!e)})))),u.addEventListener("click",(()=>{(function(){return e(this,void 0,void 0,(function*(){let e="";return e="topLeft"!==("topSitesCenter"===(null==i?void 0:i.id)?"center":"topLeft")?"topLeft":"center",browser.storage.local.set({topSitesContainer:e}),e}))})().then((e=>u.checked="center"===e)),f().then((e=>{e&&(v(),y())}))})),g.addEventListener("click",(()=>{m.classList.add("animate-spin"),S((e=>{t&&(t.style.backgroundImage=`url('${e}')`,m.classList.remove("animate-spin"))}))})));
//# sourceMappingURL=1908fece.js.map
