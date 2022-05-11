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
