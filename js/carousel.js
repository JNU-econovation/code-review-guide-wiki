
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);

const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

const run = () => {

    slides.forEach(setSlidePosition);

    nextButton.addEventListener('click', handleNextButton);
    prevButton.addEventListener('click', handlePrevButton);
    dotsNav.addEventListener('click', handleDotsButton);
}

const setSlidePosition = (slide, idx) => {
    slide.style.left = `${idx * slideWidth}px`;
};

const moveToSlide = (currentSlide, targetSlide)=>{
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
}

const updateDots = (currentDot, targetDot)=>{
    currentDot.classList.remove('current_slide');
    targetDot.classList.add('current_slide');
}

const handlePrevButton = ()=>{
    const currentSlide = track.querySelector('.current_slide');
    let prevSlide = currentSlide.previousElementSibling;
    const slideIndex = getSlideIndex(currentSlide);
    if(slideIndex === 0) prevSlide = slides[slides.length - 1];
    
    moveToSlide(currentSlide, prevSlide);

    const currentDot = dotsNav.querySelector('.current_slide');
    let prevDot = currentDot.previousElementSibling;
    if(slideIndex === 0) prevDot = dots[dots.length - 1];

    updateDots(currentDot, prevDot);
}

const handleNextButton = ()=>{
    const currentSlide = track.querySelector('.current_slide');
    let nextSlide = currentSlide.nextElementSibling;
    const slideIndex = getSlideIndex(currentSlide);
    if(slideIndex === slides.length - 1) nextSlide = slides[0];
    
    moveToSlide(currentSlide, nextSlide);

    const currentDot = dotsNav.querySelector('.current_slide');
    let nextDot = currentDot.nextElementSibling;
    if(slideIndex === dots.length - 1) nextDot = dots[0];
    
    updateDots(currentDot, nextDot);
}

const getSlideIndex = (targetSlide)=>{
    return slides.findIndex(slide => slide === targetSlide);
}

const getDotIndex = (targetDot)=>{
    return dots.findIndex(dot => dot === targetDot);
}

const handleDotsButton = (e)=>{
    const targetDot = e.target.closest('button');
    if(!targetDot) return;

    const currentSlide = track.querySelector('.current_slide');
    const currentDot = dotsNav.querySelector('.current_slide');

    const targetSlide = slides[getDotIndex(targetDot)];
    moveToSlide(currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
}

