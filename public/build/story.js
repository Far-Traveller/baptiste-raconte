(self["webpackChunk"] = self["webpackChunk"] || []).push([["story"],{

/***/ "./assets/story.js":
/*!*************************!*\
  !*** ./assets/story.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

//Function to add in favorite stories + changed heart logo and text
function favoriteStory(event) {
  event.preventDefault();
  var url = this.href;
  var favoriteIcon = document.querySelectorAll('.fa-heart');
  var favoriteSpan = document.querySelectorAll('.favorite-span');
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (result) {
    favoriteIcon[0].className = result["class"];
    favoriteSpan[0].innerText = result.txt;
  });
}

var btnFav = document.querySelectorAll('.favorite-text');
btnFav.forEach(function (url) {
  url.addEventListener('click', favoriteStory);
}); // Function to enable or disable selection of the text

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

var body = document.body;
selectable(body, false); //Function for the button to go up

function scrollBtn() {
  console.log("scroll");
  var btnUp = document.querySelector('.btn-up');

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
  });
}

var btnUp = document.querySelector('.btn-up');
btnUp.addEventListener('click', scrollUp);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_a-constructor_js-node_modules_core-js_internals_array--34436a","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_pro-54b034"], () => (__webpack_exec__("./assets/story.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQUQsS0FBSyxDQUFDWCxnQkFBTixDQUF1QixPQUF2QixFQUFnQ2tCLFFBQWhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vRnVuY3Rpb24gdG8gYWRkIGluIGZhdm9yaXRlIHN0b3JpZXMgKyBjaGFuZ2VkIGhlYXJ0IGxvZ28gYW5kIHRleHRcbmZ1bmN0aW9uIGZhdm9yaXRlU3RvcnkoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdXJsID0gdGhpcy5ocmVmO1xuICAgIGxldCBmYXZvcml0ZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtaGVhcnQnKTtcbiAgICBsZXQgZmF2b3JpdGVTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhdm9yaXRlLXNwYW4nKTtcblxuICAgIGZldGNoKHVybClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBmYXZvcml0ZUljb25bMF0uY2xhc3NOYW1lID0gcmVzdWx0LmNsYXNzO1xuICAgICAgICAgICAgZmF2b3JpdGVTcGFuWzBdLmlubmVyVGV4dCA9IHJlc3VsdC50eHQ7XG4gICAgICAgIH0pXG4gICAgO1xufVxuXG5sZXQgYnRuRmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhdm9yaXRlLXRleHQnKTtcbmJ0bkZhdi5mb3JFYWNoKGZ1bmN0aW9uICh1cmwpIHtcbiAgICB1cmwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmYXZvcml0ZVN0b3J5KTtcbn0pO1xuXG4vLyBGdW5jdGlvbiB0byBlbmFibGUgb3IgZGlzYWJsZSBzZWxlY3Rpb24gb2YgdGhlIHRleHRcbmZ1bmN0aW9uIHNlbGVjdGFibGUoZWxlbWVudCwgYm9vbCkge1xuICAgIGlmICh0eXBlb2YgYm9vbCA9PT0gJ2Jvb2xlYW4nICYmICFib29sKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndW5zZWxlY3RhYmxlJywgJ29uJyk7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnb25zZWxlY3RzdGFydCcsICdyZXR1cm4gZmFsc2U7Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3Vuc2VsZWN0YWJsZScpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3Vuc2VsZWN0YWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdvbnNlbGVjdHN0YXJ0JykpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnb25zZWxlY3RzdGFydCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG59XG5sZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5zZWxlY3RhYmxlKGJvZHksIGZhbHNlKTtcblxuLy9GdW5jdGlvbiBmb3IgdGhlIGJ1dHRvbiB0byBnbyB1cFxuZnVuY3Rpb24gc2Nyb2xsQnRuKCkge1xuICAgIGNvbnNvbGUubG9nKFwic2Nyb2xsXCIpO1xuICAgIGxldCBidG5VcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdXAnKTtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcbiAgICAgICAgYnRuVXAuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWhpZGRlbicpO1xuICAgICAgICBidG5VcC5jbGFzc0xpc3QuYWRkKCdidG4tc2hvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0blVwLmNsYXNzTGlzdC5hZGQoJ2J0bi1oaWRkZW4nKTtcbiAgICAgICAgYnRuVXAuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXNob3cnKTtcbiAgICB9XG59XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsQnRuKTtcblxuXG5mdW5jdGlvbiBzY3JvbGxVcCgpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgfSlcbn1cbmNvbnN0IGJ0blVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi11cCcpO1xuYnRuVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzY3JvbGxVcCk7XG5cbiJdLCJuYW1lcyI6WyJmYXZvcml0ZVN0b3J5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsImhyZWYiLCJmYXZvcml0ZUljb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmYXZvcml0ZVNwYW4iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJjbGFzc05hbWUiLCJpbm5lclRleHQiLCJ0eHQiLCJidG5GYXYiLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlbGVjdGFibGUiLCJlbGVtZW50IiwiYm9vbCIsInNldEF0dHJpYnV0ZSIsImhhc0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImJvZHkiLCJzY3JvbGxCdG4iLCJjb25zb2xlIiwibG9nIiwiYnRuVXAiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93Iiwic2Nyb2xsWSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNjcm9sbFVwIiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiXSwic291cmNlUm9vdCI6IiJ9