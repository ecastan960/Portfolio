function fixNav(){const e=document.querySelector(".header");new IntersectionObserver((function(t){t[0].isIntersecting?e.classList.remove("fix"):e.classList.add("fix")})).observe(document.querySelector(".about-festival"))}function scrollnav(){document.querySelectorAll(".nav-principal a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))}function createGallery(){const e=document.querySelector(".gallery-images");for(i=1;i<13;i++){const t=document.createElement("img");t.src=`build/img/thumb/${i}.webp`,t.dataset.imageId=i,t.onclick=showImage;const n=document.createElement("li");n.appendChild(t),e.appendChild(n)}}function showImage(e){console.log(e.target.dataset.imageId);const t=parseInt(e.target.dataset.imageId),n=document.createElement("img");n.src=`build/img/grande/${t}.webp`;const o=document.createElement("div");o.appendChild(n),o.classList.add("overlay"),o.onclick=function(){o.remove()};const c=document.createElement("p");c.textContent="X",c.classList.add("btn-close"),c.onclick=function(){o.remove()},o.appendChild(c);const a=document.querySelector("body");a.appendChild(o),a.classList.add("fix-body")}document.addEventListener("DOMContentLoaded",(function(){scrollnav(),fixNav()})),document.addEventListener("DOMContentLoaded",(function(){createGallery()}));
//# sourceMappingURL=bundle.js.map