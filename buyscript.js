
const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

if (selectedProduct) {
    console.log(`Product name: ${selectedProduct.productName}`);
    console.log(`Product category: ${selectedProduct.category}`);
    console.log(`Product price: ${selectedProduct.price}`);
    console.log(`Product name complete: ${selectedProduct.completeName}`);
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

    imageElement.src = selectedProduct.image;

    titleElement.textContent = selectedProduct.completeName;

    categoryElement.textContent = selectedProduct.category;

    priceElement.textContent = `$${selectedProduct.price}`;

    promoElement.textContent = `$${discountPrice} USD`;

}

/* document.addEventListener("DOMContentLoaded", function() {

    const totalNumber = document.getElementById("quantity-number");

    if (totalNumber) {
        const addButton = document.getElementById("add-number");
        

        addButton.addEventListener("click", function () {
            
            let currentValue = parseInt(totalNumber.textContent, 10);
            totalNumber.textContent = currentValue + 1;
        });
    } else {
        const substractButton = document.getElementById("substract-number");

        substractButton.addEventListener("click", function () {

            let currentValue = parseInt(totalNumber.textContent, 10);
            totalNumber.textContent = currentValue - 1;
        });
    }
}) */

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

/* document.addEventListener("DOMContentLoaded", function() {
    const totalNumber = document.getElementById("quantity-number");
    const addButton = document.getElementById("add-number");
    const substractButton = document.getElementById("substract-number");

    addButton.addEventListener("click", function () {
        let currentValue = parseInt(totalNumber.value, 10) || 0;
        totalNumber.value = currentValue + 1;
    });

    substractButton.addEventListener("click", function () {
        let currentValue = parseInt(totalNumber.value, 10) || 0;
        totalNumber.value = Math.max(0, currentValue - 1);
    });
}); */