document.addEventListener('DOMContentLoaded', function () {
  const productList = document.getElementById('product-list');
  const shoppingCart = document.getElementById('shopping-cart');

  // Sample product data
  const products = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 20 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  // Retrieve cart data from session storage or initialize an empty cart
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

  // Function to render product list
  function renderProductList() {
    productList.innerHTML = '';
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <p>${product.name} - $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productElement);
    });
  }

  // Function to render shopping cart
  function renderShoppingCart() {
    shoppingCart.innerHTML = '';
    cart.forEach(item => {
      const cartItem = document.createElement('li');
      cartItem.textContent = `${item.name} - $${item.price}`;
      shoppingCart.appendChild(cartItem);
    });
  }

  // Function to add product to cart
  window.addToCart = function (productId) {
    const productToAdd = products.find(product => product.id === productId);
    cart.push(productToAdd);
    updateCart();
  };

  // Function to update cart in session storage and render the cart
  function updateCart() {
    sessionStorage.setItem('cart', JSON.stringify(cart));
    renderShoppingCart();
  }

  // Initial rendering
  renderProductList();
  renderShoppingCart();
});
