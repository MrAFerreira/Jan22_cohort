// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('input').value;
  const subtotal = price * quantity;
  const subtotalSpan = product.querySelector('.subtotal span');
  console.log(subtotalSpan);
  subtotalSpan.innerHTML = subtotal;

  return subtotal;
  //console.log(price, quantity, subtotal);

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let allProducts = document.getElementsByClassName('product');
  console.log(allProducts);

  let totalValue = 0;
  for (let i = 0; i < allProducts.length; i++) {
    totalValue += updateSubtotal(allProducts[i]);
  }

  console.log(totalValue);

  // ITERATION 3
  const totalSpan = document.querySelector('#total-value span');
  totalSpan.innerHTML = totalValue;

  return totalValue;
}

// ITERATION 4

function removeProduct(event) {
  /*  event.currentTarget.parentNode.parentNode.parentNode.removeChild(
    event.currentTarget.parentNode.parentNode
  ); */
  const target = event.currentTarget;
  //console.log('The target in remove is:', target.parentNode.parentNode);
  let rowToRemove = target.parentNode.parentNode;
  let parent = rowToRemove.parentNode;
  parent.removeChild(rowToRemove);

  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  let newProduct = document.querySelector('.create-product input');
  let newPrice = document.querySelector('.create-product input[type="number"]');
  let fixedPrice = Number(newPrice.value).toFixed(2);

  // Creating an element
  let newRow = document.createElement('tr');
  newRow.innerHTML = `<td class="name">
    <span>${newProduct.value}</span>
  </td>
  <td class="price">$<span>${fixedPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;

  newRow.classList.add('product');

  let parent = document.querySelector('#cart tbody');
  parent.appendChild(newRow);

  //By concatenating the innerHtml of the parent
  /*   let concatRow = `<tr class="product">
  <td class="name">
  <span>${newProduct.value}</span>
</td>
<td class="price">$<span>${fixedPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
</tr>
`;

  parent.innerHTML += concatRow; */

  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  newProduct.value = '';
  newPrice.value = 0;

  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);

  //... your code goes here
});
