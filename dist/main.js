(() => {
    "use strict";
    var __webpack_modules__ = ({

 "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
 ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n});\nvar ___CSS_LOADER_EXPORT___ = __webpack_require__.n(__webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\"))();\n___CSS_LOADER_EXPORT___.push([module.id, `html, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: aqua;\r\n}\r\n\r\n.content {\r\n    border-style: groove;\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    grid-template-rows: .1fr;\r\n    text-align: center;\r\n    min-height: 100vh;\r\n}\r\n\r\n.projects .card {\r\n    background-color: #68a2ec;\r\n    color: black;\r\n    text-align: center;\r\n    min-height: 400px;\r\n    display: grid;\r\n    box-shadow: 5px 5px 5px black;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\n.form-heading {\r\n    border-style: groove;\r\n}\r\n\r\n.form {\r\n    border-style: groove;\r\n}\r\n\r\n.todos-heading {\r\n    border-style: groove;\r\n}\r\n\r\n.projects {\r\n    background-color: #bccbde;\r\n    border-style: groove;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n    grid-column: 2 / 3;\r\n    gap: 15px;\r\n    padding: 15px;\r\n}\r\n\r\n.add-todo-button {\r\n    margin-top: 40px;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n    box-shadow: 5px 5px 5px black;\r\n}\r\n\r\n#add-todo {\r\n    display: grid;\r\n    grid-template-columns: .1fr 1fr;\r\n    gap: 10px;\r\n    margin: 50px 50px 25px 50px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.todo-ul {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    padding: 0px;\r\n}\r\n\r\nli {\r\n    list-style-type: none;\r\n    margin: 5px;\r\n    border: 1px solid black;\r\n    text-align: left;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.remove-checklist-item {\r\n    justify-self: right;\r\n    cursor: pointer;\r\n} \r\n\r\n#add-to-checklist {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.submit-button, .reset-button {\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n    box-shadow: 5px 5px 5px black;\r\n}\r\n\r\n.add-to-checklist {\r\n    border-radius: 10px;\r\n    box-shadow: 5px 5px 5px black;\r\n}\r\n\r\n.reset-button {\r\n    margin-left: 20px;\r\n}\r\n\r\n.check-list-label {\r\n    text-align: left;\r\n    padding-top: 50px;\r\n}\r\n\r\n.done {\r\n    text-decoration: line-through;\r\n    color: gray;\r\n}\r\n\r\n.display-li {\r\n    cursor: pointer;\r\n}\r\n\r\n.remove-todo-button {\r\n    grid-row: 5 / 6;\r\n    font-weight: 900;\r\n    background-color: red;\r\n    border-radius: 10px;\r\n}`, \"\"]);\nconst __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://isaiah-santillan-todolist-1/./node_modules/css-loader/dist/cjs.js!./src/styles.css");

 }),

 "./src/index.js":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_to_do_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-to-do.js */ \"./src/create-to-do.js\");\n/* harmony import */ var _project_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-load.js */ \"./src/project-load.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n(0,_project_load_js__WEBPACK_IMPORTED_MODULE_1__.projectLoad)();\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.displayToDo)();\n\nlet clickEventsModule = (function() {\n    const addNewToDo = document.querySelector(\".add-todo-button\");\n    addNewToDo.addEventListener(\"click\", _dom_js__WEBPACK_IMPORTED_MODULE_2__.displayTheForm);\n\n    const addToChecklist = document.querySelector(\".add-to-checklist\");\n    addToChecklist.addEventListener(\"click\", _dom_js__WEBPACK_IMPORTED_MODULE_2__.addItemToCheckList);\n\n    const clearButton = document.querySelector(\".reset-button\");\n    clearButton.addEventListener(\"click\", _dom_js__WEBPACK_IMPORTED_MODULE_2__.clearForm);\n\n    const submitButton = document.querySelector(\".submit-button\");\n    submitButton.addEventListener(\"click\", _create_to_do_js__WEBPACK_IMPORTED_MODULE_0__.createToDo);\n})();\n\n//# sourceURL=webpack://isaiah-santillan-todolist-1/./src/index.js?");

 })

    });

    var __webpack_module_cache__ = {};
    
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }
        var module = __webpack_module_cache__[moduleId] = {
            id: moduleId,
            exports: {}
        };
    
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    
        return module.exports;
    }
    
    (() => {
        __webpack_require__.n = (module) => {
            var getter = module && module.__esModule ?
                () => (module['default']) :
                () => (module);
            __webpack_require__.d(getter, { a: getter });
            return getter;
        };
    })();
    
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for(var key in definition) {
                if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                }
            }
        };
    })();
    
    (() => {
        __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    })();
    
    (() => {
        __webpack_require__.r = (exports) => {
            if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            }
            Object.defineProperty(exports, '__esModule', { value: true });
        };
    })();
    
    (() => {
        __webpack_require__.nc = undefined;
    })();

    var __webpack_exports__ = __webpack_require__("./src/index.js");
})();