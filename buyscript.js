
const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

if (selectedProduct) {
    console.log(`Product name: ${selectedProduct.productName}`);
    console.log(`Product category: ${selectedProduct.category}`);
    console.log(`Product price: ${selectedProduct.price}`);
    console.log(`Product name complete: ${selectedProduct.completeName}`);
    console.log(`Product description ${selectedProduct.description}`);
} else {
    console.log(`Product not found`);
}

if (selectedProduct) {
    const imageElement = document.querySelector('.image-container img');
    const titleElement = document.querySelector('.title-container h2');
    const categoryElement = document.querySelector('.title-container span');
    // discount price
    const promoElement = document.querySelector('.price-container .promoPrice');
    const originalPrice = parseFloat(selectedProduct.price.replace(" USD", ""));
    const discountPrice = (originalPrice * 0.80).toFixed(2);
    // original price
    const priceElement = document.querySelector('.price-container .price');
    // container for images array, and images array deploy
    const carrouselElement = document.querySelector('.image-carrousel');
    // product detail container
    const detailsElement = document.querySelector('.details');
    // description container
    const descriptionElement = document.querySelector('.information-container span');

    imageElement.src = selectedProduct.image;

    titleElement.textContent = selectedProduct.completeName;

    categoryElement.textContent = selectedProduct.category;

    priceElement.textContent = `$${selectedProduct.price}`;

    promoElement.textContent = `$${discountPrice} USD`;

    // confirms if images is an array and then for every image inside of array create an img

    if (selectedProduct.images && Array.isArray(selectedProduct.images)) {

        selectedProduct.images.forEach(imageSrc => {
            const imgCarrousel = document.createElement('img');
            imgCarrousel.src = imageSrc;
            carrouselElement.appendChild(imgCarrousel);

            imgCarrousel.addEventListener("click", function () {
                console.log("imagen clickeada", imageSrc);

                const allImages = document.querySelectorAll('img');

                allImages.forEach(img => img.classList.remove("active"));

                imgCarrousel.classList.add("active");

                imageElement.src = imgCarrousel.src;
            });
        });
    }

    // products details

    if (selectedProduct.details && Array.isArray(selectedProduct.details)) {
        
        selectedProduct.details.forEach(detail => {
            const detailsSpan = document.createElement('div');

            const [label, value] = detail.split(':');

            const labelSpan = document.createElement('span');

            labelSpan.textContent = label + ':';
            labelSpan.classList.add('product-detail-label');

            const valueSpan = document.createElement('span');

            valueSpan.textContent = value;
            valueSpan.classList.add('product-detail-value');

            detailsSpan.appendChild(labelSpan);
            detailsSpan.appendChild(valueSpan);

            detailsSpan.classList.add('main-detail-container');

            detailsElement.appendChild(detailsSpan);
        });
    }

    // product description
    
    descriptionElement.textContent = selectedProduct.description;
}

// Quantity box

document.addEventListener("DOMContentLoaded", function() {

    const totalNumber = document.getElementById("quantity-number");
    const addButton = document.getElementById("add-number");
    const substractButton = document.getElementById("substract-number");

    if (totalNumber && addButton) {
        addButton.addEventListener("click", function () {
            let currentValue = parseInt(totalNumber.value, 10);
            totalNumber.value = Math.min(currentValue + 1, 99);
        });
    }

    if (totalNumber && substractButton) {
        substractButton.addEventListener("click", function () {
            let currentValue = parseInt(totalNumber.value, 10);
            totalNumber.value = Math.max(0, currentValue - 1);
        });
    }
});

