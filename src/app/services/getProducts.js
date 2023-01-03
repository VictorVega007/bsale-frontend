'use strict';

/**
 * Cart Module
 * @module GetProducts
 *
 * @author  Victor Vega <victorvega.v@gmail.com>
 * @version 1.0.0
 * @description Función para consultar la API de productos. 
 */

const host = 'https://bsale-api-wurz.onrender.com/';

/**
 * Esta funcion recibe los parametros solicitados por el usuario y devuelve los productos que coinciden con los parametros recibidos.
 * @param {Number} page Número que representa la página que el usuario desea visualizar.
 * @param {String} category Categoría de productos que desea visualizar el usuario.
 * @param {String} search Parámetro de búsqueda del nombre del producto ingresado por el usuario.
 * @param {String} orderByPrice Parámetro que ordena los productos por precio de mayor a menor y viceversa.
 * @param {Number} page Descuento que sirve para filtrar la búsqueda de productos con descuentos del 10% o 20%.
 * @returns {Promise} Retorna la data de productos contenidas en la API.
 */
const getProducts = async (page, category, search, orderByPrice, discount) => { 

    return await fetch(`${host}products?page=${page}&category=${category}&name=${search}&order=${orderByPrice}&discount=${discount}`)
        .then(response => response.json())
        .catch(error => {
        throw new Error(`No existen productos con esos parámetros. Error: ${error}`);
        });
};

export default getProducts;