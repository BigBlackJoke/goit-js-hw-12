import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { renderFunctions } from './js/render-functions';
import { pixabayApi } from './js/pixabay-api';


const form = document.querySelector(".form");
const input = document.querySelector(".searching-input");
const gallery = document.querySelector(".gallery-elements");
const loader = document.querySelector(".loader");

loader.style.display = 'none';

let lightbox = new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });

form.addEventListener("submit", (event) => {
    event.preventDefault();
    gallery.innerHTML = '';
    if (input.value != "") {

        loader.style.display = 'block';

        pixabayApi(input.value)
            .then((data) => {
                if (data.hits.length === 0) {
                    iziToast.show({
                        message: 'Sorry, there are no images matching your search query. Please, try again!',
                        messageColor: 'rgba(250, 250, 251, 1)',
                        messageSize: '16px',
                        messageLineHeight: '24px',
                        backgroundColor: 'rgba(181, 27, 27, 1)',
                        position: 'topRight',
                        maxWidth: '432px',
                        timeout: 2000
                    });
                } else {
                    renderFunctions(data, gallery);
                    lightbox.refresh();
                };
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                loader.style.display = 'none';
                event.target.reset();
            });
    } else {
        iziToast.show({
            message: 'Searching input cannot be empty! Please fill the input to start searching.',
            messageColor: 'rgba(255, 255, 255, 1)',
            messageSize: '16px',
            messageLineHeight: '24px',
            backgroundColor: 'rgba(181, 27, 27, 1)',
            position: 'topRight',
            maxWidth: '432px',
            timeout: 2000
        });
    }
});