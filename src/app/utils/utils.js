'use strict';

/**
 * Utils module Discount
 * @module applyDiscountOnPrice
 *
 * @author  Victor Vega <victorvega.v@gmail.com>
 * @version 1.0.0
 * @description Función que se re utiliza en distintas partes del código
 */

/**
 * Función que se usa para calcular el precio anterior y el actual con el descuento aplicado, según sea el caso.
 * @param {Number} price Número que es el precio del producto con descuento.
 * @param {Number} discount Descuento aplicado al producto.
 * @returns {Number}  Precio del producto sin el descuento.
 */
const applyDiscountOnPrice = (price, discount) => {
    return price + (price * discount) / 100;
};

export default applyDiscountOnPrice;