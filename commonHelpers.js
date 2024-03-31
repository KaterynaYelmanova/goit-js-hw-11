import{i as u,S as h}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();function p(r){return r=encodeURIComponent(r),fetch(`https://pixabay.com/api/?key=43144570-5608d834234b71965ee211368&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(o.ok)return o.json();throw new Error(o.status)})}function d(r){s.innerHTML="";const o=r.hits;o.length==0&&u.error({title:"Error",message:"Error: No such pictures!",position:"topRight"});const n=o.map(e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
            <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${e.webformatURL}" 
            data-source="${e.largeImageURL}" 
            alt="${e.tags}"
            />
            <ul class="gallery-description">
            <li><h3>Likes</h3><p>${e.likes}</p></li>
            <li><h3>Views</h3><p>${e.views}</p></li>
            <li><h3>Comments</h3><p>${e.comments}</p></li>
            <li><h3>Downloads</h3><p>${e.downloads}</p></li>
            </ul>
            </a>
            </li>`).join("");s.insertAdjacentHTML("beforeend",n);const i={captionsData:"alt"};let t=new h(".gallery a",i);t.on("show.simplelightbox",function(){}),t.refresh()}const s=document.querySelector("ul.gallery");let a="";const c=document.getElementById("search-input");c.addEventListener("input",r=>{a=c.value.trim(),s.innerHTML=""});const f=document.getElementById("search-button");f.addEventListener("click",()=>{a&&(s.innerHTML='<span class="loader"></span>',p(a).then(r=>d(r)).catch(r=>{u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}),c.value="")});
//# sourceMappingURL=commonHelpers.js.map
