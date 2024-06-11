
import { products } from "./listitems.js";

let selectedProduct = null;

// Function

function clickButtonInfo(productId) {
    selectedProduct = products.data.find(p => p.id === productId);

    if (selectedProduct) {
        localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
        return selectedProduct;
    } else {
        console.log('Product not found');
        return null;
    }
}


for (let i of products.data) {
    
    //card
    let productCard = document.createElement("div");

    //card category
    productCard.classList.add("productCard", i.category, "hide");

    //image container
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    //image tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);

    imageContainer.appendChild(image);

    productCard.appendChild(imageContainer);

    // container for data
    let dataContainer = document.createElement("div");
    dataContainer.classList.add("data-container");

    // product name
    let name = document.createElement("h2");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();

    // product price
    let price = document.createElement("span");
    price.innerText = i.price.toLocaleUpperCase();

    productCard.appendChild(dataContainer);

    // price and product container
    let titlePriceContainer = document.createElement("div");
    titlePriceContainer.classList.add("titlePriceContainer");
    titlePriceContainer.appendChild(name);
    titlePriceContainer.appendChild(price);
    dataContainer.appendChild(titlePriceContainer);

    // stars and reviews - container
    let reviewContainer = document.createElement("div");
    reviewContainer.classList.add("review-container")
    dataContainer.appendChild(reviewContainer);

    // stars
    let stars = document.createElement("object");
    stars.setAttribute("type", "image/svg+xml");
    stars.setAttribute("data", i.svgLink);

    stars.onload = function() {
        let svgDocument = stars.contentDocument;
        let paths = svgDocument.querySelectorAll("path");

        paths.forEach(function(path) {
            path.style.fill = "#2563EB";
        });
    };
    


    reviewContainer.appendChild(stars);




    //reviews
    let review = document.createElement("span");
    review.innerText = i.reviews.toString();
    reviewContainer.appendChild(review);


    //buttons container
    let buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");
    dataContainer.appendChild(buttonsContainer);

    //buttons

    let buyButton = document.createElement("button");
    buyButton.classList.add("buy-button");
    buyButton.setAttribute("data-id", i.id);
    buttonsContainer.appendChild(buyButton);
    let buyButtonText = document.createTextNode("Buy now");
    buyButton.appendChild(buyButtonText);

    buyButton.addEventListener("click", function() {
        const productId = parseInt(this.getAttribute("data-id"), 10);
        clickButtonInfo(productId);

        window.location.href = "buysection.html";
    })


    let wishButton = document.createElement("button");
    wishButton.classList.add("wish-button");
    buttonsContainer.appendChild(wishButton);
    let wishButtonText = document.createTextNode("Add to cart");
    wishButton.appendChild(wishButtonText);


    document.getElementById("productsContainer").appendChild(productCard);
}

// function filterProduct(value) --> x Uncaught ReferenceError: filterProduct is not defined

window.filterProduct = function(value) {
    let filterButtons = document.querySelectorAll(".button-filters");

    filterButtons.forEach((button) => {
        
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    })

    let elements = document.querySelectorAll(".productCard");

    elements.forEach((element) => {

        if(value == "all") {
            element.classList.remove("hide");
            element.classList.add("show");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
                element.classList.add("show");
            } else {
                element.classList.remove("show");
                element.classList.add("hide");
            }
        }
    });
}

document.getElementById("searchButton").addEventListener("click", () => {

    let searchInput = document.getElementById("search-input").value;
    
    let elementsName = document.querySelectorAll(".product-name");

    let cards = document.querySelectorAll(".productCard");

    elementsName.forEach((element,index) => {

        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
            cards[index].classList.add("show");
        }
        else {
            cards[index].classList.add("hide");
            cards[index].classList.remove("show");
        }
    });
});

// Buy section

document.addEventListener("DOMContentLoaded", () => {

});

window.onload = () => {
    filterProduct("all");
}

console.log(products.data);