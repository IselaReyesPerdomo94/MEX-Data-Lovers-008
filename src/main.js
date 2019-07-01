const catalogButton = document.getElementById('catalog');
const logo = document.getElementById('logo');

//trying to build carousel

const playCarousel = () => {
    let myIndex = 0;
    let image = document.getElementsByClassName('slide');
    //hide images
    for (let i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }
    //reset index to show firtst image
    if (myIndex >= image.length) {
        myIndex = 0;
    }

    image[myIndex].style.display = 'block';
    myIndex++;
    setTimeout(playCarousel, 1000);
}

playCarousel();

const hideSection = (id) => {
    document.getElementById(id).classList.add('hide');
}


const showSection = (id) => {
    document.getElementById(id).classList.remove('hide');

}

const showCatalog = () => {
    hideSection('landing-page');
    showSection('characters-page');
}

const returnToIndex = () => {
    hideSection('characters-page');
    showSection('landing-page');
}


catalogButton.addEventListener('click', showCatalog);
logo.addEventListener('click', returnToIndex);