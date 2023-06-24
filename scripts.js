document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.querySelector('.scroll-button');

    scrollButton.addEventListener('click', function () {
        if (window.scrollY < window.innerHeight / 2) {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY < window.innerHeight / 2) {
            scrollButton.classList.remove('up');
        } else {
            scrollButton.classList.add('up');
        }
    });
});



