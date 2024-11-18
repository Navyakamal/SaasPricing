const review = document.querySelector('.review');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

const totalSlides = document.querySelectorAll('.clients').length;
const visibleSlides = 4; 

const reviewContainer = document.querySelector('.review-container');
const clonedSlides = [...document.querySelectorAll('.clients')]
    .slice(0, visibleSlides)
    .map(slide => slide.cloneNode(true));
clonedSlides.forEach(clone => review.appendChild(clone));

const totalSlideCount = document.querySelectorAll('.clients').length;

function slideTo(index) {
    currentIndex = index;

    review.style.transition = 'transform 0.5s ease-in-out';
    review.style.transform = `translateX(-${(100 / visibleSlides) * currentIndex}%)`;

    if (currentIndex === totalSlideCount - visibleSlides) {
        setTimeout(() => {
            review.style.transition = 'none'; 
            currentIndex = 0; 
            review.style.transform = `translateX(0%)`;
        }, 500); 
    }

    updateDots();
}

setInterval(() => {
    slideTo(currentIndex + 1);
}, 7000); 

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex % (totalSlides / visibleSlides));
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideTo(index * visibleSlides); 
        updateDots();
    });
});

updateDots();

