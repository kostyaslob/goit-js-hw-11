import axios from "axios";

const API_KEY = "49339329-0a7bb8ed4f14e1ebd3c55d65b";
const BASE_URL = "https://pixabay.com/api/";

export function fetchData(query) {
    return axios
        .get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: "true",
            },
        })
        .then((response) => response.data.hits)
        .catch((error) => {            
            throw error;
        });
}