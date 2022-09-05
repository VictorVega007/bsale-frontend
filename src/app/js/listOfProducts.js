'use strict';

/**
 * Cart Module
 * @module ShowProductsList
 *
 * @author  Victor Vega <victorvega.v@gmail.com>
 * @version 1.0.0
 * @description Componente del carrito de compra
 */

import getProducts from './services/getProducts.js';
import { createPagination } from './createPagination.js';

/**
 * Variable relativa al nodo en el que se renderizarán los productos de la API.
 * @type {Node<HTMLDivElement>}
 */
const productsList = document.getElementById('productList');

/**
 * Variable en la que se realizará la renderización de la paginación de los productos.
 * @type {Node<HTMLUListElement>}
 */
const paginationLink = document.getElementById('pagination');

/**
 * Variable que guarda el array de productos que el usuario solicite por parámetros de búsqueda. 
 * @type {Array}
 */
let Products = [];

/**
 * Función que ejecuta el módulo de getProducts para renderizar el listado de productos, de acuerdo a los parámetros de búsqueda que implemente el usuario.
 * @param {Number} currentPage Recibe un número como parámetro que es la página actual donde se sitúe el usuario.
 * @async Es una función asincrónica para manejar la promesa al consumir la API respectiva de productos.
 * @returns {void}
 */
const showProductsList = async (currentPage = 0) => {
    const imgDefaultValue = 'https://www.vdstores.nl/sites/default/files/products/Default-Product-Image.png';
    const search = document.getElementById('searchInput').value.trim().toLowerCase();
    const category = document.getElementById('category').value.trim();
    const orderByPrice = document.getElementById('orderPrice').value.trim();
    const filterByDiscount = document.getElementById('filterDiscount').value.trim();

    productsList.innerHTML = `
        <div class="d-flex align-items-center">
            <strong>Cargando productos...</strong>
            <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>`;
    
    try {
        const data = await getProducts(
            currentPage,
            category,
            search,
            orderByPrice,
            filterByDiscount,
        );

        if (data.content.length) {
            Products = data.content;

            productsList.replaceChildren();
            data.content.forEach(product => {
                const image = product.url_image ? product.url_image : imgDefaultValue;
                const cardProduct = document.createElement('card-product');

                cardProduct.setAttribute('image', image);
                cardProduct.setAttribute('name', product.name);
                cardProduct.setAttribute('discount', product.discount);
                cardProduct.setAttribute('price', product.price);
                cardProduct.setAttribute('id', product.id);

                productsList.appendChild(cardProduct);
            });

            paginationLink.replaceChildren();
            paginationLink.appendChild(createPagination('prev', 'Prev'));

            for (let i = 1; i <= data.totalPages; i++) {
                const pageNumber = i - 1;
                paginationLink.appendChild(createPagination(pageNumber, i));
            };

            paginationLink.appendChild(createPagination('next', 'Next'));

            if (parseInt(currentPage) === data.totalPages - 1) 
                document.getElementById('next').classList.add('disabled');
            
            if (parseInt(currentPage) === 0) 
                document.getElementById('prev').classList.add('disabled');
            
            document.getElementById(currentPage).classList.add('active');
        } else {
            productsList.classList.add('notFound');

            Swal.fire({
                title: `No se encontró el producto "${search[0].toUpperCase() + search.substring(1)}"`,
                confirmButtonText: 'Ok',
                color: '#15161D',
                icon: 'error',
                iconColor: '#D10024',
              }).then((result) => {
                if (result.isConfirmed) {
                    location.href = 'index.html'
                };
              });
            
        };
    } catch (error) {
        throw new Error(`${error.message}`);
    };
};

export {
    showProductsList,
    Products
};