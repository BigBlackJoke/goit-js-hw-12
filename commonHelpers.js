import{a as f,S as h,i as d}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const u=(o,t)=>{const n=o.hits.map(s=>`<li>
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
        </li>`);t.innerHTML=n.join("")},g=async o=>{try{return(await f.get("https://pixabay.com/api/",{params:{key:"44096290-4b282435e4320beb633e0ff8a",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page}})).data}catch(t){console.log(t)}},b=document.querySelector(".form"),l=document.querySelector(".searching-input"),c=document.querySelector(".gallery-elements"),p=document.querySelector(".loader"),r=document.querySelector(".next-page-button");r.style.display="none";p.style.display="none";let y=new h(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),m=1;b.addEventListener("submit",o=>{o.preventDefault(),c.innerHTML="",l.value!=""?(p.style.display="block",(async()=>{try{const n=await g(l.value,m);n.hits.length===0?d.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"rgba(250, 250, 251, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(181, 27, 27, 1)",position:"topRight",maxWidth:"432px",timeout:2e3}):(u(n,c),y.refresh(),r.style.display="block")}catch(n){console.log(n)}finally{p.style.display="none",o.target.reset()}})()):d.show({message:"Searching input cannot be empty! Please fill the input to start searching.",messageColor:"rgba(255, 255, 255, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(181, 27, 27, 1)",position:"topRight",maxWidth:"432px",timeout:2e3})});r.addEventListener("click",()=>{(async()=>{try{const t=await g(l.value,m);u(t,c),y.refresh(),r.style.display="block",m+=1}catch(t){console.log(t)}})()});
//# sourceMappingURL=commonHelpers.js.map
