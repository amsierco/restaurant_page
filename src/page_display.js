export {createPage};

const createHeader = (() => {
    const header = document.createElement('div');
    header.className = 'header';

    const logo = document.createElement('div');
    logo.className = 'store_name'
    logo.innerHTML = 
        `<img src='../src/images/logo.jpg' alt='Store logo'>
        <text>Flap Jack Shack</text>`;

    const menu = document.createElement('button');
    menu.id = 'menu-button';
    menu.textContent = 'Menu';

    const contact = document.createElement('button');
    contact.id ='contact-button';
    contact.textContent = 'Contact';

    const home = document.createElement('button');
    home.id ='home-button';
    home.textContent = 'Home';

    header.appendChild(logo);
    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);

    return{header};
})();

const createHomePage = (() => {
    const body = document.createElement('div');
    body.className = 'main-page';
    body.id = 'viewable';

    const image = document.createElement('div');
    image.className = 'store-image';
     image.innerHTML = 
         `<img src="../src/images/splash.jpg" alt="Store image">` ;

    const splashText = document.createElement('div');
    //const scard = document.createElement('div');
    //scard.id = 'splash';
    splashText.innerHTML = 
        `<text id='splash'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </text>`;
   // splashText.appendChild(scard);

    const hours = document.createElement('div');
    hours.className = 'hours';
    const hcard = document.createElement('div');
    hcard.innerHTML = 
        `<text id='title'>Hours</text>
        <text>Monday-Friday</text>
        <text>6am-5pm</text>
        <text>Saturday-Sunday</text>
        <text>6am-12pm</text>
        <text>Closed on holidays</text>`;
    hours.appendChild(hcard);

    const location = document.createElement('div');
    location.className = 'location';
    const lcard = document.createElement('div');
    lcard.innerHTML =
        `<text id='title'>Address</text>
        <text>1234 Pancake Dr. 98765</text>
        <text>Moon, Space</text>`;
    location.appendChild(lcard);

    body.appendChild(image);
    body.appendChild(splashText);
    body.appendChild(hours);
    body.appendChild(location);

    return{body};
})();

const createMenuPage = (() => {
    const menu = document.createElement('div');
    menu.className = 'menu';
})();

const createContactPage = (() => {

})();

const createFooter = (() => {
    const footer = document.createElement('div');
    footer.className = 'footer';

    const author = document.createElement('div');
    author.innerHTML = 
        `Copyright ?? 2023 amsierco 
        <a href='https://github.com/amsierco/restaurant_page'>
        <i class="fa fa-github")" id='github'></i>
        </a>`;

    footer.appendChild(author);

    return{footer};
})();

const createPage = (() => {
    const body = document.querySelector('div#content');

    const header = createHeader.header;
    const home = createHomePage.body;
    const footer =createFooter.footer;

    body.appendChild(header);
    body.appendChild(home);

    body.appendChild(footer);

    return {header, home, footer};
})(); 