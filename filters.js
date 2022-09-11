let filters = document.querySelector('.filters-mobile'),
  filtersOpenButton = document.querySelector('.filters-mobile-open-button'),
  filtersCloseButton = document.querySelector('.filters-mobile-close'),
  filtersSubmitButton = document.querySelector('.filters-mobile-submit-button'),
  productCards = document.querySelector('.product-cards');

filtersOpenButton.onclick = function() {
  filters.classList.add('open');
  productCards.style.display = 'none';
  document.body.classList.add('filters-active');
}

filtersCloseButton.onclick = function() {
  filters.classList.remove('open');
  productCards.style.display = 'grid';
  document.body.classList.remove('filters-active');
}

filtersSubmitButton.onclick = function() {
  filters.classList.remove('open');
  productCards.style.display = 'grid';
  document.body.classList.remove('filters-active');
}
