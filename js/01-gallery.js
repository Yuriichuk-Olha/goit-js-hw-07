import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);


const galleryItemsRef = document.querySelector(".gallery")
//console.log('galleryItemsRef');
galleryItemsRef.addEventListener('click', onGallery)

const galleryItemsLink = galleryItems.map(item => 
    `<div class = "gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
    </a>
    </div>`).join(" ");


    galleryItemsRef.insertAdjacentHTML("afterbegin", galleryItemsLink)

    
    function onGallery(event){
        
        event.preventDefault();
        if(event.target.nodeName !== "IMG"){
            return
        }

        // ===== бібліотека у функції ===== basicLightbox ///

        const instance = basicLightbox.create(`
        <img src = ${event.target.dataset.source} width="800" height="600">
        `)
    
        instance.show()
    
        galleryItemsRef.addEventListener('keydown', (event) => {
            if(event.code === 'Escape'){
                // console.log(event.code);
            instance.close()
            }
    })
    }




