webpackHotUpdate("revontuliblog",{

/***/ "./packages/mars-theme/src/components/list/recent.js":
/*!***********************************************************!*\
  !*** ./packages/mars-theme/src/components/list/recent.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./packages/mars-theme/src/components/list/list-item.js\");\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../featured-media */ \"./packages/mars-theme/src/components/featured-media.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var recent=(_ref)=>{var{state}=_ref;var data=state.source.get(state.router.link);var recentTag=state.source.post[138];console.log(recentTag);var featuredMediaId=recentTag.featured_media;var media=state.source.attachment[featuredMediaId].source_url;console.log(media);var backgroundImageStyle={backgroundImage:\"url(\"+{media}+\")\"};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Recent__card,{style:backgroundImageStyle},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_featured_media__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{id:featuredMediaId}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"h1\",null,recentTag.title.rendered));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(recent));var Recent__card=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"article\",{target:\"edfp0tk0\",label:\"Recent__card\"})( false?undefined:{name:\"1sngk3y\",styles:\"padding:30px;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcm9ubWFjL0RvY3VtZW50cy8xX0RldmxvcHAvUmV2b250dWxpV2ViL3Jldm9udHVsaS1ibG9nL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9yZWNlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJtQyIsImZpbGUiOiIvVXNlcnMvaXJvbm1hYy9Eb2N1bWVudHMvMV9EZXZsb3BwL1Jldm9udHVsaVdlYi9yZXZvbnR1bGktYmxvZy9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvcmVjZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4uL2ZlYXR1cmVkLW1lZGlhXCI7XG5cbmNvbnN0IHJlY2VudCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaylcbiAgICBjb25zdCByZWNlbnRUYWcgPSBzdGF0ZS5zb3VyY2UucG9zdFsxMzhdO1xuICAgIGNvbnNvbGUubG9nKHJlY2VudFRhZyk7XG4gICAgY29uc3QgZmVhdHVyZWRNZWRpYUlkID0gcmVjZW50VGFnLmZlYXR1cmVkX21lZGlhO1xuXG4gICAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtmZWF0dXJlZE1lZGlhSWRdLnNvdXJjZV91cmw7XG4gICAgY29uc29sZS5sb2cobWVkaWEpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyB7bWVkaWF9ICsgXCIpXCJcbiAgICB9XG5cbiAgICByZXR1cm4gKCAgICBcbiAgICAgICAgPFJlY2VudF9fY2FyZCBzdHlsZT17YmFja2dyb3VuZEltYWdlU3R5bGV9PlxuICAgICAgICAgICAgPEZlYXR1cmVkTWVkaWEgaWQ9e2ZlYXR1cmVkTWVkaWFJZH0gLz5cbiAgICAgICAgICAgIDxoMT57cmVjZW50VGFnLnRpdGxlLnJlbmRlcmVkfTwvaDE+XG4gICAgICAgIDwvUmVjZW50X19jYXJkPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChyZWNlbnQpO1xuXG5jb25zdCBSZWNlbnRfX2NhcmQgPSBzdHlsZWQuYXJ0aWNsZWBcbiAgICBwYWRkaW5nOiAzMHB4O1xuYCJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvcmVjZW50LmpzPzAyZjkiXSwibmFtZXMiOlsicmVjZW50Iiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsInJlY2VudFRhZyIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZmVhdHVyZWRNZWRpYUlkIiwiZmVhdHVyZWRfbWVkaWEiLCJtZWRpYSIsImF0dGFjaG1lbnQiLCJzb3VyY2VfdXJsIiwiYmFja2dyb3VuZEltYWdlU3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0aXRsZSIsInJlbmRlcmVkIiwiY29ubmVjdCIsIlJlY2VudF9fY2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3FSQUtBLEdBQU1BLE9BQU0sQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BQzFCLEdBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0EsR0FBTUMsVUFBUyxDQUFHTixLQUFLLENBQUNFLE1BQU4sQ0FBYUssSUFBYixDQUFrQixHQUFsQixDQUFsQixDQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBWixFQUNBLEdBQU1JLGdCQUFlLENBQUdKLFNBQVMsQ0FBQ0ssY0FBbEMsQ0FFQSxHQUFNQyxNQUFLLENBQUdaLEtBQUssQ0FBQ0UsTUFBTixDQUFhVyxVQUFiLENBQXdCSCxlQUF4QixFQUF5Q0ksVUFBdkQsQ0FDQU4sT0FBTyxDQUFDQyxHQUFSLENBQVlHLEtBQVosRUFFQSxHQUFNRyxxQkFBb0IsQ0FBRyxDQUN6QkMsZUFBZSxDQUFFLE9BQVMsQ0FBQ0osS0FBRCxDQUFULENBQW1CLEdBRFgsQ0FBN0IsQ0FJQSxNQUNJLDJEQUFDLFlBQUQsRUFBYyxLQUFLLENBQUVHLG9CQUFyQixFQUNJLDBEQUFDLHVEQUFELEVBQWUsRUFBRSxDQUFFTCxlQUFuQixFQURKLENBRUksb0VBQUtKLFNBQVMsQ0FBQ1csS0FBVixDQUFnQkMsUUFBckIsQ0FGSixDQURKLENBTUgsQ0FuQkQsQ0FxQmVDLHVIQUFPLENBQUNwQixNQUFELENBQXRCLEVBRUEsR0FBTXFCLGFBQVksbTNEQUFsQiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9yZWNlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQgRmVhdHVyZWRNZWRpYSBmcm9tIFwiLi4vZmVhdHVyZWQtbWVkaWFcIjtcblxuY29uc3QgcmVjZW50ID0gKHsgc3RhdGUgfSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKVxuICAgIGNvbnN0IHJlY2VudFRhZyA9IHN0YXRlLnNvdXJjZS5wb3N0WzEzOF07XG4gICAgY29uc29sZS5sb2cocmVjZW50VGFnKTtcbiAgICBjb25zdCBmZWF0dXJlZE1lZGlhSWQgPSByZWNlbnRUYWcuZmVhdHVyZWRfbWVkaWE7XG5cbiAgICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2ZlYXR1cmVkTWVkaWFJZF0uc291cmNlX3VybDtcbiAgICBjb25zb2xlLmxvZyhtZWRpYSk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2VTdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHttZWRpYX0gKyBcIilcIlxuICAgIH1cblxuICAgIHJldHVybiAoICAgIFxuICAgICAgICA8UmVjZW50X19jYXJkIHN0eWxlPXtiYWNrZ3JvdW5kSW1hZ2VTdHlsZX0+XG4gICAgICAgICAgICA8RmVhdHVyZWRNZWRpYSBpZD17ZmVhdHVyZWRNZWRpYUlkfSAvPlxuICAgICAgICAgICAgPGgxPntyZWNlbnRUYWcudGl0bGUucmVuZGVyZWR9PC9oMT5cbiAgICAgICAgPC9SZWNlbnRfX2NhcmQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHJlY2VudCk7XG5cbmNvbnN0IFJlY2VudF9fY2FyZCA9IHN0eWxlZC5hcnRpY2xlYFxuICAgIHBhZGRpbmc6IDMwcHg7XG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/list/recent.js\n");

/***/ })

})