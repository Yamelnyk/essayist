import{S as i,M as a,a as d,A as u}from"./assets/vendor-CscbBjr0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const m=document.querySelector(".mobile-menu-open-btn"),f=document.querySelector(".mobile-menu-close-btn"),s=document.querySelector(".mobile-menu"),y=document.querySelectorAll(".menu-link-mobile");m.addEventListener("click",()=>{s.classList.add("is-open"),document.body.style.overflow="hidden"});f.addEventListener("click",()=>{s.classList.remove("is-open"),document.body.style.overflow="auto"});y.forEach(n=>{n.addEventListener("click",()=>{s.classList.remove("is-open"),document.body.style.overflow="auto"})});document.addEventListener("click",n=>{if(n.target.classList.contains("myBtn")){const o=n.target.closest(".reviews-block-text"),l=o.querySelector(".reviews-block-title").textContent,r=o.querySelector(".text").textContent;if(window.innerWidth>=768){const e=document.getElementById("reviewModal");document.querySelector(".modal-title").textContent=l,document.querySelector(".modal-text").textContent=r.replace("...",""),e.style.display="flex",document.querySelector(".close").onclick=()=>e.style.display="none",window.onclick=t=>{t.target===e&&(e.style.display="none")}}else{const e=o.querySelector(".dots"),t=o.querySelector(".more");e.style.display==="none"?(e.style.display="inline",n.target.textContent="Read more",t.style.display="none"):(e.style.display="none",n.target.textContent="Collapse",t.style.display="inline")}}});new i(".swiper-container",{modules:[a,d],slidesPerView:"auto",spaceBetween:10,slideToClickedSlide:!0,mousewheel:{invert:!0},freeMode:!0,scrollbar:{el:".swiper-scrollbar",draggable:!0}});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll(".faq-accordion-container");let o=null;n.forEach((l,r)=>{const e=new u(l,{duration:600,openOnInit:r===0?[0]:[],elementClass:"ac-faq",triggerClass:"faq-ac-title",panelClass:"ac-text",activeClass:"is-active-faq",showMultiple:!0});r===0&&(o=e),document.querySelectorAll(".faq-item-btn").forEach(c=>{c.addEventListener("click",()=>{o&&o.close(0)})})})});document.querySelectorAll(".faq-item-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".faq-item-btn").forEach(o=>o.classList.remove("active")),document.querySelectorAll(".faq-accordion-container").forEach(o=>o.classList.remove("active")),document.getElementById(n.dataset.target).classList.add("active"),n.classList.add("active")})});
//# sourceMappingURL=index.js.map
