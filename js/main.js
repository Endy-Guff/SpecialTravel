gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if(ScrollTrigger.isTouch !== 1){
  ScrollSmoother.create({
    wrapper: '.animation-wrapper',
    content: '.animation-content',
    smooth: 1.5,
    effects: true
  })
  gsap.to('.header__inner', {
    opacity: '0',
    scrollTrigger:{
      trigger: '.header__inner',
      start: '200',
      end: '560',
      scrub: true
    }
  })
  gsap.from('.about__title',
  {
    x: '-50',
    opacity: '0',
    scrollTrigger:{
      trigger: '.about__title',
      start: '-500',
      end: '-200',
      scrub: true
    }
  })
  gsap.from('.about__text',
  {
    opacity: '0',
    scrollTrigger:{
      trigger: '.about__text',
      start: '-400',
      end: '-100',
      scrub: true
    }
  })
  gsap.from('.tours__title',
  {
    x: '-50',
    opacity: '0',
    scrollTrigger:{
      trigger: '.tours__title',
      start: '-730',
      end: '-430',
      scrub: true
    }
  })
  const toursItemAnimationCountArr = ['10', '0', '10', '0']
  document.querySelectorAll('.tours__item').forEach((el, i)=>{
    gsap.from(el,
    {
      y: '10'+toursItemAnimationCountArr[i],
      opacity: '0',
      scrollTrigger:{
        trigger: el,
        start: '-800',
        end: '-400',
        scrub: true
      }
    })
  })
  gsap.from('.news__title',
  {
    x: '-50',
    opacity: '0',
    scrollTrigger:{
      trigger: '.news__title',
      start: '-530',
      end: '-230',
      scrub: true
    }
  })
  gsap.from('.news__items',
  {
    y: '50',
    opacity: '0',
    scrollTrigger:{
      trigger: '.news__title',
      start: '-400',
      end: '-100',
      scrub: true
    }
  })
  gsap.from('.reviews__title',
  {
    x: '-50',
    opacity: '0',
    scrollTrigger:{
      trigger: '.reviews__title',
      start: '-530',
      end: '-230',
      scrub: true
    }
  })
  gsap.from('.reviews__item--left',
  {
    x: '-50',
    y: '50',
    opacity: '0',
    scrollTrigger:{
      trigger: '.reviews__item--left',
      start: '-530',
      end: '-230',
      scrub: true
    }
  })
  gsap.from('.reviews__item--right',
  {
    x: '50',
    y: '50',
    opacity: '0',
    scrollTrigger:{
      trigger: '.reviews__item--right',
      start: '-530',
      end: '-230',
      scrub: true
    }
  })
}

const toursBtn = document.querySelectorAll('.tours__item-btn');
toursBtn.forEach(btn=>{
  btn.addEventListener('mousedown',()=>{
    btn.parentElement.style.borderColor = '#fff'
  })
})
toursBtn.forEach(btn=>{
  btn.addEventListener('mouseup',()=>{
    btn.parentElement.style.borderColor = '#090A5C'
  })
})

const tl = gsap.timeline();

tl.from('.header__title', 1, {y: '200'})
tl.from('.header__text', 1, {y: '200'}, '>-.5')
tl.from('.header__top', 1, {opacity: '0', y: '-100'})
tl.fromTo('.header__img-line', 2, {opacity: '0'}, {
  opacity: '1'
})
tl.from('.header__mountainUp-img', 2, {y: '320'}, '>-0.5')
tl.from('.header__mountainDown-img', 1.8, {y: '-230'}, '>-1.8')
tl.from('.header__bear-img', 1, {y: '100'}, '>-1')
tl.from('.header__fish-img', 2, {opacity: '0'}, '>-1')
tl.from('.header__sun-img', 3, {opacity: '0'}, '>-2')
tl.from('.header__starbg-img', 2, {opacity: '0'}, '>-1')



