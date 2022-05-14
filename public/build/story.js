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
selectable(body, false);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_a-constructor_js-node_modules_core-js_internals_array--34436a","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_pro-54b034"], () => (__webpack_exec__("./assets/story.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7RUFDMUJBLEtBQUssQ0FBQ0MsY0FBTjtFQUVBLElBQU1DLEdBQUcsR0FBRyxLQUFLQyxJQUFqQjtFQUNBLElBQUlDLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixDQUFuQjtFQUNBLElBQUlDLFlBQVksR0FBR0YsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixnQkFBMUIsQ0FBbkI7RUFFQUUsS0FBSyxDQUFDTixHQUFELENBQUwsQ0FDS08sSUFETCxDQUNVLFVBQUFDLFFBQVE7SUFBQSxPQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtFQUFBLENBRGxCLEVBRUtGLElBRkwsQ0FFVSxVQUFVRyxNQUFWLEVBQWtCO0lBQ3BCUixZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCUyxTQUFoQixHQUE0QkQsTUFBTSxTQUFsQztJQUNBTCxZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCTyxTQUFoQixHQUE0QkYsTUFBTSxDQUFDRyxHQUFuQztFQUNILENBTEw7QUFPSDs7QUFFRCxJQUFJQyxNQUFNLEdBQUdYLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQWI7QUFDQVUsTUFBTSxDQUFDQyxPQUFQLENBQWUsVUFBVWYsR0FBVixFQUFlO0VBQzFCQSxHQUFHLENBQUNnQixnQkFBSixDQUFxQixPQUFyQixFQUE4Qm5CLGFBQTlCO0FBQ0gsQ0FGRCxHQUlBOztBQUNBLFNBQVNvQixVQUFULENBQW9CQyxPQUFwQixFQUE2QkMsSUFBN0IsRUFBbUM7RUFDL0IsSUFBSSxPQUFPQSxJQUFQLEtBQWdCLFNBQWhCLElBQTZCLENBQUNBLElBQWxDLEVBQXdDO0lBQ2hDRCxPQUFPLENBQUNFLFlBQVIsQ0FBcUIsY0FBckIsRUFBcUMsSUFBckM7SUFDQUYsT0FBTyxDQUFDRSxZQUFSLENBQXFCLGVBQXJCLEVBQXNDLGVBQXRDO0VBQ0gsQ0FITCxNQUdXO0lBQ0gsSUFBSUYsT0FBTyxDQUFDRyxZQUFSLENBQXFCLGNBQXJCLENBQUosRUFBMEM7TUFDdENILE9BQU8sQ0FBQ0ksZUFBUixDQUF3QixjQUF4QjtJQUNIOztJQUNELElBQUlKLE9BQU8sQ0FBQ0csWUFBUixDQUFxQixlQUFyQixDQUFKLEVBQTJDO01BQ3ZDSCxPQUFPLENBQUNJLGVBQVIsQ0FBd0IsZUFBeEI7SUFDSDtFQUNKO0FBQ1I7O0FBQ0QsSUFBSUMsSUFBSSxHQUFHcEIsUUFBUSxDQUFDb0IsSUFBcEI7QUFDQU4sVUFBVSxDQUFDTSxJQUFELEVBQU8sS0FBUCxDQUFWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vRnVuY3Rpb24gdG8gYWRkIGluIGZhdm9yaXRlIHN0b3JpZXMgKyBjaGFuZ2VkIGhlYXJ0IGxvZ28gYW5kIHRleHRcbmZ1bmN0aW9uIGZhdm9yaXRlU3RvcnkoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdXJsID0gdGhpcy5ocmVmO1xuICAgIGxldCBmYXZvcml0ZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtaGVhcnQnKTtcbiAgICBsZXQgZmF2b3JpdGVTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhdm9yaXRlLXNwYW4nKTtcblxuICAgIGZldGNoKHVybClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBmYXZvcml0ZUljb25bMF0uY2xhc3NOYW1lID0gcmVzdWx0LmNsYXNzO1xuICAgICAgICAgICAgZmF2b3JpdGVTcGFuWzBdLmlubmVyVGV4dCA9IHJlc3VsdC50eHQ7XG4gICAgICAgIH0pXG4gICAgO1xufVxuXG5sZXQgYnRuRmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhdm9yaXRlLXRleHQnKTtcbmJ0bkZhdi5mb3JFYWNoKGZ1bmN0aW9uICh1cmwpIHtcbiAgICB1cmwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmYXZvcml0ZVN0b3J5KTtcbn0pO1xuXG4vLyBGdW5jdGlvbiB0byBlbmFibGUgb3IgZGlzYWJsZSBzZWxlY3Rpb24gb2YgdGhlIHRleHRcbmZ1bmN0aW9uIHNlbGVjdGFibGUoZWxlbWVudCwgYm9vbCkge1xuICAgIGlmICh0eXBlb2YgYm9vbCA9PT0gJ2Jvb2xlYW4nICYmICFib29sKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndW5zZWxlY3RhYmxlJywgJ29uJyk7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnb25zZWxlY3RzdGFydCcsICdyZXR1cm4gZmFsc2U7Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3Vuc2VsZWN0YWJsZScpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3Vuc2VsZWN0YWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdvbnNlbGVjdHN0YXJ0JykpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnb25zZWxlY3RzdGFydCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG59XG5sZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5zZWxlY3RhYmxlKGJvZHksIGZhbHNlKTtcblxuIl0sIm5hbWVzIjpbImZhdm9yaXRlU3RvcnkiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXJsIiwiaHJlZiIsImZhdm9yaXRlSWNvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZhdm9yaXRlU3BhbiIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsImNsYXNzTmFtZSIsImlubmVyVGV4dCIsInR4dCIsImJ0bkZhdiIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwic2VsZWN0YWJsZSIsImVsZW1lbnQiLCJib29sIiwic2V0QXR0cmlidXRlIiwiaGFzQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=