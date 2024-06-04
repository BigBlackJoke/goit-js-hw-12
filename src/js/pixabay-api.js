import axios from 'axios';

export const pixabayApi = async (usersRequest) => {
    try {
        const response = await axios.get(`https://pixabay.com/api/`, {
            params: {
                key: "44096290-4b282435e4320beb633e0ff8a",
                q: usersRequest,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: "true",
                per_page: 15,
                page: page
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};