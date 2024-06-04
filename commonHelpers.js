import{a as p,S as u,i as l}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const d=(n,t)=>{const a=n.hits.map(o=>`<li>
          <a href="${o.largeImageURL}"><img src="${o.webformatURL}" alt="${o.tags}"/></a>
          <div class="imageInfo">
            <div class="imageEachInfo">
                <span name="likes">Likes</span>
                <span name="likes-num">${o.likes}</span>
            </div>
            <div class="imageEachInfo">
                <span name="views">Views</span>
                <span name="views-num">${o.views}</span>
            </div>
            <div class="imageEachInfo">
                <span name="comments">Comments</span>
                <span name="comments-num">${o.comments}</span>
            </div>
            <div class="imageEachInfo">
                <span name="downloads">Downloads</span>
                <span name="downloads-num">${o.downloads}</span>
            </div>
          </div>
        </li>`);t.innerHTML=a.join("")},g=async n=>{try{g=await p.get("https://pixabay.com/api/?${searchParams.toString()}",{searchParams:{key:"44096290-4b282435e4320beb633e0ff8a",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}catch(t){console.log(t)}},f=document.querySelector(".form"),c=document.querySelector(".searching-input"),m=document.querySelector(".gallery-elements"),i=document.querySelector(".loader");i.style.display="none";let y=new u(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});f.addEventListener("submit",n=>{if(n.preventDefault(),m.innerHTML="",c.value!=""){i.style.display="block";const t=async()=>{try{t=await p.get(g(c.value))}catch(a){console.log(a)}};t().then(a=>{a.hits.length===0?l.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"rgba(250, 250, 251, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(181, 27, 27, 1)",position:"topRight",maxWidth:"432px",timeout:2e3}):(d(a,m),y.refresh())}).catch(a=>{console.log(a)}).finally(()=>{i.style.display="none",n.target.reset()})}else l.show({message:"Searching input cannot be empty! Please fill the input to start searching.",messageColor:"rgba(255, 255, 255, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(181, 27, 27, 1)",position:"topRight",maxWidth:"432px",timeout:2e3})});
//# sourceMappingURL=commonHelpers.js.map
