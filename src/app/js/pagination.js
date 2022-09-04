'use strict';

/**
 * EntriPoint Module
 * @module Pagination
 *
 * @author  Victor Vega <victorvega.v@gmail.com>
 * @version 1.0.0
 * @description Generación de número de paginación por productos.
 */
import { showProductsList } from './scripts.js';

/**
 * Variable con el valor inicial en el que se encuentra el usuario al momento de ingresar a la web.
 * @type {Number}
 */
let currentPage = 0;

/**
 * Función que envía el valor que se obtiene a momento de hacer click en cada página de navegación. Ese valor se pasa a la función showProductsList y así obtener la lista de productos con su paginación respectiva.
 * @param {String} id Identificador que se obtiene con el click en cada página de navegación.
 * @returns {void}
 */
const pagination = (id) => {
    if (id === 'next') currentPage++;
    if (id === 'prev') currentPage--;

    if (id !== 'next' && id !== 'prev') currentPage = id;
    showProductsList(currentPage);
};

export { pagination };

