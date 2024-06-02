
let cartFull = document.getElementById("fullCart");

let alertMessage = document.getElementById("alertMessage-container");

cartFull.classList.add("hidesvg");

alertMessage.classList.add("hide")

const addToCart = document.addEventListener("click", function() {

    let wishlist = document.querySelectorAll(".wishlisted-button");

    let wishButton = document.querySelectorAll(".wish-button");

    let cartEmpty = document.getElementById("emptyCart");

    wishButton.forEach(function(buttons) {
        
        buttons.addEventListener("click", function() {

            wishlist.forEach(function(color) {

                color.classList.add("coloredWishButton");

                cartEmpty.classList.add("hidesvg");

                cartFull.classList.add("showsvg");

                alertMessage.classList.remove("hide");
                alertMessage.classList.add("show");

                setTimeout(function () {
                    alertMessage.classList.remove("show");
                    alertMessage.classList.add("hide");
                }, 3000);
            })
        })
    })
})
