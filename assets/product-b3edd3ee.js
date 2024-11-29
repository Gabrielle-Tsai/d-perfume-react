import"./bootstrap.min-2ae76945.js";import"https://unpkg.com/axios@1.6.7/dist/axios.min.js";const r=document.querySelector(".navbar-nav li:first-child a");r.classList.add("active");let c,o="";axios.get("https://ec-course-api.hexschool.io/v2/api/hex-project/products/all").then(function(e){c=e.data.products,d()});function d(){const e=document.querySelector(".product-list ul");c.forEach(function(t,s){o+=`<li class="col card border-0">
          <a href="#" class="link-dark text-decoration-none">
            <img src="${t.image}" alt="Poppy & Barley"
              class="card-img-top rounded-0 object-fit-cover object-position-center">
            <h5 class="card-title fw-bold mb-0">${t.title}</h5>
          </a>
          <div class="card-body p-0">
            <div class="card-text mb-1">Jo Malone</div>
            <p>NT$${t.price}<span class="text-muted text-decoration-line-through ms-2">NT$${t.origin_price}</span></p>
          </div>
          <div class="card-function">
            <button type="button" class="btn btn-sm p-0 text-center btn-white like-btn" data-productid="${t.id}">
              <span class="material-icons material-symbols-outlined text-primary">
                favorite
              </span>
            </button>
            <button type="button" class="btn btn-sm p-0 text-center btn-white">
              <span class="material-icons material-symbols-outlined text-primary">
                shopping_cart
              </span>
            </button>
          </div>
        </li>`}),e.innerHTML=o,p()}let i=localStorage.getItem("likeList").split(",")||[];function p(){document.querySelectorAll(".like-btn").forEach(function(t,s){t.addEventListener("click",function(u){let a=t.dataset.productid,n=!1;i.forEach(function(l,m){if(l===a){n=!0;return}}),n||(i.push(a),localStorage.setItem("likeList",i))})})}
