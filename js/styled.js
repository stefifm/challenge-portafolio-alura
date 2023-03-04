const openMenuBtn = document.querySelector('.menu__open')
const closeMenuBtn = document.querySelector('.menu__close')
const navList = document.querySelector('.menu__list')

// Open Nav Menu

const openMenu = () => {
  navList.style.display = 'block'
  closeMenuBtn.style.display = 'inline-block'
  openMenuBtn.style.display = 'none'
}

// Close Nav Menu
const closeMenu = () => {
  navList.style.display = 'none'
  closeMenuBtn.style.display = 'none'
  openMenuBtn.style.display = 'inline-block'
}

openMenuBtn.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)