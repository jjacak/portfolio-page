(()=>{"use strict";const e=document.querySelector(".main-nav"),t=document.querySelector(".hamburger-icon");document.querySelector(".contact__form").setAttribute("novalidate",!0);const r=e=>{if(e.disabled||"file"===e.type||"reset"===e.type||"submit"===e.type||"button"===e.type)return;const t=e.validity;return t.valid&&0!==e.value.trim().length?void 0:t.valueMissing||0===e.value.trim().length?`Please enter your ${e.getAttribute("name")}.`:t.patternMismatch?`Please enter a valid ${e.getAttribute("name")}.`:"The value you entered for this field is invalid."},s=(e,t)=>{e.classList.add("error");const r=e.getAttribute("name"),s=document.querySelector(`.error-for-${r}`);s.style.visibility="visible",s.innerText=t},n=document.querySelector(".hamburger-icon"),i=document.querySelector(".contact__form");(()=>{const e=document.querySelector(".main-nav"),t=document.querySelector("header"),r=document.querySelectorAll(".skills__item");if(!("IntersectionObserver"in window))return console.log(55),r.forEach((e=>e.classList.add("appear"))),void e.classList.add("nav-scrolled");const s=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?e.classList.remove("nav-scrolled"):e.classList.add("nav-scrolled")}))}),{rootMargin:"-100px"}),n=new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("appear"),t.unobserve(e.target))}))}),{threshold:1});s.observe(t),r.forEach((e=>n.observe(e)))})(),n.addEventListener("click",(()=>{t.classList.toggle("is-active"),e.classList.toggle("show-menu")})),document.addEventListener("click",(r=>{r.target===e||r.target===t||r.target.classList.contains("main-nav__list")||r.target.classList.contains("main-nav__item")||(e.classList.remove("show-menu"),t.classList.remove("is-active"))})),i.addEventListener("blur",(e=>{const t=r(e.target);t?s(e.target,t):(e=>{e.classList.remove("error");const t=e.getAttribute("name"),r=document.querySelector(`.error-for-${t}`);r&&(r.style.visibility="hidden",r.innerText="")})(e.target)}),!0),i.addEventListener("submit",(e=>{let t,n;[...e.target.elements].forEach((e=>{t=r(e),t&&(s(e,t),n||(n=e))})),n&&(e.preventDefault(),n.focus())}))})();