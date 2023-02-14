// 01. variables
const menu_toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
// 03. functions

// 02. event-listeners
menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
})
