import{a as d,S as u,i as l}from"./assets/vendor-c493984e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g=(n,a)=>{const o=n.hits.map(s=>`<li>
          <a href="${s.largeImageURL}"><img src="${s.webformatURL}" alt="${s.tags}"/></a>
          <div class="imageInfo">
            <div class="imageEachInfo">
                <span name="likes">Likes</span>
                <span name="likes-num">${s.likes}</span>
            </div>
            <div class="imageEachInfo">
                <span name="views">Views</span>
                <span name="views-num">${s.views}</span>
            </div>
            <div class="imageEachInfo">
                <span name="comments">Comments</span>
                <span name="comments-num">${s.comments}</span>
            </div>
            <div class="imageEachInfo">
                <span name="downloads">Downloads</span>
                <span name="downloads-num">${s.downloads}</span>
            </div>
          </div>
        </li>`);a.innerHTML=o.join("")},y=async n=>{try{return(await d.get("https://pixabay.com/api/",{params:{key:"44096290-4b282435e4320beb633e0ff8a",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:1}})).data}catch(a){console.log(a)}},f=document.querySelector(".form"),c=document.querySelector(".searching-input"),m=document.querySelector(".gallery-elements"),i=document.querySelector(".loader"),p=document.querySelector(".next-page-button");p.style.display="none";i.style.display="none";let h=new u(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});f.addEventListener("submit",n=>{n.preventDefault(),m.innerHTML="",c.value!=""?(i.style.display="block",(async()=>{try{const o=await y(c.value);o.hits.length===0?l.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"rgba(250, 250, 251, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(181, 27, 27, 1)",position:"topRight",maxWidth:"432px",timeout:2e3}):(g(o,m),h.refresh(),p.style.display="block")}catch(o){console.log(o)}finally{i.style.display="none",n.target.reset()}})()):l.show({message:"Searching input cannot be empty! Please fill the input to start searching.",messageColor:"rgba(255, 255, 255, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(181, 27, 27, 1)",position:"topRight",maxWidth:"432px",timeout:2e3})});
//# sourceMappingURL=commonHelpers.js.map
