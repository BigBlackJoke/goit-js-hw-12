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
const loadMoreButton = document.querySelector(".next-page-button");

let page = 1;

loadMoreButton.style.display = 'none';
loader.style.display = 'none';

let lightbox = new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });

form.addEventListener("submit", (event) => {
    event.preventDefault();
    gallery.innerHTML = '';
    
    if (input.value != "") {

        loader.style.display = 'block';

        const start = async () => {
            try {
                const data = await pixabayApi(input.value, page);

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
                    loadMoreButton.style.display = 'block';
                    lightbox.refresh();

                    loadMoreButton.addEventListener("click", async () => {
                        try {
                            renderFunctions(data, gallery);
                            page += 1;
                        } catch (error) {
                            console.log(error);
                        }
                    })
                };
            } catch (error) {
                console.log(error);
            } finally {
                loader.style.display = 'none';
                event.target.reset();
            }
        };
        
        start();
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