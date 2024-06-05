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

loadMoreButton.style.display = 'none';
loader.style.display = 'none';

let page = 1;
let search = '';

let lightbox = new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });

form.addEventListener("submit", async event => {
    event.preventDefault();
    gallery.innerHTML = '';
    page = 1;
    search = input.value;
    loadMoreButton.style.display = 'none';

    if (search != "") {

        loader.style.display = 'block';
            try {
                const data = await pixabayApi(search, page);

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
                    page += 1;
                    if (data.totalHits > 15) {
                        loadMoreButton.style.display = 'block';
                    }
                }
            } catch (error) {
                console.log(error);
            } finally {
                loader.style.display = 'none';
                event.target.reset();
            }

    } else {
        iziToast.warning({
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

loadMoreButton.addEventListener("click", async () => {
    loader.style.display = 'block';
    loadMoreButton.style.display = 'none';
        try {
            const data = await pixabayApi(search, page);
            renderFunctions(data, gallery);
            lightbox.refresh();
            if (data.hits.length > 0) {
                const eachImage = document.querySelector('.gallery-elements li');
                const imageHeight = eachImage.getBoundingClientRect().height;
                window.scrollBy({
                top: imageHeight * 2,
                behavior: 'smooth'
            });
                loadMoreButton.style.display = 'block';
                page += 1;
            }
            const totalPages = Math.ceil(data.totalHits / 15);
            if (page === totalPages) {
                loadMoreButton.style.display = 'none';
                iziToast.show({
                message: 'We are sorry, but you have reached the end of search results.',
                messageColor: 'rgba(255, 255, 255, 1)',
                messageSize: '16px',
                messageLineHeight: '24px',
                backgroundColor: 'rgba(78, 117, 255, 1)',
                position: 'topRight',
                maxWidth: '432px',
                timeout: 3000
            });
            }
        } catch (error) {
            console.log(error);
        } finally {
        loader.style.display = 'none';
    }
});