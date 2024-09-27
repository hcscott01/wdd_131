
const themeSelector = document.querySelector('#theme-select');

const bodyElement = document.querySelector('body');
const logoElement = document.querySelector('#logo');

function changeTheme() {

    const selectedTheme = themeSelector.value;

    if (selectedTheme === 'dark') {
        bodyElement.classList.add('dark');
        logoElement.src = 'byui-logo_white.webp'; 
    } else {
        bodyElement.classList.remove('dark');
        logoElement.src = 'byui-logo_blue.webp'; 
    }
}

themeSelector.addEventListener('change', changeTheme);
