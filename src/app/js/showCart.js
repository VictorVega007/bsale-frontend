'use strict';

/**
 * Cart Module
 * @module showCart
 *
 * @author  Victor Vega <victorvega.v@gmail.com>
 * @version 1.0.0
 * @description Componente del carrito de compra
 */

import { Products } from "./listOfProducts.js";

/**
 * Variable que obtiene el div en el que se renderizará el modal del carrito con los productos seleccionados y agregados por el ususario.
 * @type {Node<HTMLDivElement>}
 */
 const cartModal = document.getElementById('cartModal');

/**
 * Variable del nodo de contador insertado en el carrito para contabilizar y renderizar la cantidad de productos ingresados al carrito de compra. 
 * @type {Node<HTMLSpanElement>}
 */
let countCart = document.getElementById('countCart');


/**
 * Función para crear en el LocalStorage el array de productos ingresados al carrito de compra. Se crea la persistencia de los productos agregados así se cierre o se salga el usuario de la aplicación. Al retomar la conexión se podrá visualizar aún los productos elegidos. 
 * @returns {Array} 
 */
const getCart = () => {
    if (localStorage.getItem('cart')) {
        const cart = JSON.parse(localStorage.getItem('cart'));
        showProductsCart(cart);
        return cart;
    } else {
        const cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        return cart;
    };
};

/**
 * Función para agregar los productos al carrito de compras. Recibe un id de producto que se agrega y se aumenta la cantidad en 1 del producto por su id agregado. 
 * @param {Number} productId 
 * @returns {void}
 */
const addToCart = (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const productToAdd = cart.find(product => product.id === productId)
    
    if (productToAdd) {
        const productIndex = cart.findIndex(prod => prod.id === productId);
        cart[productIndex].quantity++;

        localStorage.setItem('cart', JSON.stringify(cart));
        showProductsCart(cart);
    } else {
        const currentProduct = Products.find(product => product.id === productId);
        const product = {
            product: currentProduct,
            id: currentProduct.id,
            quantity: 1
        };

        cart.push(product);

        localStorage.setItem('cart', JSON.stringify(cart));
        showProductsCart(cart);
    };
};

/**
 * Función para eliminar productos del carrito por su id que recibe como parámetro.
 * @param {Number} productId 
 * @returns {void}
 */
const removeProductFromCart = (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart'));

    const result = cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(result));
    showProductsCart(result);
};

/**
 * Función que renderiza el card modal al momento de consultar el carrito de compras. Igualmente muestra la totalidad de precio a pagar por el usuario por productos. 
 * @param {Array} cart Recibe un array de productos como parámetros. 
 * @returns {void}
 */
const showProductsCart = (cart) => {
    const sumProductsQuantity = cart.map(element => element.quantity).reduce((prev, curr) => prev + curr, 0);
    countCart.innerHTML = sumProductsQuantity;
    cartModal.innerHTML = '';

    cart.forEach(product => {
        const totalPriceByProduct = product.product.price * product.quantity;
    
        cartModal.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${product.product.url_image}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-6">
                <div class="card-body">
                <h5 class="card-title">Producto: ${product.product.name}</h5>
                <h5 class="card-title">Precio: $ ${product.product.price}</h5>
                <h5 class="card-title">Total: $ ${totalPriceByProduct}</h5>
                <h5 class="card-title">Cantidad: ${product.quantity}</h5>
                </div>
            </div>
            <div class="col-md-2 btn-remove">
                <button type="button" id="${product.id}" class="removeProduct btn btn-primary">X</button>
            </div>
            </div>
        </div>
    `;
    });
};

export {
    getCart,
    addToCart,
    removeProductFromCart,
    showProductsCart
};