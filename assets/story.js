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

//Function for the scroll-up button to appear when we scroll down
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

//Function for the button to scroll up smoothly
function scrollUp() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}
let btnUp = document.querySelector('.btn-up');
btnUp.addEventListener('click', scrollUp);

//Function light/night

function lightNight() {
    let storyText = document.getElementById('story-text');
    let storyP = document.querySelector('.story-p');
    let btnNight = document.querySelector('.btn-night');
    let btnLight = document.querySelector('.btn-light');
    // let iconNight = document.querySelector('.icon-night');
    // let iconLight = document.querySelector('.icon-light');

    if (storyText.classList.contains('light-bg')) {
        storyText.classList.remove('light-bg');
        storyText.classList.add('night-bg');
        storyP.classList.add('night-p');
        btnNight.classList.add('btn-hidden');
        btnLight.classList.remove('btn-hidden');
        // iconNight.classList.add('btn-hidden');
        // iconLight.classList.remove('btn-hidden');
    } else {
        storyText.classList.add('light-bg');
        storyText.classList.remove('night-bg');
        storyP.classList.remove('night-p');
        btnNight.classList.remove('btn-hidden');
        btnLight.classList.add('btn-hidden');
        // iconNight.classList.remove('btn-hidden');
        // iconLight.classList.add('btn-hidden');
    }
}
let btnNight = document.querySelector('.btn-night');
let btnLight = document.querySelector('.btn-light');
btnNight.addEventListener('click', lightNight);
btnLight.addEventListener('click', lightNight);

// let btnLightNight = document.querySelector('.btn-light-night');
// btnLightNight.addEventListener('click', lightNight);