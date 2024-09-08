let cards = document.querySelectorAll('.card__heading');
let cardsImage = document.querySelectorAll('.card__image')
let nextButton = document.querySelector('.right__arrow');

let cardsTemplate = {
    1: 'Katrine',
    2: 'Jennifer',
    3: 'Woody',
    4: 'Charly',
    5: 'Freddie',
    6: 'Scarlet',
    7: 'Sophia',
    8: 'Timmy',
}

let cardsImages = {
    'Katrine': './images/png/pets/pets-katrine.png',
    'Jennifer': './images/png/pets/pets-jennifer.png',
    'Woody' : './images/png/pets/pets-woody.png',
    'Charly': './images/png/pets/pets-charly.png',
    'Freddie': './images/png/pets/pets-freddie.png',
    'Scarlet': './images/png/pets/pets-scarlet.png',
    'Sophia': './images/png/pets/pets-sophia.png',
    'Timmy': './images/png/pets/pets-timmy.png'
}
let prevNames = [];
let nextNames = [];

function next(){
    timer = 0;

    cards.forEach(card => {
        const cardName = card.querySelector('h3').textContent;
        prevNames.push(cardName);
    })
    if(prevNames.length > 3){
        for(let i = 0; i < 3; i++){
            prevNames.shift();
        }
    }
    let newArr = Object.values(cardsTemplate).filter(ignore => !prevNames.includes(ignore));
    console.log(prevNames);
    cards.forEach(card => {
        let rI =(Math.floor(Math.random()*newArr.length));
        card.querySelector('h3').textContent = newArr[rI];
        newArr.splice(rI, 1);
    })
    for(let i = 0; i < cards.length; i++){
        cardsImage[i].querySelector('img').src = cardsImages[cards[i].querySelector('h3').textContent]
    }
}

function prev(){

}

nextButton.addEventListener('click', next);
