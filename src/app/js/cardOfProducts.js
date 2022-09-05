'use strict';

/**
 * Cart Module
 * @module CardOfProducts
 *
 * @author  Victor Vega <victorvega.v@gmail.com>
 * @version 1.0.0
 * @description Web Component que se crea a través de clase para definir el card de productos a renderizar. 
 */

import applyDiscountOnPrice from './utils/utils.js';

class CardOfProducts extends HTMLElement {

    /**
     * Descripción del constructor de productos.
     * @param  {[type]} config Se crea el constructor para los distintos atributos de los productos.
     */
    constructor() {
        super();
        this.image;
        this.name;
        this.discount;
        this.price;
        this.id;
    };

    static get observedAttributes() {
        return ['image', 'name', 'discount', 'price', 'id'];
    };

    /**
     * @param {String} str Recibe un string relativo a los atributos de orden de productos por precio y descuento.
     * @return {Number} Retorna el elemento o producto según el atributo de descuento o precio para el filtrado.
     */
    attributeChangedCallback(nameAttribute, oldValue, newValue) {
        if (nameAttribute === 'discount' || nameAttribute === 'price') {
            if (newValue !== oldValue) {
                this[nameAttribute] = parseInt(newValue);
            };
        } else if (newValue !== oldValue) {
           this[nameAttribute] = newValue;
        };
    };

    /**
     * Callback que retorn ael card de productos cada vez que se renderice por los parámetros de búsqueda elegido por el usuario.
     * @return {Number} Retorna el elemento o producto según el atributo de descuento o precio para el filtrado.
     */
    connectedCallback() {
        this.innerHTML = `
            <div class="col d-flex justify-content-center mb-4">
                <div class="card shadow mb-1 bg-dark rounded" style="width: 20rem">
                    <img src="${this.image}" class="card-img-top img_cover" alt="${this.name}"/>

                    <div class="card-body text-white-50">
                        <p class="card-text">${this.name}</p>
                    </div>
                    <div class="discount card-body text-white-50">
                        <h6 class="card-title" style="text-decoration:line-through;">
                            <span>${
                                this.discount > 0
                                ? `${applyDiscountOnPrice(this.price, this.discount)}`
                                : ''
                            }</span>
                        </h6>
                    </div>
                    <div class="card-body text-white-50 d-flex justify-content-between align-items-baseline" style="padding:10px">
                        <h5 class="card-title">
                            <span>${this.price}</span>
                        </h5>
                        <span style="font-size: 13px; font-weight: 600; color: green">
                            ${
                                this.discount > 0
                                ? `${this.discount}% de Descuento`
                                : ''
                            }
                        </span>
                        <button type="button" id="${this.id}" class="btn-add-cart btn btn-primary">
                            Agregar al carrito                            
                        </button>
                    </div>
                </div>
            </div>
        `
    };
};

window.customElements.define('card-product', CardOfProducts);