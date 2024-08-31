let link = document.querySelector('#burger__link');
let list = document.querySelector('#burger__list');
let body = document.querySelector('.page');
let burgerlinks = document.querySelectorAll('.burger__list__link');

link.addEventListener('click', () => {
    if(link.classList.contains('burger__link__active')){
        link.classList.remove('burger__link__active');
        list.classList.remove('burger__list__active');
        body.classList.remove('burger__page__active');
    }else{
        link.classList.add('burger__link__active');
        list.classList.add('burger__list__active');
        body.classList.add('burger__page__active');
    }
})

burgerlinks.forEach((burgerlink) => {
    burgerlink.addEventListener('click', () => {
        if(link.classList.contains('burger__link__active')){
            link.classList.remove('burger__link__active');
            list.classList.remove('burger__list__active');
            body.classList.remove('burger__page__active');
        }else{
            link.classList.add('burger__link__active');
            list.classList.add('burger__list__active');
            body.classList.add('burger__page__active');
        }
    })
})

body.addEventListener('click', () => {
    if(link.classList.contains('burger__link__active')){
        link.classList.remove('burger__link__active');
        list.classList.remove('burger__list__active');
        body.classList.remove('burger__page__active');
    }
})