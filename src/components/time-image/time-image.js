import TimeImagePng from './Time760x324.png';
import './time-image.scss';

class TimeImage {
    render() {
        const img = document.createElement('img');
        img.src = TimeImagePng;
        img.alt = 'Time';
        img.classList.add('time-image');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
};

export default TimeImage;
