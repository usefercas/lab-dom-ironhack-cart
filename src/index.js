// ITERATION 1

function updateSubtotal(product) {
  // conseguimos el precio obteniendo la etiqueta span de la clase price que lo guarda
  const price = product.querySelector(".price span").textContent;
  // conseguimos la cantidad del input 
  const quanty = product.querySelector('.quantity input').value;
  console.log("Precio -> " + price);
  console.log("quantity -> " + quanty);
  // guardamos en totalPrice el precio total
  const totalPrice = price * quanty;
  console.log("Precio total de la fila -> " + totalPrice);
  // insertamos en el span el con textContext el totalPrice para que se muestre en el html
  product.querySelector(".subtotal span").textContent = totalPrice;
  return totalPrice;
}

function calculateAll() {
  console.log('invocando calculateAll');
  // querySelectorAll devuelve todos los elementos anotados con la clase .product y los guarda en productosHtmlCollection
  let productosHtmlCollection = document.querySelectorAll(".product");
  let total = 0;
  // casteamos la lista de productos para poder iterarla con un foreach
  Array.from(productosHtmlCollection).forEach(producto => {
    // imprimimos el producto que vamos a actualizar para poder debugear
    console.log("actualizando producto -> " + producto.toString());
    // total = total + updateSubtotal(producto);
    // acumulamos en total los precios de los productos (puede haber varios items por producto)
    total += updateSubtotal(producto);
  });

  console.log("Precio total -> " + total);
  // accedemos con document al span que esta dentro del h2 con id total-value y le insertamos textContext el total
  // que habiamos calculado arriba
  document.querySelector("#total-value span").textContent = total;

}

// ITERATION 4

function removeProduct(event) {
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  // obtengo el nombre por id del nuevo producto
  const nameProduct = document.querySelector("#nombre-producto").value;
  // obtengo el precio por id del nuevo producto
  const price = document.querySelector("#price-new-product").value;

  // creo una nueva fila para insertar
  const newRow = document.createElement('tr');
  // le pongo la clase para que tenga el mismo estilo y js que el resto
  newRow.setAttribute('class', 'product');

  // añade la nueva file al body
  document.querySelector('tbody').appendChild(newRow);
  // escribimos las columnas dentro del tr interpolando los valores que necesitamos
  newRow.innerHTML = `
  <td class="name">
    <span>${nameProduct}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button id="button" class="btn btn-remove">Remove</button>
  </td>
`
}
// usamos window para añadir un event listener 'load' que ejecuta la funciona anonima 
// que le pasamos cuando se carga la ventana del navegador
window.addEventListener('load', () => {
  console.log('Load cargado');
  // Conseguimos el boton y lo guardamos en una variable
  // botonCalcularPrecio     //objeto  //function      //argumento
  const calculatePricesBtn = document.getElementById('calculate');
  // añadimos un event listener al boton 'click' y le pasamos la funcion que hemos definido calculateAll
  calculatePricesBtn.addEventListener('click', calculateAll);

  // crea elemento en lista
  const createButton = document.querySelector("#create");
  createButton.addEventListener("click", createProduct);

});
