// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navlinks = document.getElementById('navlinks');

navToggle.addEventListener('click', () => {
  navlinks.classList.toggle('open');
});

navlinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navlinks.classList.remove('open'));
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Certificate gallery lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const certGallery = document.getElementById('certGallery');

if (certGallery) {
  certGallery.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      lightboxImg.src = link.getAttribute('data-full');
      lightbox.classList.add('open');
    });
  });
}
if (lightboxClose) {
  lightboxClose.addEventListener('click', () => lightbox.classList.remove('open'));
}
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });
}
