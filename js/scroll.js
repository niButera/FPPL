const container = document.querySelector('#c-right');
const cards = container.querySelectorAll('.card');
let index = 0;

setInterval(() => {
    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
    index++;

    if (index >= cards.length) {
        index = 0;
    }

    container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
    });
}, 4000);

