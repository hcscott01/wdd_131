
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.navigation ul');


menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active'); 
});

const handleResize = () => {
    if (window.innerWidth > 1000) {
        navMenu.classList.remove('hide');
    } else {
        navMenu.classList.add('hide');
    }
};

window.addEventListener('resize', handleResize);
handleResize();

function viewerTemplate(imagePath, altText) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imagePath}" alt="${altText}">
        </div>
    `;
}

function viewHandler(event) {
    const clickedImage = event.target;
    
    if (clickedImage.tagName === 'IMG') {
        const imageSrc = clickedImage.src.split('-')[0]; 
        const fullImageSrc = `${imageSrc}-full.jpeg`;      
        const altText = clickedImage.alt;

        document.body.insertAdjacentHTML('afterbegin', viewerTemplate(fullImageSrc, altText));

        document.querySelector('.close-viewer').addEventListener('click', closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove(); 
    }
}


const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);

