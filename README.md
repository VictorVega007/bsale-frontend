<br />
<div align="center">
  <a href="">
    <img src="https://img.icons8.com/cotton/344/happy-file.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Desafío Frontend Bsale</h3>
  <h2>Desarrollo del FrontEnd</h2>
</div>

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

En este desafío se desarrolla la interfaz de usuario o frontend de la aplicación de búsqueda de productos a la API creada y desplegada en Heroku. 

Su funcionalidad es simular un pequeño E-Commerce para buscar productos por atributos como precio, descuento, filtrado por búsqueda de nombres de productos, orden de precio y categoria. Igualmente tiene una funcionalidad de agregae y eliminar productos del carrito de compras.

## Features

### Stack seleccionado para el desarrollo

El stack selecccionado para este proyecto es el siguiente:

[![HTML5][HTML5]][HTML5-url]

[![CSS3][CSS3]][CSS3-url]

[![JavaScript][JavaScript]][JavaScript-url]

[![Bootstrap][Bootstrap]][Bootstrap-url]

## Inicializar la app

### Requerimientos

Para poder iniciar la aplicación se debe instalar en el equipo NodeJS (https://nodejs.org/en/) ya que es el entorno para inciar la app.

### Comando para iniciar la aplicación

Una vez clonado el repositorio se debe ingresar el siguiente comando en la terminal para instalar las dependencias:

```console
npm i
```

### Despliegue

EL despliegue de la aplicación se hizo en el siguiente host:

[DEPLOY]

### Organización de archivos y objetivos

El objetivo principal de organización de archivos adoptado en este proyecto fue buscar una forma de modularizar la aplicación y tener sus distintos componentes separados de manera independiente. Cada componente tiene su función específica y con la idea de escalabilidad al momento de cambiar o añadir algún tipo de feature en el proyecto. 

En este sentido, la distribución de archivos del proyecto se organizó de la siguiente manera:

1. #### Index.html

Archivo principal de la pagina web que se muestra en el navegador y en el que se encuentra el texto, imágenes y la interfaz en la que el usuario interactúa con la aplicación. 

2. #### Package.json

Archivo en el que se muestran las dependencias usadas en el proyecto y la configuración del paquete de NPM en general usado en el desarrollo de la aplicación. 

3. #### Jsdoc.json

Archivo en formato JSON en el que se especifica la configuración de la documentación desarrollada con la libnrería JSDOC para el lenguaje JavaScript. 

4. #### Carpeta SRC

En esta carpeta se encuentran los distintos componentes que forman parte del proyecto. Las subcarpetas se dividen de la siguiente forma:

##### App

  ###### JS : 
  
  Directorio en el que se encuentran los archivos en formato JavaScript que representan el código que agrega funcionalidad a la aplicación en cuestión. En esta carpeta se encuentran los archivos:

      1. CardOfProducts: cuya funcionalidad es el crear el card de productos a mostrar al usuario usando web component. 

      2. CreatePagination: su función principal es crear la navegabilidad en la paginación de los productos que se muestran al usuario. 

      3. ListOfProducts: archivo en el que se visualiza el código que permitirá agregar a la interfaz de usuario la lista de productos disponibles en la aplicación. 

      4. Pagination: módulo que crea la forma de navegabilidad de la paginación de la aplicación. Es decir, la funcionalidad que el usuario usa a momento de trasladarse de una página a otra que muestran los productos. 

      5. ShowCart: archivo que contiene el código para la implementación de la vista del carrito de compras, el cual el usuario visualiza en el widget del carrito en la parte superior derecha de la página web.

      6. Scripts: archivo principal de JavaScript en el que se importan los distintos módulos JS que componen la funcionalidad del proyecto, los cuales se ejecutan en este main file. 
  
  ###### Services

      Carpeta que contiene los archivos en formato JavaScript que se encargan de obtener por medio de código asíncrono cada productos y la categoría de productos, respectivamente. Los archivos que lo conforman son "getCategories.js" y "getProducts.js".

  ###### Utils

      Este directorio contiene el archivo JS que es reutilizado en distintas partes del código de la aplicación que se encarga de calcular el descuento por el que serán filtrados los productos. 

5. Carpeta CSS

En este directorio se encuentra el archivo "style.css" que contiene los estilos aplicados en la aplicación. Son estilos puntuales en cuanto a la palicación de flex y tamaños en márgen, padding, width de las imágenes, entre otros. 

6. Docs

Directorio en el que se encuentran todos los archivos que componen la documentación al desplegar la configuración de JSDOC. 

### Documentación 

La documentación de la aplicación se puede consultar en el siguiente enlace:

[DOCUMENTACION]
## Autor
Elaborado por **Victor Vega**


[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/victor-vega-v/
[HTML5]: https://img.shields.io/badge/html5-35495E?style=for-the-badge&logo=html5&logoColor=4FC08D
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[CSS3]: https://img.shields.io/badge/Css-35495E?style=for-the-badge&logo=css3&logoColor=4FC08D
[CSS3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS 
[JavaScript]: https://img.shields.io/badge/Javascript-35495E?style=for-the-badge&logo=javascript&logoColor=4FC08D
[JavaScript-url]: https://www.javascript.com/
[Bootstrap]: https://img.shields.io/badge/Bootstrap-35495E?style=for-the-badge&logo=bootstrap&logoColor=4FC08D
[Bootstrap-url]: https://getbootstrap.com/
[DOCUMENTACION]: https://victorvega007.github.io/bsale-frontend/
[DEPLOY]: https://victorvega-bsale.netlify.app/