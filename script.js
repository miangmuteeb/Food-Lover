function email() {
    var emailValue = document.getElementById("emailwrite").value;
    if (!emailValue) {
        Toastify({
            text: "Write Your Email Address",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
}
document.addEventListener('DOMContentLoaded', function () {
  const productOptions = {
      pizza: [
          { name: 'Margherita', price:250 },
          { name: 'Pepperoni', price: 350 },
          { name: 'Vegetarian', price: 450 }
      ],
      fries: [
          { name: 'Regular', price: 450},
          { name: 'Cheese Fries', price: 578 },
          { name: 'Chili Cheese Fries', price: 479 }
      ],
      burger: [
          { name: 'Classic Burger', price: 459 },
          { name: 'Cheeseburger', price: 610 },
          { name: 'Bacon Burger', price: 811 }
      ],
      shawarma: [
          { name: 'Chicken Shawarma', price: 478 },
          { name: 'Beef Shawarma', price: 989 },
          { name: 'Falafel Wrap', price: 787 }
      ]
  };
  

  const productTypeSelect = document.getElementById('productType');
  const productOptionsDiv = document.getElementById('productOptions');

  productTypeSelect.addEventListener('change', function () {
      const selectedProduct = this.value;
      const options = productOptions[selectedProduct];

      if (!options) return;

      const optionsHTML = options.map(option => `
          <div class="form-check">
              <input class="form-check-input" type="radio" name="productOption" id="${option.name}" value="${option.price}">
              <label class="form-check-label" for="${option.name}">
                  ${option.name} - $${option.price}
              </label>
          </div>
      `).join('');

      productOptionsDiv.innerHTML = optionsHTML;
  });

  const orderForm = document.getElementById('orderForm');

  orderForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const selectedProduct = productTypeSelect.value;
      const selectedOption = document.querySelector('input[name="productOption"]:checked');

      if (!selectedOption) {
          Toastify({
              text: "Please select a product option",
              duration: 3000,
              close: true,
              gravity: "top",
              position: "right",
              backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)"
          }).showToast();
          return;
      }

      const productName = selectedOption.id;
      const productPrice = parseFloat(selectedOption.value);

      // Simulate placing order (displaying a toast notification)
      Toastify({
          text: `Order placed: ${productName} - $${productPrice.toFixed(2)}`,
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          backgroundColor: "linear-gradient(to right, #4b6cb7, #182848)"
      }).showToast();
  });
});
// Details for each ambience type
var ambienceDetails = {
    'cozy': "An intimate setting with soft lighting and comfortable seating.",
    'rooftop': "Enjoy breathtaking views and fresh air in our open-air rooftop area.",
    'lively': "A vibrant atmosphere with live music and energetic crowd."
};

// Display details of the selected ambience
document.addEventListener("DOMContentLoaded", function() {
    var detailsText = document.getElementById('detailsText');
    detailsText.innerHTML = "<p>" + ambienceDetails['cozy'] + "</p>";
});
