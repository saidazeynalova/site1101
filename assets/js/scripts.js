/* * script.js
 * * You can add your JavaScript functions here. 
 * For example, toggling a dark mode, form validation, or smooth scrolling.
 * */

document.addEventListener('DOMContentLoaded', () => {
    // Console log to check if the script is loaded
    console.log("Saida's portfolio site JavaScript loaded.");

    // Example of a simple interaction, e.g., for the mobile menu state
    const navTrigger = document.getElementById('nav-trigger');
    const siteNav = document.querySelector('.site-nav');

    if (navTrigger && siteNav) {
        // Toggle a class on the body or nav when the menu is opened/closed
        navTrigger.addEventListener('change', () => {
            if (navTrigger.checked) {
                siteNav.classList.add('nav-open');
            } else {
                siteNav.classList.remove('nav-open');
            }
        });
    }
});