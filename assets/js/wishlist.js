const wishlist = document.querySelector(".navbar-nav li:nth-child(5) a");
wishlist.classList.add("active");

let productData, productStr = "";
let likeList = localStorage.getItem('likeList').split(',')
let likeData = []

axios
  .get("https://ec-course-api.hexschool.io/v2/api/hex-project/products/all")
  .then(function (response) {
    productData = response.data.products;
    renderLikeList();
  });

function renderLikeList() {
  likeData = productData.filter(function (product) {
    return likeList.includes(product.id);
  });
  
  const likeListDiv = document.querySelector(".product-list ul");
  productStr = ""
  likeData.forEach(function (product, i) {
    productStr += `<li class="col card border-0">
          <a href="#" class="link-dark text-decoration-none">
            <img src="${product.image}" alt="Poppy & Barley"
              class="card-img-top rounded-0 object-fit-cover object-position-center">
            <h5 class="card-title fw-bold mb-0">${product.title}</h5>
          </a>
          <div class="card-body p-0">
            <div class="card-text mb-1">Jo Malone</div>
            <p>NT$${product.price}<span class="text-muted text-decoration-line-through ms-2">NT$${product.origin_price}</span></p>
          </div>
          <div class="card-function">
            <button type="button" class="btn btn-sm p-0 text-center btn-white dislike-btn" data-productid="${product.id}">
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
        </li>`;
  });

  likeListDiv.innerHTML = productStr;
  bindDislike()
}

function bindDislike() {
  const dislikeBtn = document.querySelectorAll('.dislike-btn')
  dislikeBtn.forEach(function(btn, i) {
    btn.addEventListener('click', function(e) {
      const id = btn.dataset.productid
      const index = likeList.indexOf(id)
      likeList.splice(index, 1)
      localStorage.setItem('likeList', likeList)
      renderLikeList()
    })
  })
}