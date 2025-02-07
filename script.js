document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const cartBtn = document.getElementById("cart-btn");
    const cartCount = document.getElementById("cart-count");
    const cartModal = document.getElementById("cart-modal");
    const closeModal = document.querySelector(".close");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout");

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseInt(this.getAttribute("data-price"));

            cart.push({ name, price });
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ${item.price} تومان`;
            cartItems.appendChild(li);
            total += item.price;
        });

        totalPrice.textContent = total;
        cartCount.textContent = cart.length;
    }

    cartBtn.addEventListener("click", () => {
        cartModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    checkoutBtn.addEventListener("click", () => {
        alert("پرداخت انجام شد!");
        cart.length = 0;
        updateCart();
        cartModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = "none";
        }
    });
});

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} تومان`;
        
        // دکمه حذف برای هر آیتم اضافه کن
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "❌ حذف";
        removeBtn.style.marginLeft = "10px";
        removeBtn.style.color = "red";
        removeBtn.style.border = "none";
        removeBtn.style.cursor = "pointer";
        
        removeBtn.addEventListener("click", () => {
            cart.splice(index, 1);
            updateCart(); // به‌روزرسانی سبد خرید
        });

        li.appendChild(removeBtn);
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = total;
    cartCount.textContent = cart.length;
}

closeModal.addEventListener("click", () => {
    cartModal.style.display = "none";
});

// بستن سبد خرید با کلیک روی پس‌زمینه
window.addEventListener("click", (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = "none";
    }
});

modal-content {
    background: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
}

#cart-items li 
    list-style: none;
    padding: 10px;
    background: #f8f9fa;
    margin: 5px 0;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#checkout {
    background: #28a745;
    padding: 10px 15px;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
}

#checkout:hover {
    background: #218838;
}

function showNotification(message) {
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.right = "20px";
    notification.style.background = "#28a745";
    notification.style.color = "white";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "5px";
    notification.style.zIndex = "1000";
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}showNotification("✅ محصول به سبد خرید اضافه شد!");
function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} تومان`;

        // دکمه حذف برای هر محصول
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.style.marginLeft = "10px";
        removeBtn.style.color = "red";
        removeBtn.style.border = "none";
        removeBtn.style.cursor = "pointer";
        removeBtn.addEventListener("click", () => {
            cart.splice(index, 1);
            updateCart();
        });

        li.appendChild(removeBtn);
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = total;
    cartCount.textContent = cart.length;
}