import { fetchData } from "./js/pixabay-api";
import { renderGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import warningIcon from "./img/warning-icon.svg";
import cautionIcon from "./img/caution-icon.svg";

const form = document.querySelector(".form");
const input = document.querySelector("input[name='search-text']");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = input.value.trim();
    if (query === "") {
        iziToast.show({
            title: "Caution",
            message: "Not valid data",
            backgroundColor: "#ffa000",
            position: "topRight",
        });
        return;
    }

    clearGallery();
    showLoader();

    fetchData(query)
        .then((images) => {
            renderGallery(images);
        })
        .catch(() => {
            iziToast.show({
                title: "Error",
                message: "Something went wrong. Please try again later.",
                backgroundColor: "#ff0000",
                position: "topRight",
            });
        })
        .finally(() => {
            hideLoader();
            form.reset();
        });
});

