//Function to add in favorite stories + changed heart logo and text
function favoriteStory(event) {
    event.preventDefault();

    const url = this.href;
    let favoriteIcon = document.querySelectorAll('.fa-heart');
    let favoriteSpan = document.querySelectorAll('.favorite-span');

    fetch(url)
        .then(response => response.json())
        .then(function (result) {
            favoriteIcon[0].className = result.class;
            favoriteSpan[0].innerText = result.txt;
        })
    ;
}

let btnFav = document.querySelectorAll('.favorite-text');
btnFav.forEach(function (url) {
    url.addEventListener('click', favoriteStory);
});

// Function to enable or disable selection of the text
function selectable(element, bool) {
    if (typeof bool === 'boolean' && !bool) {
            element.setAttribute('unselectable', 'on');
            element.setAttribute('onselectstart', 'return false;');
        } else {
            if (element.hasAttribute('unselectable')) {
                element.removeAttribute('unselectable');
            }
            if (element.hasAttribute('onselectstart')) {
                element.removeAttribute('onselectstart');
            }
        }
}
let body = document.body;
selectable(body, false);

//Function for the button to go up
function scrollBtn() {
    console.log("scroll");
    let btnUp = document.querySelector('.btn-up');
    if (window.scrollY > 100) {
        btnUp.classList.remove('btn-hidden');
        btnUp.classList.add('btn-show');
    } else {
        btnUp.classList.add('btn-hidden');
        btnUp.classList.remove('btn-show');
    }
}
window.addEventListener('scroll', scrollBtn);


function scrollUp() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}
const btnUp = document.querySelector('.btn-up');
btnUp.addEventListener('click', scrollUp);

