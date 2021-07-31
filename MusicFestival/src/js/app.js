document.addEventListener('DOMContentLoaded', function() {
    scrollnav();

    fixNav();
})

function fixNav(){

    const bar = document.querySelector('.header')

    const observer = new IntersectionObserver( function(entries){
        if(entries[0].isIntersecting){

            bar.classList.remove('fix');
        } else {
            bar.classList.add('fix');
        }
    })

    observer.observe(document.querySelector('.about-festival'));


}

function scrollnav() {
    const links = document.querySelectorAll('.nav-principal a');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const section = document.querySelector(e.target.attributes.href.value);

            section.scrollIntoView({
                behavior:'smooth'
            });
        })
    })
}