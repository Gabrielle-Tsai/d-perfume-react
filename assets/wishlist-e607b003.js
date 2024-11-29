import"./bootstrap.min-2ae76945.js";import"https://unpkg.com/axios@1.6.7/dist/axios.min.js";const d=document.querySelector(".navbar-nav li:nth-child(5) a");d.classList.add("active");let a,n="",i=localStorage.getItem("likeList").split(","),s=[];axios.get("https://ec-course-api.hexschool.io/v2/api/hex-project/products/all").then(function(e){a=e.data.products,o()});function o(){s=a.filter(function(t){return i.includes(t.id)});const e=document.querySelector(".product-list ul");n="",s.forEach(function(t,c){n+=`<li class="col card border-0">
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
            <button type="button" class="btn btn-sm p-0 text-center btn-white dislike-btn" data-productid="${t.id}">
              <span class="material-icons material-symbols-outlined text-primary">
                heart_broken
              </span>
            </button>
            <button type="button" class="btn btn-sm p-0 text-center btn-white">
              <span class="material-icons material-symbols-outlined text-primary">
                shopping_cart
              </span>
            </button>
          </div>
        </li>`}),e.innerHTML=n,p()}function p(){document.querySelectorAll(".dislike-btn").forEach(function(t,c){t.addEventListener("click",function(u){const l=t.dataset.productid,r=i.indexOf(l);i.splice(r,1),localStorage.setItem("likeList",i),o()})})}
