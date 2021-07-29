
console.log('works!');
document.addEventListener('DOMContentLoaded', function() {
    createGallery();
})

function createGallery() {
    const gallery = document.querySelector('.gallery-images');

    for ( i=1; i < 13; i++) {
        const image = document.createElement('IMG');
        image.src = `build/img/thumb/${i}.webp`;
        const list = document.createElement('LI');
        list.appendChild(image);
        gallery.appendChild(list);
    }
}