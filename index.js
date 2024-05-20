function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


function addToCart(itemName, price, imageUrl) {
    var cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    
    var itemIndex = cartItems.findIndex(function(item) {
        return item.name === itemName;
    });
    
    if (itemIndex === -1) {
        cartItems.push({ name: itemName, price: price, image: imageUrl, quantity: 1 });
    } else {
        cartItems[itemIndex].quantity++;
    }
    
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    var cartCount = document.getElementById('cartCount');
    cartCount.textContent = calculateTotalItems(cartItems);
}

function calculateTotalItems(cartItems) {
    var totalItems = 0;
    cartItems.forEach(function(item) {
        totalItems += item.quantity;
    });
    return totalItems;
}

document.addEventListener('DOMContentLoaded', function() {
    var cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    var cartCount = document.getElementById('cartCount');
    cartCount.textContent = calculateTotalItems(cartItems);
});