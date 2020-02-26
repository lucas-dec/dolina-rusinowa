const btnHamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('ul')
    btnHamburger.addEventListener('click', ()=>{
    navigation.classList.toggle('active');
})

// slider in header

const slideList = [...document.querySelectorAll('.slide')];
let indexSlide = 0;
let indexSetInterval = 0;

const changeSlide = () => {
    indexSlide++
    if (indexSlide == slideList.length) indexSlide = 0;
    const activeSlide = slideList.findIndex(slide => slide.classList.contains('active-slide'));
    slideList[activeSlide].classList.remove('active-slide');
    slideList[indexSlide].classList.add('active-slide');
}
indexSetInterval = setInterval(changeSlide, 5000);
