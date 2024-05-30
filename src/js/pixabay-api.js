export const pixabayApi = (usersRequest) => {
    const searchParams = new URLSearchParams({
            key: "44096290-4b282435e4320beb633e0ff8a",
            q: usersRequest,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
        });

        const url = `https://pixabay.com/api/?${searchParams.toString()}`;

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .catch((error) => console.log(error));    
};