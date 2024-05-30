export const renderFunctions = (data, gallery) => {
    const makingGallery = data.hits.map((hit => {
        return `<li>
          <a href="${hit.largeImageURL}"><img src="${hit.webformatURL}" alt="${hit.tags}"/></a>
          <div class="imageInfo">
            <div class="imageEachInfo">
                <span name="likes">Likes</span>
                <span name="likes-num">${hit.likes}</span>
            </div>
            <div class="imageEachInfo">
                <span name="views">Views</span>
                <span name="views-num">${hit.views}</span>
            </div>
            <div class="imageEachInfo">
                <span name="comments">Comments</span>
                <span name="comments-num">${hit.comments}</span>
            </div>
            <div class="imageEachInfo">
                <span name="downloads">Downloads</span>
                <span name="downloads-num">${hit.downloads}</span>
            </div>
          </div>
        </li>`
    }));
    gallery.innerHTML = makingGallery.join('');
};

