
// Products create DOM and filters

let products = {
    data: [
        {
            productName: "RTX 4070 TI",
            category: "graphicCard",
            price: "780 USD",
            image: "../img/3.webp",
            reviews: "75 Reviews",
        },
        {
            productName: "LOGITECH G PRO",
            category: "mouse",
            price: "53 USD",
            image: "../img/2.webp",
            reviews: "452 Reviews",
        },
        {
            productName: "RX 7900 GRE",
            category: "graphicCard",
            price: "590 USD",
            image: "../img/5.webp",
            reviews: "105 Reviews",
        },
        {
            productName: "LOGITECH G355",
            category: "headset",
            price: "57 USD",
            image: "../img/1.webp",
            reviews: "98 Reviews",
        },
        {
            productName: "RYZEN 5 5600",
            category: "processor",
            price: "133 USD",
            image: "../img/6.webp",
            reviews: "755 Reviews",
        },
        {
            productName: "GT 1030",
            category: "graphicCard",
            price: "64 USD",
            image: "../img/4.webp",
            reviews: "34 Reviews",
        },
    ]
}

for (let i of products.data) {
    
    //card
    let productCard = document.createElement("div");

    //card category
    productCard.classList.add("productCard", "i.category");

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

    /* let stars = document.createElement("img");
    stars.setAttribute("src", i.svg);
    reviewContainer.appendChild(stars); */

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

console.log(products.data);