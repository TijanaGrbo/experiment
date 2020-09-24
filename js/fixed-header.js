let scrollPosition = 0;
let shyHeader = document.querySelector('.shy-header');

window.addEventListener('scroll', function() {
    document.body.getBoundingClientRect().top > scrollPosition ||
    scrollPosition >= 0 ?
        shyHeader.classList.remove('hidden') : shyHeader.classList.add('hidden');
    scrollPosition = document.body.getBoundingClientRect().top;
});
