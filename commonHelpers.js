import{A as C,S as $,N as M,M as T,K as B,a as A,b as m}from"./assets/vendor-b50045c9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function y({containerClass:e,elementClass:o,triggerClass:s,panelClass:n}){const t=O(`.${e}`),r=new C(t,{elementClass:o,triggerClass:s,panelClass:n,showMultiple:!0});return document.querySelector(`.${e}`).addEventListener("click",c=>{const f=c.target.closest(`.${s}`);f&&f.querySelector(".icon-arrow-down").classList.toggle("rotated")}),r}function O(e){if(!document.querySelector(e))throw new Error(`Element with class ${e} was not found`);return e}function p({swiperContainerClass:e,navigationButtons:{prevEl:o,nextEl:s},spaceBetween:n=30,slidesPerView:t={mobile:1,tablet:1,desktop:1},...r}){return new $(`.${e}`,{keyboard:{enabled:!0,onlyInViewport:!0},modules:[M,T,B],direction:"horizontal",speed:500,navigation:{nextEl:`.${s}`,prevEl:`.${o}`},spaceBetween:n,slidesPerView:t.mobile,breakpoints:{768:{slidesPerView:t.tablet,spaceBetween:t.tablet!==1&&n!=0?16:n},1440:{slidesPerView:t.desktop,spaceBetween:t.tablet!==1&&n!=0?16:n}},...r})}const N=y({containerClass:"accordion",elementClass:"accordion-item",triggerClass:"accordion-button",panelClass:"accordion-content"});N.open(0);const P=p({swiperContainerClass:"aboutme-swiper",navigationButtons:{prevEl:"aboutme-skill-prev",nextEl:"aboutme-skill-next"},slidesPerView:{mobile:2,tablet:3,desktop:6},spaceBetween:0,loop:!0}),I=document.querySelector(".aboutme-slide-next");I.addEventListener("click",()=>P.slideNext());A.init({once:!0,duration:1250});y({containerClass:"faq-list",elementClass:"faq-item",triggerClass:"faq-scroll-button",panelClass:"acc-panel"});m.defaults.baseURL="https://portfolio-js.b.goit.study/api/";const D=async()=>{try{const{data:e}=await m.get("/reviews");return e}catch(e){throw new Error(e.message)}},R=async e=>{try{const{data:o}=await m.post("/requests",e);return o}catch(o){throw new Error(o.message)}},h=document.querySelector("#emailForm"),i=document.querySelector(".backdrop");h.addEventListener("input",_);h.addEventListener("submit",K);function _(e){const o=e.target.nextElementSibling,s=e.target.name;!e.target.checkValidity()||!e.target.value.trim().length?V(o,s):j(o)}async function K(e){e.preventDefault();const o=new FormData(e.target),s={};o.forEach((n,t)=>s[t]=n);try{const n=await R(s);F(n),i.addEventListener("click",b),window.addEventListener("keyup",w),e.target.reset(),e.target.querySelectorAll(".status-message").forEach(t=>t.innerText="")}catch(n){console.error(n)}}function b(e){!e.target.closest(".modal-btn")&&!e.target.classList.contains("backdrop")||L()}function w(e){e.key==="Escape"&&L()}function V(e,o){e.innerText=`Invalid ${o}, try again`,e.classList.remove("success"),e.classList.add("error")}function j(e){e.innerText="Success",e.classList.remove("error"),e.classList.add("success")}function F({title:e,message:o}){i.classList.remove("is-hidden"),i.querySelector(".modal-title").innerText=e,i.querySelector(".modal-captain").innerText=o,document.documentElement.classList.add("is-modal-open")}function L(){i.classList.add("is-hidden"),document.documentElement.classList.remove("is-modal-open"),i.removeEventListener("click",b),window.removeEventListener("keyup",w)}const E=document.querySelector(".menu-tab"),l=document.querySelector(".menu");E.addEventListener("click",z);function z(e){e.currentTarget===E&&l.classList.toggle("is-hidden")}l.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{l.classList.add("is-hidden")})});const G=document.querySelector(".menu-mob-btn"),S=document.querySelector(".close_menu_btn"),q=document.querySelector(".mob-menu-list"),x=document.querySelector(".order-btn-menu"),a=document.querySelector("[data-modal]");G.addEventListener("click",k);S.addEventListener("click",k);function k(e){e.target===S||e.target===q?a.classList.add("is-hidden"):a.classList.toggle("is-hidden"),document.documentElement.classList.toggle("is-modal-open")}q.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{a.classList.add("is-hidden")})});x.addEventListener("click",H);function H(e){e.currentTarget===x&&a.classList.add("is-hidden")}p({swiperContainerClass:"swiper-container",navigationButtons:{prevEl:"projects-button-prev",nextEl:"projects-button-next"},spaceBetween:200});function U(e){return`
    <li class="swiper-slide reviews-li">
            <img class="avatar" src="${e.avatar_url}"
                 srcset="${e.avatar_url} 1x,
                         ${e.avatar_url.replace("@1x","@2x")} 2x"
                 alt=${e.author}
                 width="48"
                 height="48"
                 loading="lazy">
            <div class="text-wrapper">
                <h3 class="reviews-name">${e.author}</h3>
                <p class="reviews-text">${e.review}</p>
            </div>
        </li>
    `}const d=p({swiperContainerClass:"swiper-reviews",navigationButtons:{prevEl:"button-prev",nextEl:"button-next"},slidesPerView:{mobile:1,tablet:2,desktop:4},spaceBetween:20,loop:!1,slidesPerGroup:1});D().then(e=>{e.length>0?(J(e),d.update(),d.slidesPerViewDynamic()):g()}).catch(e=>{console.error(e),g()});function g(){const e=document.querySelector(".reviews-ul");e.innerHTML="<p>Not found</p>"}function J(e){e.forEach(o=>d.appendSlide(U(o)))}const u=document.querySelector(".btn-scroll-to-top"),v=document.querySelector(".trigger-scroll-top-section");u.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const Q={rootMargin:"0px",threshold:0},W=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting?u.classList.add("is-hidden"):u.classList.remove("is-hidden")})},Q);v&&W.observe(v);
//# sourceMappingURL=commonHelpers.js.map
