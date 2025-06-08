const navItem = document.getElementById('nav-menu')
const openIcon = document.getElementById('open-icon')
const closeIcon = document.getElementById('close-icon')

function toggleMenu(){
   navItem.classList.toggle('hidden')
   openIcon.classList.toggle('hidden')
   closeIcon.classList.toggle('hidden')
}