"use strict";var nav=document.querySelector(".nav"),body=document.querySelector(".body"),overlay=document.querySelector(".overlay"),mobileMenuToggle=function(){nav.classList.contains("show")?(nav.classList.remove("show"),body.style.overflow="unset",overlay.style.display="none"):(nav.classList.add("show"),body.style.overflow="hidden",overlay.style.display="block")};window.addEventListener("click",function(e){e.target.classList.contains("overlay")&&mobileMenuToggle()}),window.addEventListener("scroll",function(){260<=window.pageYOffset?(nav.classList.add("scrolling-down"),nav.classList.remove("scrolling-up")):(nav.classList.add("scrolling-up"),nav.classList.remove("scrolling-down"))});