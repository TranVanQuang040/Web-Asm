window.onload = function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("Cart Data:", cart); // Debug dữ liệu cart

    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        cartTotalContainer.innerHTML = "<h3>Total: $0</h3>";
    } else {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            item.price = parseFloat(item.price); // Ép kiểu số cho giá
            if (isNaN(item.price)) {
                console.error(`Product ${item.name} has an invalid price:`, item.price);
                return;
            }

            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");

            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price.toLocaleString()}</p>
                    <div class="quantity-control">
                        <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                    <p>Total: $${(item.price * item.quantity).toLocaleString()}</p>
                    <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;

            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        cartTotalContainer.innerHTML = `<h3>Total: $${total.toLocaleString()}</h3>`;
    }
};

// Cập nhật số lượng sản phẩm
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity < 1) {
            cart.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    }
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}

// Xóa toàn bộ giỏ hàng
function clearCart() {
    localStorage.removeItem('cart');
    alert('Your cart has been cleared.');
    location.reload();
}

// Thanh toán (tạm thời chỉ alert)
function checkout() {
    alert("Proceeding to checkout...");
}
