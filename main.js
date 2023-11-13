/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBoard: () => (/* binding */ createBoard),
/* harmony export */   showPath: () => (/* binding */ showPath)
/* harmony export */ });
function createBoard(container, moves) {
  container.innerHTML = "";
  for (let y = 7; y > -1; y--) {
    for (let x = 0; x < 8; x++) {
      const square = document.createElement("div");
      square.setAttribute("data-row", x);
      square.setAttribute("data-col", y);
      square.classList.add("square");
      if (moves[0] === x && moves[1] === y) {
        square.classList.add("knight");
      }
      container.append(square);
    }
  }
}

function showPath(path) {
  const info = document.querySelector(".info");
  const movesDisplay = document.querySelector(".moves");
  let text = `You made it in ${path.length - 1} moves`;
  if (path.length === 2) {
    text = text.slice(0, text.length - 1);
  }
  info.innerText = text;
  let moves = path.join(" → ");
  movesDisplay.innerText = moves;
}


/***/ }),

/***/ "./src/knightTravails.js":
/*!*******************************!*\
  !*** ./src/knightTravails.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   knightMoves: () => (/* binding */ knightMoves)
/* harmony export */ });
function knightMoves(from, to) {
  let graph = movesGraph();
  let path = bfs(graph, from);
  let shortPath = getShortestPath(path, to.join(","));
  return shortPath;
}

function movesGraph() {
  let graph = {};
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      let vertex = returnPossibleMoves(x, y);
      graph[`${x},${y}`] = vertex;
    }
  }
  return graph;
}

function returnPossibleMoves(x, y) {
  let arr = [];
  arr.push(`${x + 2},${y + 1}`);
  arr.push(`${x + 1},${y + 2}`);
  arr.push(`${x + 2},${y - 1}`);
  arr.push(`${x + 1},${y - 2}`);
  arr.push(`${x - 2},${y + 1}`);
  arr.push(`${x - 1},${y + 2}`);
  arr.push(`${x - 2},${y - 1}`);
  arr.push(`${x - 1},${y - 2}`);

  return arr.filter((n) => {
    let coor = n.split(",");
    if (coor[0] < 8 && coor[0] > -1) {
      if (coor[1] < 8 && coor[1] > -1) {
        return true;
      }
    }
  });
}

function bfs(graph, start) {
  let queue = [];
  queue.push({
    to: start.join(","),
    from: null,
    cost: 0,
  });
  let path = {};
  while (queue.length) {
    if (path[queue[0].to] && queue[0].cost == path[queue[0].to].cost) {
      path[queue[0].to].from.push(queue[0].from);
    }
    if (!path[queue[0].to]) {
      path[queue[0].to] = {
        from: [queue[0].from],
        cost: queue[0].cost,
      };
      for (let move of graph[queue[0].to]) {
        if (path[move]) continue;
        let obj = {
          to: move,
          from: queue[0].to,
          cost: queue[0].cost + 1,
        };
        queue.push(obj);
      }
    }
    queue.shift();
  }
  return path;
}

function getShortestPath(path, move) {
  let coor = move.split(",");
  if (!path[move].from[0]) {
    return [[[+coor[0], +coor[1]]]];
  }
  let arr = [];
  for (let i = 0; i < path[move].from.length; i++) {
    let road = getShortestPath(path, path[move].from[i]);
    for (let j = 0; j < road.length; j++) {
      let moves = [];
      moves = moves.concat(road[j], [[+coor[0], +coor[1]]]);
      arr.push(moves);
    }
  }
  return arr;
}
knightMoves([7, 0], [3, 3]);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _knightTravails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knightTravails */ "./src/knightTravails.js");



function clickHandler(e) {
  if (e.target.className.includes("square")) {
    start([e.target.dataset.row, e.target.dataset.col]);
  }
}
function start(target) {
  container.removeEventListener("click", clickHandler);
  let moves = (0,_knightTravails__WEBPACK_IMPORTED_MODULE_1__.knightMoves)(from, target);
  let delay = 0;
  (0,_display__WEBPACK_IMPORTED_MODULE_0__.showPath)(moves[0]);
  for (let i = 0; i < moves[0].length; i++) {
    from = moves[0][i];
    if (i === moves[0].length - 1) {
      setTimeout(() => {
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.createBoard)(container, moves[0][i]);
        container.addEventListener("click", clickHandler);
      }, delay);
      continue;
    }
    setTimeout(() => {
      (0,_display__WEBPACK_IMPORTED_MODULE_0__.createBoard)(container, moves[0][i]);
    }, delay);
    delay = delay + 500;
  }
}
const container = document.querySelector(".container");
let from = [0, 0];
container.addEventListener("click", clickHandler);

