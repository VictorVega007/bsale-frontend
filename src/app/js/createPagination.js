'use strict';

const createPagination = (id, content) => {
    const paginationList = document.createElement('li');
    const paginationAnchor = document.createElement('a');

    paginationAnchor.setAttribute('id', id);
    paginationAnchor.setAttribute('href', '#');
    paginationAnchor.classList.add('page-link');
    paginationAnchor.textContent = content;

    paginationList.classList.add('pagination', 'page-item');
    paginationList.appendChild(paginationAnchor);

    return paginationList;
};

export { createPagination };