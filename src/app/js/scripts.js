'use strict';

/**
 * EntriPoint Module
 * @module 
 *
 * @author  Victor Vega <victorvega.v@gmail.com>
 * @version 1.0.0
 * @description Funcionalidad del archivo index.js
 */

import { pagination } from './pagination.js';
import { getCart, addToCart, removeProductFromCart } from './showCart.js';
import  { showProductsList } from './listOfProducts.js';
import getProductsCategory  from '../services/getCategories.js';

/**
 * Variable cuyo nodo HTML es obtenido para la búsqueda de un producto a través del evento click ejecutado por el usuario.
 * @type {Node<HTMLButtonElement>}
 */
const searchButton = document.getElementById('search');

/**
 * Varibles del nodo select para relaizar una búsqueda de productos por su categoria, por orden de precio y filtro por descuento, respectivamente.
 * @type {Node<HTMLSelectElement>}
 */
const categorySelect = document.getElementById('category');
const orderByPrice = document.getElementById('orderPrice');
const filterByDiscount = document.getElementById('filterDiscount');

/**
 * Variable que se usa para renderizar por medio de un AppendChild la paginación de los productos,
 * @type {Node<HTMLUListElement>}
 */
const paginationLi = document.querySelector('.pagination');

/**
 * Variable del input en el que se realiza búsqueda de productos según los parametros ingresados por el usuario.
 * @type {Node<HTMLInputElement>}
 */
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchButton.click();
  }
});

/**
 * Se agregan los distintos eventos para la obtención del listado de productos.
 * @addEventListeners {function(event): void} 
 */
orderByPrice.addEventListener('change', () => showProductsList());
filterByDiscount.addEventListener('change', () => showProductsList());
searchButton.addEventListener('click', () => showProductsList());
categorySelect.addEventListener('change', () => showProductsList());
paginationLi.addEventListener('click', (e) => pagination(e.target.id));

document.addEventListener('click', e => {
    let element = e.target;

    if (element.classList[0] === 'btn-add-cart') {
        addToCart(parseInt(element.id));
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado con éxito!',
            showConfirmButton: false,
            timer: 1500
        }).then((result) => {
          if (result.isConfirmed) {
              location.href = 'index.html';
          };
        });
      };
    
      if (element.classList[0] === 'removeProduct') {
        removeProductFromCart(parseInt(element.id));
      };
});

/**
 * Función que renderiza los selects de filtrado relativos a las distintas categorias de productos. 
 * @returns {void}
 */
(async function getAllCategories() {
    try {
      const data = await getProductsCategory();
      if (data.length) {
        data.forEach((category) => {
          categorySelect.innerHTML += `<option value="${category.id}">${category.name.toUpperCase()}</option>`;
        });
      }
    } catch (error) {
      throw new Error(error.message);
    }
  })();

  getCart();
  showProductsList();

  export { showProductsList };