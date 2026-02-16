// showing all products

const allProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => showAllProducts(data));
};

const showAllProducts = (allProducts) => {
  //console.log(allProducts)
  const allProductsCard = document.getElementById("all-products-card");
  allProductsCard.innerHTML = "";
  allProducts.forEach((product) => {
    const showAllProductCard = document.createElement("div");

    showAllProductCard.innerHTML = `
       

        <div class="card bg-base-100 w-70 shadow-sm gap-4 h-full">
        
         <figure class="h-full">
    <img 
      src=${product.image}
      alt="shirt" />
  </figure>
  <div class="card-body">
    <div class="flex justify-between ">
        <h2 class="rounded-full border-2 p-1">${product.category}</h2>
        <div class="flex gap-1 justify-end">
            <a><i class="fa-regular fa-star"></i></a>
            <p>${product.rating.rate}</p>
            <p>${product.rating.count}</p>
        </div>
    </div>
    
    <p>${product.title}</p>
     <p>${product.price}</p>
    <div class="card-actions flex justify-between">
      <button onclick='hello(${product.id})' class="btn"><i class="fa-regular fa-eye"></i> Details</button>
      <button class="btn btn-primary"> <i class="fa-solid fa-cart-shopping"></i>Add</button>
    </div>



    
  </div>


        </div>


        
        
        `;

    allProductsCard.append(showAllProductCard);
  });
};

// showing all buttons category wise

const allButtons = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => showAllButton(data));
};

const showAllButton = (buttons) => {
  const allButtons = document.getElementById("all-button");
  buttons.forEach((button) => {
    const showButtons = document.createElement("button");
    const safeButton = button.replace(/'/g, "\\'");
    showButtons.innerHTML = `
     <button onclick="showCategoryWiseProducts('${safeButton}')" class="btn btn-outline btn-primary rounded-full">${button}</button>
    `;
    allButtons.append(showButtons);
  });
};

//showing products category wise

const showCategoryWiseProducts = (category) => {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .then((data) => displayCategoryWiseProducts(data));
};

const displayCategoryWiseProducts = (products) => {
  const showProducts = document.getElementById("all-products-card");
  showProducts.innerHTML = " ";
  products.forEach((product) => {
    const showAllProductCard = document.createElement("div");

    showAllProductCard.innerHTML = `
       

        <div class="card bg-base-100 w-70 shadow-sm gap-4 h-full">
        
         <figure class="h-full">
    <img 
      src=${product.image}
      alt="shirt" />
  </figure>
  <div class="card-body">
    <div class="flex justify-between ">
        <h2 class="rounded-full border-2 p-1">${product.category}</h2>
        <div class="flex gap-1 justify-end">
            <a><i class="fa-regular fa-star"></i></a>
            <p>${product.rating.rate}</p>
            <p>${product.rating.count}</p>
        </div>
    </div>
    
    <p>${product.title}</p>
     <p>${product.price}</p>
    <div class="card-actions flex justify-between">
      <button id="modal-button" onclick="hello(${product.id})" class="btn"><i class="fa-regular fa-eye"></i> Details</button>
      <button class="btn btn-primary"> <i class="fa-solid fa-cart-shopping"></i>Add</button>
    </div>



    
  </div>


        </div>


        
        
        `;
    showProducts.append(showAllProductCard);
  });
};

//trending product

const tredndingProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => showATrendingProduct(data));
};

const showATrendingProduct = (allProducts) => {
  const allProductsCard = document.getElementById("trending-product");
  allProductsCard.innerHTML = "";
  allProducts.slice(0, 3).forEach((product) => {
    const showAllProductCard = document.createElement("div");

    showAllProductCard.innerHTML = `
                   <div class="card bg-base-100 h-full shadow-sm">
  <figure class="h-full">
    <img class="w-40"
      src=${product.image}
      alt="shirt" />
  </figure>
  <div class="card-body">
    <div class="flex justify-between ">
    <h2 class="rounded-full border-2 p-1">${product.category}</h2>
        <div class="flex gap-1 justify-end">
            <a><i class="fa-regular fa-star"></i></a>
            <p>${product.rating.rate}</p>
            <p>${product.rating.count}</p>
        </div>
    </div>
    
    <p>${product.title}</p>
    <p>${product.price}</p>
    <div class="card-actions flex justify-between">
      <button  onclick ="hello(${product.id})" class="btn" ><i class="fa-regular fa-eye"></i> Details</button>
      <button class="btn btn-primary"> <i class="fa-solid fa-cart-shopping"></i>Add</button>
    </div>



    
  </div>
</div>
       

       


        
        
        `;


        

    allProductsCard.append(showAllProductCard);
  });
};

const setActiveHome = () => {
  document.getElementById("homePageSection").classList.remove("hidden");
  document.getElementById("allProductsSection").classList.add("hidden");
};

const setActiveProduct = () => {
  const allProductsSection = document.getElementById("allProductsSection");
  allProductsSection.classList.remove("hidden");

  document.getElementById("homePageSection").classList.add("hidden");
};

document.getElementById("home").onclick = setActiveHome;
document.getElementById("home-2").onclick = setActiveHome;
document.getElementById("products").onclick = setActiveProduct;
document.getElementById("products-2").onclick = setActiveProduct;
allProducts();
allButtons();
tredndingProducts();

const hello = (productId) => {
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => response.json())
    .then(d =>
      {
          document.getElementById("div-container").innerHTML = `



        <div class="card bg-base-100 h-full shadow-sm">
  <figure class="h-full">
    <img class="w-40"
      src=${d.image}
      alt="shirt" />
  </figure>
  <div class="card-body">
    <div class="flex justify-between ">
    <h2 class="rounded-full border-2 p-1">${d.category}</h2>

        <div class="flex gap-1 justify-end">
            <a><i class="fa-regular fa-star"></i></a>
             <p>${d.rating.rate}</p>
            <p>${d.rating.count}</p>
        </div>
    </div>
    
    <p>${d.title}</p>
    <p>${d.price}</p>
         <h2 class=" p-4">${d.description}</h2>
    <div class="card-actions flex justify-between">
      
      <button class="btn btn-primary"> <i class="fa-solid fa-cart-shopping"></i>Add</button>
    </div>



    
  </div>
</div> 
       

        
        
        
        
        `;



        document.getElementById('my_modal_5').showModal()
    }
      ,
    );
};
