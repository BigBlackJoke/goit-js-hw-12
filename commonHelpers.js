import{a as h,S as b,i as d}from"./assets/vendor-c493984e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const g=(t,s)=>{const n=t.hits.map(o=>`<li>
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
        </li>`);s.innerHTML=n.join("")},y=async(t,s=1)=>{try{return(await h.get("https://pixabay.com/api/",{params:{key:"44096290-4b282435e4320beb633e0ff8a",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s}})).data}catch(n){console.log(n)}},v=document.querySelector(".form"),u=document.querySelector(".searching-input"),c=document.querySelector(".gallery-elements"),p=document.querySelector(".loader"),r=document.querySelector(".next-page-button");r.style.display="none";p.style.display="none";let i=1,m="",f=new b(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});v.addEventListener("submit",async t=>{if(t.preventDefault(),c.innerHTML="",i=1,m=u.value.trim(),r.style.display="none",u.value!=""){p.style.display="block";try{const s=await y(m,i);s.hits.length===0?d.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"rgba(250, 250, 251, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(181, 27, 27, 1)",position:"topRight",maxWidth:"432px",timeout:2e3}):(g(s,c),f.refresh(),r.style.display="block")}catch(s){console.log(s)}finally{p.style.display="none",t.target.reset()}}else d.show({message:"Searching input cannot be empty! Please fill the input to start searching.",messageColor:"rgba(255, 255, 255, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(181, 27, 27, 1)",position:"topRight",maxWidth:"432px",timeout:2e3})});r.addEventListener("click",async()=>{r.style.display="none";try{const t=await y(m,i);g(t,c),f.refresh(),t.hits.length>0&&(r.style.display="block",i+=1)}catch(t){console.log(t)}});
//# sourceMappingURL=commonHelpers.js.map
