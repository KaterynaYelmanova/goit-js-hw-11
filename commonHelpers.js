import{i as u,S as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();function p(r){return r=encodeURIComponent(r),fetch(`https://pixabay.com/api/?key=43144570-5608d834234b71965ee211368&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(o.ok)return o.json();throw new Error(o.status)}).catch(o=>{console.error("Помилка запиту:",o)})}function f(r){c.innerHTML="";const o=r.hits;o.length==0&&u.error({title:"Error",message:"Error: No such pictures!",position:"topRight"});const l=o.map(e=>`<li class="gallery-item">
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
            </li>`).join("");c.insertAdjacentHTML("beforeend",l);const s={captionsData:"alt"};let t=new d(".gallery a",s);t.on("show.simplelightbox",function(){}),t.refresh()}const c=document.querySelector("ul.gallery");let i="";const g=()=>{c.innerHTML='<span class="loader"></span>'},n=document.getElementById("search-input");n.addEventListener("input",r=>{i=n.value.trim()});const h=document.getElementById("search-button");h.addEventListener("click",()=>{i&&i.length>=3?(g(),p(i).then(r=>f(r)).catch(r=>{u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}),n.value=""):alert("Please enter a valid search query with at least 3 characters.")});n.addEventListener("keypress",r=>{r.key==="Enter"&&(r.preventDefault(),h.click())});
//# sourceMappingURL=commonHelpers.js.map
