// header menu links
let menuOpenButtons = document.getElementsByClassName('drop-element-open-button');

for (let i = 0; i < menuOpenButtons.length; i++) {
  button = menuOpenButtons[i];
  button.addEventListener('click', function (event) {
    let dropItem = event.target.parentElement;
    let dropElement = dropItem.querySelector('.drop-element');
    dropElement.classList.toggle('open');

    if (dropElement.classList.contains('open')) {
      event.target.classList.add('active');
    } else {
      event.target.classList.remove('active');
    }
  });
}

// mobile menu
let burger = document.querySelector('.burger'),
  mobileMenu = document.querySelector('.nav-mobile'),
  menuOverlay = document.querySelector('.nav-mobile-overlay'),
  loginOpen = document.querySelector('.nav-mobile-login'),
  loginWindow = document.querySelector('.login-window-mobile'),
  cartOpen = document.querySelector('.nav-mobile-cart'),
  cartWindow = document.querySelector('.cart-window-mobile');


burger.onclick = function () {
  mobileMenu.classList.add('open');
  menuOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

menuOverlay.onclick = function () {
  mobileMenu.classList.remove('open');
  menuOverlay.classList.remove('open');
  document.body.style.overflow = 'auto';
  mobileMenuList.classList.remove('glide');
  submenu.classList.remove('open');
}

loginOpen.onclick = function () {
  loginWindow.classList.add('open');
  mobileMenu.classList.remove('open');
  menuOverlay.classList.remove('open');
}

cartOpen.onclick = function () {
  cartWindow.classList.add('open');
  mobileMenu.classList.remove('open');
  menuOverlay.classList.remove('open');
}

let mobileModalCloseButtons = document.getElementsByClassName('modal-mobile-close');
for (let i = 0; i < mobileModalCloseButtons.length; i++) {
  let mobileModalCloseButton = mobileModalCloseButtons[i];
  mobileModalCloseButton.addEventListener('click', function (event) {
    event.target.closest('.modal-window-mobile').classList.remove('open');
    document.body.style.overflow = 'auto';
  });
}


let menuBackButton = document.querySelector('.mobile-menu-back'),
  mobileMenuList = document.querySelector('.nav-mobile-list'),
  submenu = document.querySelector('.submenu'),
  submenuOpenButton = document.querySelector('.submenu-open');

submenuOpenButton.onclick = function () {
  mobileMenuList.classList.add('glide');
  submenu.classList.add('open');
}

menuBackButton.onclick = function () {
  mobileMenuList.classList.remove('glide');
  submenu.classList.remove('open');
  console.log('clicked');
}


// modal
let modal = document.querySelector('.modal'),
  modalOpen = document.querySelector('.contact-us-button');
modalClose = document.querySelector('.modal-close');

modalOpen.onclick = function () {
  modal.classList.add('open');
}

modalClose.onclick = function (event) {
  modal.classList.remove('open');
}
