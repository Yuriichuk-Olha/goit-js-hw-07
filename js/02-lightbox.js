import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryItemsRef = document.querySelector(".gallery")
//console.log('galleryItemsRef');
//galleryItemsRef.addEventListener('click', onGallery)

const galleryItemsLink = galleryItems.map(item => 
    `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
        />
    </a>`).join(" ");


    galleryItemsRef.insertAdjacentHTML("afterbegin", galleryItemsLink);

    
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 })