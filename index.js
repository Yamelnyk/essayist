import{S as i,M as a,a as d,A as u}from"./assets/vendor-CscbBjr0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m=document.querySelector(".mobile-menu-open-btn"),f=document.querySelector(".mobile-menu-close-btn"),s=document.querySelector(".mobile-menu"),y=document.querySelectorAll(".menu-link-mobile");m.addEventListener("click",()=>{s.classList.add("is-open"),document.body.style.overflow="hidden"});f.addEventListener("click",()=>{s.classList.remove("is-open"),document.body.style.overflow="auto"});y.forEach(c=>{c.addEventListener("click",()=>{s.classList.remove("is-open"),document.body.style.overflow="auto"})});document.addEventListener("click",c=>{if(c.target.classList.contains("myBtn")){const t=c.target.closest(".reviews-block-text"),r=t.querySelector(".reviews-block-title").textContent,n=t.querySelector(".text").textContent;if(window.innerWidth>=768){const e=document.getElementById("reviewModal");document.querySelector(".modal-title").textContent=r,document.querySelector(".modal-text").textContent=n.replace("...",""),e.style.display="flex",document.querySelector(".close").onclick=()=>e.style.display="none",window.onclick=o=>{o.target===e&&(e.style.display="none")}}else{const e=t.querySelector(".dots"),o=t.querySelector(".more");e.style.display==="none"?(e.style.display="inline",c.target.textContent="Read more",o.style.display="none"):(e.style.display="none",c.target.textContent="Collapse",o.style.display="inline")}}});new i(".swiper-container",{modules:[a,d],slidesPerView:"auto",spaceBetween:6,slideToClickedSlide:!0,mousewheel:{invert:!0},freeMode:!0,scrollbar:{el:".swiper-scrollbar",draggable:!0}});document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelectorAll(".faq-accordion-container"),t=[];c.forEach((n,e)=>{const o=new u(n,{duration:600,openOnInit:e===0?[0]:[],elementClass:"ac-faq",triggerClass:"faq-ac-title",panelClass:"ac-text",activeClass:"is-active-faq",showMultiple:!0});t.push(o)}),document.querySelectorAll(".faq-item-btn").forEach(n=>{n.addEventListener("click",()=>{t.forEach(e=>{e.closeAll()})})})});document.querySelectorAll(".faq-item-btn").forEach(c=>{c.addEventListener("click",()=>{document.querySelectorAll(".faq-item-btn").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".faq-accordion-container").forEach(t=>t.classList.remove("active")),document.getElementById(c.dataset.target).classList.add("active"),c.classList.add("active")})});document.querySelectorAll(".introduction-item-btn").forEach(c=>{c.addEventListener("click",()=>{document.querySelectorAll(".introduction-item-btn").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".picture-container").forEach(t=>t.classList.remove("active")),document.getElementById(c.dataset.target).classList.add("active"),c.classList.add("active")})});
//# sourceMappingURL=index.js.map
