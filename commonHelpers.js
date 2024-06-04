import{a as g,S as y,i as p}from"./assets/vendor-c493984e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const m=(n,a)=>{const o=n.hits.map(t=>`<li>
          <a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}"/></a>
          <div class="imageInfo">
            <div class="imageEachInfo">
                <span name="likes">Likes</span>
                <span name="likes-num">${t.likes}</span>
            </div>
            <div class="imageEachInfo">
                <span name="views">Views</span>
                <span name="views-num">${t.views}</span>
            </div>
            <div class="imageEachInfo">
                <span name="comments">Comments</span>
                <span name="comments-num">${t.comments}</span>
            </div>
            <div class="imageEachInfo">
                <span name="downloads">Downloads</span>
                <span name="downloads-num">${t.downloads}</span>
            </div>
          </div>
        </li>`);a.innerHTML=o.join("")},f=async n=>{try{return(await g.get("https://pixabay.com/api/",{params:{key:"44096290-4b282435e4320beb633e0ff8a",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page}})).data}catch(a){console.log(a)}},h=document.querySelector(".form"),d=document.querySelector(".searching-input"),i=document.querySelector(".gallery-elements"),l=document.querySelector(".loader"),c=document.querySelector(".next-page-button");let u=1;c.style.display="none";l.style.display="none";let b=new y(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});h.addEventListener("submit",n=>{n.preventDefault(),i.innerHTML="",d.value!=""?(l.style.display="block",(async()=>{try{const o=await f(d.value,u);o.hits.length===0?p.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"rgba(250, 250, 251, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(181, 27, 27, 1)",position:"topRight",maxWidth:"432px",timeout:2e3}):(m(o,i),c.style.display="block",b.refresh(),c.addEventListener("click",async()=>{try{m(o,i),u+=1}catch(t){console.log(t)}}))}catch(o){console.log(o)}finally{l.style.display="none",n.target.reset()}})()):p.show({message:"Searching input cannot be empty! Please fill the input to start searching.",messageColor:"rgba(255, 255, 255, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(181, 27, 27, 1)",position:"topRight",maxWidth:"432px",timeout:2e3})});
//# sourceMappingURL=commonHelpers.js.map
