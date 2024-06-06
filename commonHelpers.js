import{a as h,S as f,i as m}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const g=(s,e)=>{const n=s.hits.map(a=>`<li>
          <a href="${a.largeImageURL}"><img src="${a.webformatURL}" alt="${a.tags}"/></a>
          <div class="imageInfo">
            <div class="imageEachInfo">
                <span name="likes">Likes</span>
                <span name="likes-num">${a.likes}</span>
            </div>
            <div class="imageEachInfo">
                <span name="views">Views</span>
                <span name="views-num">${a.views}</span>
            </div>
            <div class="imageEachInfo">
                <span name="comments">Comments</span>
                <span name="comments-num">${a.comments}</span>
            </div>
            <div class="imageEachInfo">
                <span name="downloads">Downloads</span>
                <span name="downloads-num">${a.downloads}</span>
            </div>
          </div>
        </li>`);e.insertAdjacentHTML("beforeend",n.join(""))},u=async(s,e=1)=>{try{return(await h.get("https://pixabay.com/api/",{params:{key:"44096290-4b282435e4320beb633e0ff8a",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:e}})).data}catch(n){console.log(n)}},b=document.querySelector(".form"),v=document.querySelector(".searching-input"),d=document.querySelector(".gallery-elements"),l=document.querySelector(".loader"),r=document.querySelector(".next-page-button");r.style.display="none";l.style.display="none";let i=1,c="",y=new f(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});b.addEventListener("submit",async s=>{if(s.preventDefault(),d.innerHTML="",i=1,c=v.value,r.style.display="none",c!=""){l.style.display="block";try{const e=await u(c,i);e.hits.length===0?m.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"rgba(250, 250, 251, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(181, 27, 27, 1)",position:"topRight",maxWidth:"432px",timeout:2e3}):(g(e,d),y.refresh(),e.totalHits>15&&(r.style.display="block"))}catch(e){console.log(e)}finally{l.style.display="none",s.target.reset()}}else m.warning({message:"Searching input cannot be empty! Please fill the input to start searching.",messageColor:"rgba(255, 255, 255, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(181, 27, 27, 1)",position:"topRight",maxWidth:"432px",timeout:2e3})});r.addEventListener("click",async()=>{l.style.display="block",r.style.display="none",i+=1;try{const s=await u(c,i);if(g(s,d),y.refresh(),s.hits.length>0){const a=document.querySelector(".gallery-elements li").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"}),r.style.display="block"}const e=Math.ceil(s.totalHits/15);i===e&&(r.style.display="none",m.show({message:"We are sorry, but you have reached the end of search results.",messageColor:"rgba(255, 255, 255, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(78, 117, 255, 1)",position:"topRight",maxWidth:"432px",timeout:3e3}))}catch(s){console.log(s)}finally{l.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