(0,_display__WEBPACK_IMPORTED_MODULE_0__.createBoard)(container, from);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSwrQkFBK0IsaUJBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixvQkFBb0IsT0FBTztBQUMzQjtBQUNBLGVBQWUsRUFBRSxHQUFHLEVBQUU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsTUFBTSxHQUFHLE1BQU07QUFDN0IsY0FBYyxNQUFNLEdBQUcsTUFBTTtBQUM3QixjQUFjLE1BQU0sR0FBRyxNQUFNO0FBQzdCLGNBQWMsTUFBTSxHQUFHLE1BQU07QUFDN0IsY0FBYyxNQUFNLEdBQUcsTUFBTTtBQUM3QixjQUFjLE1BQU0sR0FBRyxNQUFNO0FBQzdCLGNBQWMsTUFBTSxHQUFHLE1BQU07QUFDN0IsY0FBYyxNQUFNLEdBQUcsTUFBTTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdkZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtEO0FBQ0g7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw0REFBVztBQUN6QjtBQUNBLEVBQUUsa0RBQVE7QUFDVixrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQVc7QUFDbkI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBVztBQUNqQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0dHJhdmFpbHMvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9rbmlnaHR0cmF2YWlscy8uL3NyYy9rbmlnaHRUcmF2YWlscy5qcyIsIndlYnBhY2s6Ly9rbmlnaHR0cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbmlnaHR0cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0dHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHR0cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodHRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb2FyZChjb250YWluZXIsIG1vdmVzKSB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCB5ID0gNzsgeSA+IC0xOyB5LS0pIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDg7IHgrKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCB4KTtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiLCB5KTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgICAgaWYgKG1vdmVzWzBdID09PSB4ICYmIG1vdmVzWzFdID09PSB5KSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwia25pZ2h0XCIpO1xuICAgICAgfVxuICAgICAgY29udGFpbmVyLmFwcGVuZChzcXVhcmUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1BhdGgocGF0aCkge1xuICBjb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuICBjb25zdCBtb3Zlc0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vdmVzXCIpO1xuICBsZXQgdGV4dCA9IGBZb3UgbWFkZSBpdCBpbiAke3BhdGgubGVuZ3RoIC0gMX0gbW92ZXNgO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDIpIHtcbiAgICB0ZXh0ID0gdGV4dC5zbGljZSgwLCB0ZXh0Lmxlbmd0aCAtIDEpO1xuICB9XG4gIGluZm8uaW5uZXJUZXh0ID0gdGV4dDtcbiAgbGV0IG1vdmVzID0gcGF0aC5qb2luKFwiIOKGkiBcIik7XG4gIG1vdmVzRGlzcGxheS5pbm5lclRleHQgPSBtb3Zlcztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBrbmlnaHRNb3Zlcyhmcm9tLCB0bykge1xuICBsZXQgZ3JhcGggPSBtb3Zlc0dyYXBoKCk7XG4gIGxldCBwYXRoID0gYmZzKGdyYXBoLCBmcm9tKTtcbiAgbGV0IHNob3J0UGF0aCA9IGdldFNob3J0ZXN0UGF0aChwYXRoLCB0by5qb2luKFwiLFwiKSk7XG4gIHJldHVybiBzaG9ydFBhdGg7XG59XG5cbmZ1bmN0aW9uIG1vdmVzR3JhcGgoKSB7XG4gIGxldCBncmFwaCA9IHt9O1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IDg7IHgrKykge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgODsgeSsrKSB7XG4gICAgICBsZXQgdmVydGV4ID0gcmV0dXJuUG9zc2libGVNb3Zlcyh4LCB5KTtcbiAgICAgIGdyYXBoW2Ake3h9LCR7eX1gXSA9IHZlcnRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiByZXR1cm5Qb3NzaWJsZU1vdmVzKHgsIHkpIHtcbiAgbGV0IGFyciA9IFtdO1xuICBhcnIucHVzaChgJHt4ICsgMn0sJHt5ICsgMX1gKTtcbiAgYXJyLnB1c2goYCR7eCArIDF9LCR7eSArIDJ9YCk7XG4gIGFyci5wdXNoKGAke3ggKyAyfSwke3kgLSAxfWApO1xuICBhcnIucHVzaChgJHt4ICsgMX0sJHt5IC0gMn1gKTtcbiAgYXJyLnB1c2goYCR7eCAtIDJ9LCR7eSArIDF9YCk7XG4gIGFyci5wdXNoKGAke3ggLSAxfSwke3kgKyAyfWApO1xuICBhcnIucHVzaChgJHt4IC0gMn0sJHt5IC0gMX1gKTtcbiAgYXJyLnB1c2goYCR7eCAtIDF9LCR7eSAtIDJ9YCk7XG5cbiAgcmV0dXJuIGFyci5maWx0ZXIoKG4pID0+IHtcbiAgICBsZXQgY29vciA9IG4uc3BsaXQoXCIsXCIpO1xuICAgIGlmIChjb29yWzBdIDwgOCAmJiBjb29yWzBdID4gLTEpIHtcbiAgICAgIGlmIChjb29yWzFdIDwgOCAmJiBjb29yWzFdID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYmZzKGdyYXBoLCBzdGFydCkge1xuICBsZXQgcXVldWUgPSBbXTtcbiAgcXVldWUucHVzaCh7XG4gICAgdG86IHN0YXJ0LmpvaW4oXCIsXCIpLFxuICAgIGZyb206IG51bGwsXG4gICAgY29zdDogMCxcbiAgfSk7XG4gIGxldCBwYXRoID0ge307XG4gIHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcbiAgICBpZiAocGF0aFtxdWV1ZVswXS50b10gJiYgcXVldWVbMF0uY29zdCA9PSBwYXRoW3F1ZXVlWzBdLnRvXS5jb3N0KSB7XG4gICAgICBwYXRoW3F1ZXVlWzBdLnRvXS5mcm9tLnB1c2gocXVldWVbMF0uZnJvbSk7XG4gICAgfVxuICAgIGlmICghcGF0aFtxdWV1ZVswXS50b10pIHtcbiAgICAgIHBhdGhbcXVldWVbMF0udG9dID0ge1xuICAgICAgICBmcm9tOiBbcXVldWVbMF0uZnJvbV0sXG4gICAgICAgIGNvc3Q6IHF1ZXVlWzBdLmNvc3QsXG4gICAgICB9O1xuICAgICAgZm9yIChsZXQgbW92ZSBvZiBncmFwaFtxdWV1ZVswXS50b10pIHtcbiAgICAgICAgaWYgKHBhdGhbbW92ZV0pIGNvbnRpbnVlO1xuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgIHRvOiBtb3ZlLFxuICAgICAgICAgIGZyb206IHF1ZXVlWzBdLnRvLFxuICAgICAgICAgIGNvc3Q6IHF1ZXVlWzBdLmNvc3QgKyAxLFxuICAgICAgICB9O1xuICAgICAgICBxdWV1ZS5wdXNoKG9iaik7XG4gICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnNoaWZ0KCk7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmZ1bmN0aW9uIGdldFNob3J0ZXN0UGF0aChwYXRoLCBtb3ZlKSB7XG4gIGxldCBjb29yID0gbW92ZS5zcGxpdChcIixcIik7XG4gIGlmICghcGF0aFttb3ZlXS5mcm9tWzBdKSB7XG4gICAgcmV0dXJuIFtbWytjb29yWzBdLCArY29vclsxXV1dXTtcbiAgfVxuICBsZXQgYXJyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFttb3ZlXS5mcm9tLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHJvYWQgPSBnZXRTaG9ydGVzdFBhdGgocGF0aCwgcGF0aFttb3ZlXS5mcm9tW2ldKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvYWQubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBtb3ZlcyA9IFtdO1xuICAgICAgbW92ZXMgPSBtb3Zlcy5jb25jYXQocm9hZFtqXSwgW1srY29vclswXSwgK2Nvb3JbMV1dXSk7XG4gICAgICBhcnIucHVzaChtb3Zlcyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59XG5rbmlnaHRNb3ZlcyhbNywgMF0sIFszLCAzXSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUJvYXJkLCBzaG93UGF0aCB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7IGtuaWdodE1vdmVzIH0gZnJvbSBcIi4va25pZ2h0VHJhdmFpbHNcIjtcblxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcyhcInNxdWFyZVwiKSkge1xuICAgIHN0YXJ0KFtlLnRhcmdldC5kYXRhc2V0LnJvdywgZS50YXJnZXQuZGF0YXNldC5jb2xdKTtcbiAgfVxufVxuZnVuY3Rpb24gc3RhcnQodGFyZ2V0KSB7XG4gIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgbGV0IG1vdmVzID0ga25pZ2h0TW92ZXMoZnJvbSwgdGFyZ2V0KTtcbiAgbGV0IGRlbGF5ID0gMDtcbiAgc2hvd1BhdGgobW92ZXNbMF0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmVzWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgZnJvbSA9IG1vdmVzWzBdW2ldO1xuICAgIGlmIChpID09PSBtb3Zlc1swXS5sZW5ndGggLSAxKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY3JlYXRlQm9hcmQoY29udGFpbmVyLCBtb3Zlc1swXVtpXSk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNyZWF0ZUJvYXJkKGNvbnRhaW5lciwgbW92ZXNbMF1baV0pO1xuICAgIH0sIGRlbGF5KTtcbiAgICBkZWxheSA9IGRlbGF5ICsgNTAwO1xuICB9XG59XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbmxldCBmcm9tID0gWzAsIDBdO1xuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuXG5jcmVhdGVCb2FyZChjb250YWluZXIsIGZyb20pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9