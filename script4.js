// Initialize cart and total amount
let cart = [];
let totalAmount = 0;

// Function to add item to the cart
function addToCart(productName, productPrice) {
  const item = { name: productName, price: parseFloat(productPrice) };
  cart.push(item);

  // Update total amount
  totalAmount += item.price;

  // Update the UI
  updateCartUI();
}

// Function to remove item from the cart
function removeFromCart(index) {
  if (index >= 0 && index < cart.length) {
    totalAmount -= cart[index].price; // Deduct the price
    cart.splice(index, 1); // Remove the item from cart

    // Update the UI
    updateCartUI();
  }
}

// Function to update the cart display
function updateCartUI() {
  const cartItemsElement = document.getElementById("cart-items");
  const totalAmountElement = document.getElementById("total-amount");

  // Clear current cart display
  cartItemsElement.innerHTML = "";

  // Display each cart item with a delete button
  cart.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.style.marginLeft = "10px";
    deleteButton.onclick = () => removeFromCart(index);
    listItem.appendChild(deleteButton);
    cartItemsElement.appendChild(listItem);
  });

  // Update the total amount
  totalAmountElement.textContent = `Total: ₹${totalAmount.toFixed(2)}`;
}

// Attach event listeners to all "Add to Cart" buttons
document.querySelectorAll(".addtocart").forEach((button) => {
  button.addEventListener("click", () => {
    const productCard = button.closest(".card-body");
    const productName = productCard.querySelector(".productname").textContent;
    const productPrice = productCard.querySelector(".price").textContent.replace("₹", "");
    addToCart(productName, productPrice);
  });
});
