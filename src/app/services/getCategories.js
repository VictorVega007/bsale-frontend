'use strict';

/**
 * Cart Module
 * @module GetProducts
 *
 * @author  Victor Vega <victorvega.v@gmail.com>
 * @version 1.0.0
 * @description Función que devuelve la categoria de todos los productos disponibles en la API. 
 */

const host = 'https://bsale-api-wurz.onrender.com/';

/**
 * Función que devueve el array de productos por su categoria.
 * @returns {Array}
 */
const getProductsCategory = async () => {
    return await fetch(`${host}categories`)
        .then(response => response.json())
        .catch(err => {
            throw new Error(`La categoria no existe. Error: ${err.message}`);
        });
};

export default getProductsCategory;