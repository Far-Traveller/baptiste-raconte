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
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_a-constructor_js-node_modules_core-js_internals_array--34436a","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_pro-54b034"], () => (__webpack_exec__("./assets/story.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7RUFDMUJBLEtBQUssQ0FBQ0MsY0FBTjtFQUVBLElBQU1DLEdBQUcsR0FBRyxLQUFLQyxJQUFqQjtFQUNBLElBQUlDLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixDQUFuQjtFQUNBLElBQUlDLFlBQVksR0FBR0YsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixnQkFBMUIsQ0FBbkI7RUFFQUUsS0FBSyxDQUFDTixHQUFELENBQUwsQ0FDS08sSUFETCxDQUNVLFVBQUFDLFFBQVE7SUFBQSxPQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtFQUFBLENBRGxCLEVBRUtGLElBRkwsQ0FFVSxVQUFVRyxNQUFWLEVBQWtCO0lBQ3BCUixZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCUyxTQUFoQixHQUE0QkQsTUFBTSxTQUFsQztJQUNBTCxZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCTyxTQUFoQixHQUE0QkYsTUFBTSxDQUFDRyxHQUFuQztFQUNILENBTEw7QUFPSDs7QUFFRCxJQUFJQyxNQUFNLEdBQUdYLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQWI7QUFDQVUsTUFBTSxDQUFDQyxPQUFQLENBQWUsVUFBVWYsR0FBVixFQUFlO0VBQzFCQSxHQUFHLENBQUNnQixnQkFBSixDQUFxQixPQUFyQixFQUE4Qm5CLGFBQTlCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0Z1bmN0aW9uIHRvIGFkZCBpbiBmYXZvcml0ZSBzdG9yaWVzICsgY2hhbmdlZCBoZWFydCBsb2dvIGFuZCB0ZXh0XG5mdW5jdGlvbiBmYXZvcml0ZVN0b3J5KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHVybCA9IHRoaXMuaHJlZjtcbiAgICBsZXQgZmF2b3JpdGVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWhlYXJ0Jyk7XG4gICAgbGV0IGZhdm9yaXRlU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0ZS1zcGFuJyk7XG5cbiAgICBmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgZmF2b3JpdGVJY29uWzBdLmNsYXNzTmFtZSA9IHJlc3VsdC5jbGFzcztcbiAgICAgICAgICAgIGZhdm9yaXRlU3BhblswXS5pbm5lclRleHQgPSByZXN1bHQudHh0O1xuICAgICAgICB9KVxuICAgIDtcbn1cblxubGV0IGJ0bkZhdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0ZS10ZXh0Jyk7XG5idG5GYXYuZm9yRWFjaChmdW5jdGlvbiAodXJsKSB7XG4gICAgdXJsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmF2b3JpdGVTdG9yeSk7XG59KTsiXSwibmFtZXMiOlsiZmF2b3JpdGVTdG9yeSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1cmwiLCJocmVmIiwiZmF2b3JpdGVJY29uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmF2b3JpdGVTcGFuIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiY2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwidHh0IiwiYnRuRmF2IiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9