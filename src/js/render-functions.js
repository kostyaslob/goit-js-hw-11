import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import warningIcon from "../img/warning-icon.svg";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

export function showLoader() {
    loader.style.display = "block";
}

export function hideLoader() {
    loader.style.display = "none";
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function renderGallery(images) {
    if (images.length === 0) {
            iziToast.show({
            message: `Sorry, there are no images matching your search query. Please try again!`,
            messageColor: "#fafafb",
            messageSize: "16px",
            messageLineHeight: "1.5",

            backgroundColor: "#ef4040",
            iconUrl: warningIcon,

            progressBar: false,
            position: "topRight",
            });
        return;
    }

    const markup = images
        .map((image) => `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${image.webformatURL}" 
                    alt="${image.tags}" 
                    width="360" 
                    height="200" 
                />
            </a>
            <div class="image-info">
                <p>Likes: ${image.likes}</p>
                <p>Views: ${image.views}</p>
                <p>Comments: ${image.comments}</p>
                <p>Downloads: ${image.downloads}</p>
            </div>
        </li>
    `
        )
        .join("");

    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}