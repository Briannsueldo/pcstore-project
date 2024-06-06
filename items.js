
// Products create DOM and filters

/* let products = {
    data: [
        {
            id: 1,
            productName: "RTX 4070 TI",
            category: "graphicCard",
            price: "780 USD",
            image: "../img/3.webp",
            reviews: "(75)",
            total: "100",
            svgLink: "../img/svg-stars.svg",
        },
        {
            id: 2,
            productName: "LOGITECH G PRO",
            category: "mouse",
            price: "53 USD",
            image: "../img/2.webp",
            reviews: "(452)",
            total: "525",
            svgLink: "../img/svg-stars.svg",
        },
        {
            id: 3,
            productName: "RX 7900 GRE",
            category: "graphicCard",
            price: "590 USD",
            image: "../img/5.webp",
            reviews: "(105)",
            total: "133",
            svgLink: "../img/svg-stars.svg",
        },
        {
            id: 4,
            productName: "LOGITECH G355",
            category: "headset",
            price: "57 USD",
            image: "../img/1.webp",
            reviews: "(98)",
            total: "102",
            svgLink: "../img/svg-stars.svg",
        },
        {
            id: 5,
            productName: "RYZEN 5 5600",
            category: "processor",
            price: "133 USD",
            image: "../img/6.webp",
            reviews: "(755)",
            total: "844",
            svgLink: "../img/svg-stars.svg",
        },
        {
            id: 6,
            productName: "GT 1030",
            category: "graphicCard",
            price: "64 USD",
            image: "../img/4.webp",
            reviews: "(34)",
            total: "65",
            svgLink: "../img/svg-stars.svg",
        },
        {
            id: 7,
            productName: "Gigabyte B450 V2",
            category: "motherboard",
            price: "117 USD",
            image: "../img/7mother.webp",
            reviews: "(560)",
            total: "720",
            svgLink: "../img/svg-stars.svg",
        },
        {
            id: 8,
            productName: "MSI B760 PLUS",
            category: "motherboard",
            price: "163 USD",
            image: "../img/8mother.jpg",
            reviews: "(265)",
            total: "300",
            svgLink: "../img/svg-stars.svg",
        },
        {
            id: 9,
            productName: "Intel I5-21400F",
            category: "processor",
            price: "133 USD",
            image: "../img/9proc.webp",
            reviews: "(1575)",
            total: "1800",
            svgLink: "../img/svg-stars.svg",
        },
        {
            id: 10,
            productName: "Intel I7-13700K",
            category: "processor",
            price: "389 USD",
            image: "../img/10core.webp",
            reviews: "(262)",
            total: "300",
            svgLink: "../img/svg-stars.svg",
        },
        {
            id: 11,
            productName: "Kingston FURY 3200MHz 2x8",
            category: "ram",
            price: "54 USD",
            image: "../img/11ram.webp",
            reviews: "(143)",
            total: "400",
            svgLink: "../img/svg-stars.svg",
        },
        {
            id: 12,
            productName: "Corsair 2300MHz 2x8",
            category: "ram",
            price: "45 USD",
            image: "../img/12ram.webp",
            reviews: "(5051)",
            total: "5700",
            svgLink: "../img/svg-stars.svg",
        },
        {
            id: 13,
            productName: "Razer Viper V3",
            category: "mouse",
            price: "110 USD",
            image: "../img/13mouse.jpg",
            reviews: "(95)",
            total: "120",
            svgLink: "../img/svg-stars.svg",
        },
        {
            id: 14,
            productName: "HyperX Cloud Orbit S",
            category: "headset",
            price: "362 USD",
            image: "../img/14head.jpg",
            reviews: "(22)",
            total: "30",
            svgLink: "../img/svg-stars.svg",
        },
        {
            id: 15,
            productName: "Thermaltake 600W 80 Plus",
            category: "power",
            price: "102 USD",
            image: "../img/15power.webp",
            reviews: "(13)",
            total: "17",
            svgLink: "../img/svg-stars.svg",
        },
    ]
} */

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
    dataContainer.appendChild(name);

    // product price
    let price = document.createElement("span");
    price.innerText = i.price.toLocaleUpperCase();
    dataContainer.appendChild(price);

    productCard.appendChild(dataContainer);

    

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