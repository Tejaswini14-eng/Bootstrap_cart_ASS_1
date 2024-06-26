// Sample data of items with their details
const items = [
    { id: 1, name: 'T-Shirt', price: 500 },
    { id: 2, name: 'Jeans', price: 1500 },
    { id: 3, name: 'Shoes', price: 2500 },
    { id: 4, name: 'Watch', price: 3000 },
    { id: 5, name: 'Sunglasses', price: 1000 }
];

// Initialize cart and total
let cart = [];
let total = 0;

// Function to display items in the item list
function displayItems() {
    const itemList = document.getElementById('item-list');

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ${item.price} RS</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        itemList.appendChild(itemDiv);
    });
}

// Function to add item to cart
function addToCart(itemId) {
    const selectedItem = items.find(item => item.id === itemId);

    if (selectedItem) {
        cart.push(selectedItem);
        total += selectedItem.price;
        updateCart();
    }
}

// Function to update cart display
function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear previous cart items
    cartItemsList.innerHTML = '';

    // Display current cart items
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - ${item.price} RS`;
        cartItemsList.appendChild(cartItem);
    });

    // Update total
    cartTotal.textContent = total;
}

// Function to handle checkout
function checkout() {
    alert(`Total amount: ${total} RS\nThank you for shopping with us!`);
    clearCart();
}

// Function to clear cart
function clearCart() {
    cart = [];
    total = 0;
    updateCart();
}

// Event listeners
document.getElementById('checkout-btn').addEventListener('click', checkout);
document.getElementById('clear-cart-btn').addEventListener('click', clearCart);

// Initial display of items on page load
displayItems();
