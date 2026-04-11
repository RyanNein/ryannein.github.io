const showAll = document.getElementById('show-all');
const showFeatured = document.getElementById('show-featured');
const nonFeatured = document.querySelectorAll('.not-featured');
const toggle = document.querySelector('.project-toggle');

showAll.addEventListener('click', () => {
    // nonFeatured.forEach(el => el.style.display = 'block');
    toggle.classList.remove('featured');
    nonFeatured.forEach(el => el.style.display = '');
    showAll.classList.add('active');
    showFeatured.classList.remove('active');
});

showFeatured.addEventListener('click', () => {
    toggle.classList.add('featured');
    nonFeatured.forEach(el => el.style.display = 'none');
    showFeatured.classList.add('active');
    showAll.classList.remove('active');
});
