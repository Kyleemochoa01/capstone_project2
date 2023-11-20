document.addEventListener("DOMContentLoaded", () => {
    const categorySelect = document.getElementById("category-select");
 
    categorySelect.addEventListener("change", filtermountainsArray)
    
    displayMountains(mountainsArray);
})

function filterMountains() {
    const category = document.getElementById("category-select").value

    
    let filteredMountainsArray = Mountains;
    {  
        filteredMountainsArray = Mountains.filter(p => p.category == category);
    }
    
    displayMountains(filteredMountainsArray);
}

function displayMountains(mountainsArray) {

    const mountainsContainer = document.querySelector("#content")
    
    mountainsContainer.innerHTML = "";

    mountain.forEach(mountainsArray => {

        displayMountains(mountainsArray, mountainsContainerContainer)
        
    });
}

function displayProduct(product, parentDiv) {

    const productDiv = document.createElement("div");
    productDiv.classList.add("product") ;
    productDiv.id = "product-" + product.productId ;
    
    parentDiv.appendChild(productDiv);

    addProductHeader(product, productDiv);
    addImageRow(product, productDiv);
    addDescription(product, productDiv);
    addCartButton(product, productDiv);
}

function addProductHeader(product, productDiv) {
    


    const productInfoDiv = document.createElement("div");
    productDiv.appendChild(productInfoDiv);


    const productHeader = document.createElement("h4")
    productHeader.innerText = product.name;
    productInfoDiv.appendChild(productHeader);
}

function addImageRow(product, parent) {

    const imageRow = document.createElement("div");
    imageRow.classList.add("photo")
    parent.appendChild(imageRow)

    const img = document.createElement("img");
    img.src = "images/products/" + product.imageUrl
    imageRow.appendChild(img)

}
  