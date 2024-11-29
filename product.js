const product = document.querySelector(".navbar-nav li:first-child a");
product.classList.add("active");

let productData, productStr = '';

axios.get("https://ec-course-api.hexschool.io/v2/api/hex-project/products/all")
  .then(function (response) {
    productData = response.data.products;
    renderProductList()
});

function renderProductList() {
    const productList = document.querySelector(".product-list ul");
    productData.forEach(function (product, i) {
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
            <button type="button" class="btn btn-sm p-0 text-center btn-white like-btn" data-productid="${product.id}">
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
        </li>`;
    });

    productList.innerHTML = productStr
    listenLikeBtn()
}

let likeList = localStorage.getItem('likeList').split(',') || []

function listenLikeBtn() {
    const likeBtns = document.querySelectorAll('.like-btn')
    likeBtns.forEach(function(btn, i) {
        btn.addEventListener('click', function(e) {
            let clickedId = btn.dataset.productid

            let inLikeList = false
            likeList.forEach(function(id, j) {
                if (id === clickedId) {
                    inLikeList = true
                    return
                }
            })
            if (!inLikeList) {
                likeList.push(clickedId)
                localStorage.setItem('likeList', likeList)
            }

        })
    })
}

