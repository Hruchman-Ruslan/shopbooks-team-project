function e(e,n,r,t){Object.defineProperty(e,n,{get:r,set:t,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},i=n.parcelRequire61bf;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return r[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},n.parcelRequire61bf=i),i.register("kyEFX",(function(n,r){var t,i;e(n.exports,"register",(function(){return t}),(function(e){return t=e})),e(n.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};t=function(e){for(var n=Object.keys(e),r=0;r<n.length;r++)o[n[r]]=e[n[r]]},i=function(e){var n=o[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.949cf083.js","9nlaS":"image_3@1x.477a58dd.png","l1cO1":"image_3@2x.86f2db94.png"}'));var o;o=new URL(i("kyEFX").resolve("9nlaS"),import.meta.url).toString();var a;a=new URL(i("kyEFX").resolve("l1cO1"),import.meta.url).toString();const u=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img1x:new URL(o),img2x:new URL(a)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img1x:new URL(o),img2x:new URL(a)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img1x:new URL(o),img2x:new URL(a)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img1x:new URL(o),img2x:new URL(a)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img1x:new URL(o),img2x:new URL(a)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img1x:new URL(o),img2x:new URL(a)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img1x:new URL(o),img2x:new URL(a)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img1x:new URL(o),img2x:new URL(a)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img1x:new URL(o),img2x:new URL(a)}],l={foundationList:document.querySelector(".support__ukraine-list")};const s=u.map(((e,n)=>function({img1x:e,img2x:n,title:r,url:t},i){return`<li class="support__ukraine-item">\n   <div class="support__ukraine-number">${i}</div>\n   <a\n     class="support__ukraine-link"\n     href="${t}"\n     target="_blank"\n     rel="noopener noreferrer"\n   >\n     <picture class="support__ukraine-img">\n       <source\n          srcset="\n              ${e} 1x,\n              ${n} 2x\n            "\n         type="image/png"\n       />\n\n       <img\n         src="${e}"\n         alt="${r}"\n         height="32"\n         loading="lazy"\n       />\n     </picture>\n   </a>\n </li>`}(e,(n+1).toString().padStart(2,"0")))).join("");l.foundationList.innerHTML+=s;
//# sourceMappingURL=index.949cf083.js.map
