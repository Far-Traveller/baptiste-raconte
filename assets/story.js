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