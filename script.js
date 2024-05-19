document.addEventListener("DOMContentLoaded", () => {
    const addToCartButton = document.getElementById("addToCartButton");
    const cartModal = document.getElementById("cartModal");
    const closeModal = document.querySelector(".close");
    const cartItems = document.getElementById("cartItems");
    const checkoutForm = document.getElementById("checkoutForm");

    let cart = [];

    addToCartButton.addEventListener("click", () => {
        const product = {
            name: "Product Name",
            description: "Product Description",
            price: 100
        };
        cart.push(product);
        updateCart();
        cartModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = "none";
        }
    });

    checkoutForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const email = document.getElementById("email").value;

        console.log("Order details:", {
            name,
            address,
            email,
            cart
        });

        alert("Purchase successful!");

        cart = [];
        updateCart();
        cartModal.style.display = "none";
    });

    function updateCart() {
        cartItems.innerHTML = "";
        cart.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(itemElement);
        });
    }
});
