webpackHotUpdate("revontuliblog",{

/***/ "./packages/mars-theme/src/components/list/recent.js":
/*!***********************************************************!*\
  !*** ./packages/mars-theme/src/components/list/recent.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./packages/mars-theme/src/components/list/list-item.js\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../featured-media */ \"./packages/mars-theme/src/components/featured-media.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var recent=(_ref)=>{var{state}=_ref;var data=state.source.get(state.router.link);var recentTag=state.source.post[138];console.log(recentTag);var featuredMediaId=recentTag.featured_media;var media=state.source.attachment[featuredMediaId].source_url;console.log(media);var author=state.source.author[recentTag.author];console.log(author);var backgroundImageStyle={backgroundImage:\"url(\"+media+\")\"};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{link:recentTag.link},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(Recent__card,{style:backgroundImageStyle},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"article__recent-title\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"h3\",null,\"Dernier sujet digital\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"article__title\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"article__title-info\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"p\",null,author.name)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"h2\",null,recentTag.title.rendered))));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(recent));var Recent__card=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"article\",{target:\"edfp0tk0\",label:\"Recent__card\"})( false?undefined:{name:\"m7us8j\",styles:\"margin:30px;background-size:cover;background-position:center;min-height:400px;border-radius:15px;box-shadow:0px 6px 25px rgba(0,0,0,0.09);display:flex;flex-wrap:wrap;.article__title{background-color:#fff;padding:10px 30px;align-self:flex-end;border-radius:0px 0px 15px 15px;h2{font-size:1.1em;}}.article__recent-title{padding:10px 30px;h3{color:#fff!important;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcm9ubWFjL0RvY3VtZW50cy8xX0RldmxvcHAvUmV2b250dWxpV2ViL3Jldm9udHVsaS1ibG9nL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9yZWNlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNtQyIsImZpbGUiOiIvVXNlcnMvaXJvbm1hYy9Eb2N1bWVudHMvMV9EZXZsb3BwL1Jldm9udHVsaVdlYi9yZXZvbnR1bGktYmxvZy9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvcmVjZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2xpbmtcIjtcbmltcG9ydCBGZWF0dXJlZE1lZGlhIGZyb20gXCIuLi9mZWF0dXJlZC1tZWRpYVwiO1xuXG5jb25zdCByZWNlbnQgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspXG4gICAgY29uc3QgcmVjZW50VGFnID0gc3RhdGUuc291cmNlLnBvc3RbMTM4XTtcbiAgICBjb25zb2xlLmxvZyhyZWNlbnRUYWcpO1xuICAgIGNvbnN0IGZlYXR1cmVkTWVkaWFJZCA9IHJlY2VudFRhZy5mZWF0dXJlZF9tZWRpYTtcblxuICAgIGNvbnN0IG1lZGlhID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbZmVhdHVyZWRNZWRpYUlkXS5zb3VyY2VfdXJsO1xuICAgIGNvbnNvbGUubG9nKG1lZGlhKTtcblxuICAgIGNvbnN0IGF1dGhvciA9IHN0YXRlLnNvdXJjZS5hdXRob3JbcmVjZW50VGFnLmF1dGhvcl07XG4gICAgY29uc29sZS5sb2coYXV0aG9yKTtcblxuICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZVN0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgbWVkaWEgKyBcIilcIlxuICAgIH07XG5cbiAgICByZXR1cm4gKCAgICBcblxuICAgICAgICA8TGluayBsaW5rPXtyZWNlbnRUYWcubGlua30gPlxuICAgICAgICAgICAgPFJlY2VudF9fY2FyZCBzdHlsZT17YmFja2dyb3VuZEltYWdlU3R5bGV9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZV9fcmVjZW50LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5EZXJuaWVyIHN1amV0IGRpZ2l0YWw8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZV9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlX190aXRsZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57YXV0aG9yLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPntyZWNlbnRUYWcudGl0bGUucmVuZGVyZWR9PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVjZW50X19jYXJkPlxuICAgICAgICA8L0xpbms+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QocmVjZW50KTtcblxuY29uc3QgUmVjZW50X19jYXJkID0gc3R5bGVkLmFydGljbGVgXG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDZweCAyNXB4IHJnYmEoMCwwLDAsMC4wOSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLmFydGljbGVfX3RpdGxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFydGljbGVfX3JlY2VudC10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICAgICAgaDMge1xuICAgICAgICAgICAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuYCJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvcmVjZW50LmpzPzAyZjkiXSwibmFtZXMiOlsicmVjZW50Iiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsInJlY2VudFRhZyIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZmVhdHVyZWRNZWRpYUlkIiwiZmVhdHVyZWRfbWVkaWEiLCJtZWRpYSIsImF0dGFjaG1lbnQiLCJzb3VyY2VfdXJsIiwiYXV0aG9yIiwiYmFja2dyb3VuZEltYWdlU3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJuYW1lIiwidGl0bGUiLCJyZW5kZXJlZCIsImNvbm5lY3QiLCJSZWNlbnRfX2NhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7cVJBTUEsR0FBTUEsT0FBTSxDQUFHLFFBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsTUFDMUIsR0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQSxHQUFNQyxVQUFTLENBQUdOLEtBQUssQ0FBQ0UsTUFBTixDQUFhSyxJQUFiLENBQWtCLEdBQWxCLENBQWxCLENBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxTQUFaLEVBQ0EsR0FBTUksZ0JBQWUsQ0FBR0osU0FBUyxDQUFDSyxjQUFsQyxDQUVBLEdBQU1DLE1BQUssQ0FBR1osS0FBSyxDQUFDRSxNQUFOLENBQWFXLFVBQWIsQ0FBd0JILGVBQXhCLEVBQXlDSSxVQUF2RCxDQUNBTixPQUFPLENBQUNDLEdBQVIsQ0FBWUcsS0FBWixFQUVBLEdBQU1HLE9BQU0sQ0FBR2YsS0FBSyxDQUFDRSxNQUFOLENBQWFhLE1BQWIsQ0FBb0JULFNBQVMsQ0FBQ1MsTUFBOUIsQ0FBZixDQUNBUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU0sTUFBWixFQUVBLEdBQU1DLHFCQUFvQixDQUFHLENBQ3pCQyxlQUFlLENBQUUsT0FBU0wsS0FBVCxDQUFpQixHQURULENBQTdCLENBSUEsTUFFSSwyREFBQyw2Q0FBRCxFQUFNLElBQUksQ0FBRU4sU0FBUyxDQUFDRCxJQUF0QixFQUNJLDBEQUFDLFlBQUQsRUFBYyxLQUFLLENBQUVXLG9CQUFyQixFQUNJLGlFQUFLLFNBQVMsQ0FBQyx1QkFBZixFQUNJLDRGQURKLENBREosQ0FJSSxpRUFBSyxTQUFTLENBQUMsZ0JBQWYsRUFDSSxpRUFBSyxTQUFTLENBQUMscUJBQWYsRUFDSSxtRUFBSUQsTUFBTSxDQUFDRyxJQUFYLENBREosQ0FESixDQUlJLG9FQUFLWixTQUFTLENBQUNhLEtBQVYsQ0FBZ0JDLFFBQXJCLENBSkosQ0FKSixDQURKLENBRkosQ0FpQkgsQ0FqQ0QsQ0FtQ2VDLHVIQUFPLENBQUN0QixNQUFELENBQXRCLEVBRUEsR0FBTXVCLGFBQVksdWpIQUFsQiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9yZWNlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vbGlua1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4uL2ZlYXR1cmVkLW1lZGlhXCI7XG5cbmNvbnN0IHJlY2VudCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaylcbiAgICBjb25zdCByZWNlbnRUYWcgPSBzdGF0ZS5zb3VyY2UucG9zdFsxMzhdO1xuICAgIGNvbnNvbGUubG9nKHJlY2VudFRhZyk7XG4gICAgY29uc3QgZmVhdHVyZWRNZWRpYUlkID0gcmVjZW50VGFnLmZlYXR1cmVkX21lZGlhO1xuXG4gICAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtmZWF0dXJlZE1lZGlhSWRdLnNvdXJjZV91cmw7XG4gICAgY29uc29sZS5sb2cobWVkaWEpO1xuXG4gICAgY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltyZWNlbnRUYWcuYXV0aG9yXTtcbiAgICBjb25zb2xlLmxvZyhhdXRob3IpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBtZWRpYSArIFwiKVwiXG4gICAgfTtcblxuICAgIHJldHVybiAoICAgIFxuXG4gICAgICAgIDxMaW5rIGxpbms9e3JlY2VudFRhZy5saW5rfSA+XG4gICAgICAgICAgICA8UmVjZW50X19jYXJkIHN0eWxlPXtiYWNrZ3JvdW5kSW1hZ2VTdHlsZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlX19yZWNlbnQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkRlcm5pZXIgc3VqZXQgZGlnaXRhbDwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVfX3RpdGxlLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnthdXRob3IubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3JlY2VudFRhZy50aXRsZS5yZW5kZXJlZH08L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWNlbnRfX2NhcmQ+XG4gICAgICAgIDwvTGluaz5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChyZWNlbnQpO1xuXG5jb25zdCBSZWNlbnRfX2NhcmQgPSBzdHlsZWQuYXJ0aWNsZWBcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDI1cHggcmdiYSgwLDAsMCwwLjA5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAuYXJ0aWNsZV9fdGl0bGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweDtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYXJ0aWNsZV9fcmVjZW50LXRpdGxlIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICBoMyB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/list/recent.js\n");

/***/ })

})