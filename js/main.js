//selecting DOM items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//setting initial state of the menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //set menu state
        showMenu = true;

    } else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //set menu state
        showMenu = false;

    }
}

const contactBoxes = document.querySelectorAll('.contact-box');
const copyButton = document.getElementById('copy');

contactBoxes.forEach(contactBox => {
  contactBox.addEventListener('click', () => {
    copyButton.style.opacity = '1';
    setTimeout(() => {
        copyButton.style.opacity = '0';
      }, 2000); // Delay in milliseconds (2 seconds in this example)
      const contactText = Array.from(contactBox.childNodes)
      .filter(node => node.nodeName !== 'SPAN')
      .map(node => node.textContent.trim())
      .join('');
    navigator.clipboard.writeText(contactText)
  });
});
