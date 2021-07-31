document.addEventListener('DOMContentLoaded', function() {
    createGallery();
})

function createGallery() {
    const gallery = document.querySelector('.gallery-images');

    for ( i=1; i < 13; i++) {
        const image = document.createElement('img');
        image.src = `build/img/thumb/${i}.webp`;
        image.dataset.imageId = i;
        image.onclick = showImage;
        const list = document.createElement('li');
        list.appendChild(image);
        gallery.appendChild(list);
    }
}

function showImage(e) {
    console.log(e.target.dataset.imageId);

    const Id = parseInt(e.target.dataset.imageId);

    const image = document.createElement('img');
    image.src = `build/img/grande/${Id}.webp`;

    const overlay = document.createElement('div');
    overlay.appendChild(image);
    overlay.classList.add('overlay');

    //click outside of image, close it 
    overlay.onclick = function () {
        overlay.remove();
    }

    //Botton to close the imagen
    const closeImage = document.createElement('p');
    closeImage.textContent = 'X';
    closeImage.classList.add('btn-close');

    //Close image when press
    closeImage.onclick = function () {
        overlay.remove();
    }

    overlay.appendChild(closeImage);


    // Show on HTML

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fix-body')




}