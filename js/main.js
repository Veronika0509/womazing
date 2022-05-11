/*      Слайдер       */

const swiper = new Swiper('.swiper', {
    direction : 'horizontal',
    spaceBetween : 50,
    slidesPerView : 1,
    loop : true,
    stopOnLastSlide : false,
    autoplay : {
        delay : 2000
    }
});

/*      Табы       */

$('.tabs__text').on('click', function () {
    let currTab = $(this).index();

    $('.tabs__text').removeClass('active');
    $(this).addClass('active');
});


/*      Параллакс       */

const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);

/*      Слайдер 2       */

const prev = document.getElementById('slider__arrow-back')
const next = document.getElementById('slider__arrow-next')
const slides = document.querySelectorAll('.slider-item')
const dots = document.querySelectorAll('.bulliti')
const slidesWrap = document.querySelectorAll('.slidewrap')

let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    }else{
        index++;
        prepareCurrentSlide(index);
    }
};
const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    }else{
        index--;
        prepareCurrentSlide(index);
    }
};

dots.forEach((item,indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
        clearInterval(interval);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 2500);