
// Products create DOM and filters

let products = {
    data: [
        {
            productName: "RTX 4070 TI",
            category: "graphicCard",
            price: "780 USD",
            image: "../img/3.webp",
            reviews: "(75)",
            total: "100",
            svgLink: "../img/svg-stars.svg",
        },
        {
            productName: "LOGITECH G PRO",
            category: "mouse",
            price: "53 USD",
            image: "../img/2.webp",
            reviews: "(452)",
            total: "525",
            svgLink: "../img/svg-stars.svg",
        },
        {
            productName: "RX 7900 GRE",
            category: "graphicCard",
            price: "590 USD",
            image: "../img/5.webp",
            reviews: "(105)",
            total: "133",
            svgLink: "../img/svg-stars.svg",
        },
        {
            productName: "LOGITECH G355",
            category: "headset",
            price: "57 USD",
            image: "../img/1.webp",
            reviews: "(98)",
            total: "102",
            svgLink: "../img/svg-stars.svg",
        },
        {
            productName: "RYZEN 5 5600",
            category: "processor",
            price: "133 USD",
            image: "../img/6.webp",
            reviews: "(755)",
            total: "844",
            svgLink: "../img/svg-stars.svg",
        },
        {
            productName: "GT 1030",
            category: "graphicCard",
            price: "64 USD",
            image: "../img/4.webp",
            reviews: "(34)",
            total: "65",
            svgLink: "../img/svg-stars.svg",
        },
        {
            productName: "Gigabyte B450 V2",
            category: "motherboard",
            price: "117 USD",
            image: "../img/7mother.webp",
            reviews: "(560)",
            total: "720",
            svgLink: "../img/svg-stars.svg",
        },
        {
            productName: "MSI B760 PLUS",
            category: "motherboard",
            price: "163 USD",
            image: "../img/8mother.jpg",
            reviews: "(265)",
            total: "300",
            svgLink: "../img/svg-stars.svg",
        },
        {
            productName: "Intel I5-21400F",
            category: "processor",
            price: "133 USD",
            image: "../img/9proc.webp",
            reviews: "(1575)",
            total: "1800",
            svgLink: "../img/svg-stars.svg",
        },
        {
            productName: "Intel I7-13700K",
            category: "processor",
            price: "389 USD",
            image: "../img/10core.webp",
            reviews: "(262)",
            total: "300",
            svgLink: "../img/svg-stars.svg",
        },
        {
            productName: "Kingston FURY 3200MHz 2x8",
            category: "ram",
            price: "54 USD",
            image: "../img/11ram.webp",
            reviews: "(143)",
            total: "400",
            svgLink: "../img/svg-stars.svg",
        },
        {
            productName: "Corsair 2300MHz 2x8",
            category: "ram",
            price: "45 USD",
            image: "../img/12ram.webp",
            reviews: "(5051)",
            total: "5700",
            svgLink: "../img/svg-stars.svg",
        },
        {
            productName: "Razer Viper V3",
            category: "mouse",
            price: "110 USD",
            image: "../img/13mouse.jpg",
            reviews: "(95)",
            total: "120",
            svgLink: "../img/svg-stars.svg",
        },
        {
            productName: "HyperX Cloud Orbit S",
            category: "headset",
            price: "362 USD",
            image: "../img/14head.jpg",
            reviews: "(22)",
            total: "30",
            svgLink: "../img/svg-stars.svg",
        },
        {
            productName: "Thermaltake 600W 80 Plus",
            category: "power",
            price: "102 USD",
            image: "../img/15power.webp",
            reviews: "(13)",
            total: "17",
            svgLink: "../img/svg-stars.svg",
        },
    ]
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
    buttonsContainer.appendChild(buyButton);
    let buyButtonText = document.createTextNode("Buy");
    buyButton.appendChild(buyButtonText);

    let wishButton = document.createElement("button");
    wishButton.classList.add("wish-button");
    buttonsContainer.appendChild(wishButton);
    let wishButtonText = document.createTextNode("Wishlist");
    wishButton.appendChild(wishButtonText);


    document.getElementById("productsContainer").appendChild(productCard);
}

function filterProduct(value) {
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


window.onload = () => {
    filterProduct("all");
}

console.log(products.data);