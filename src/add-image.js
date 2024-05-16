import Time from './Time760x324.png';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Time';
    img.width = 300;
    img.src = Time;

    const body = document.querySelector('body');
    body.appendChild(img);
};

export default addImage;
