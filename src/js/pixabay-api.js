import axios from 'axios';

// export const pixabayApi = (usersRequest) => {
//     const searchParams = new URLSearchParams({
//             key: "44096290-4b282435e4320beb633e0ff8a",
//             q: usersRequest,
//             image_type: "photo",
//             orientation: "horizontal",
//             safesearch: "true",
//         });

//         const url = `https://pixabay.com/api/?${searchParams.toString()}`;

//     return fetch(url)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         })
//         .catch((error) => console.log(error));    
// };

export const pixabayApi = async (usersRequest) => {
    try {
        pixabayApi = await axios.get("https://pixabay.com/api/?${searchParams.toString()}", {
            searchParams: {
                key: "44096290-4b282435e4320beb633e0ff8a",
                q: usersRequest,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: "true"
            }
        })
    } catch (error) {
        console.log(error);
    }
};