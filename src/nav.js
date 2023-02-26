import { createPage } from "./page_display";
export { addNav };


const addNav = (() => {
    const homeBTN = createPage.header.querySelector('#home-button');
    const menuBTN = createPage.header.querySelector('#menu-button');
    const contactBTN = createPage.header.querySelector('#contact-button');

    //Need to add other pages first
    homeBTN.addEventListener('click', () => {
        createPage.home.setAttribute('id', 'viewable');
        //createPage.menu.setAttribute('id', 'hidden');
        //createPage.home.setAttribute('id', 'hidden');
    });
    menuBTN.addEventListener('click', () => {
        //createPage.home.setAttribute('id', 'viewable');
        createPage.home.setAttribute('id', 'hidden');
        //createPage.home.setAttribute('id', 'hidden');
    });
    contactBTN.addEventListener('click', () => {
        //createPage.home.setAttribute('id', 'viewable');
        createPage.home.setAttribute('id', 'hidden');
        //createPage.home.setAttribute('id', 'hidden');
    });

})();