import { createToDo } from './create-to-do.js';
import { projectLoad } from './project-load.js';
import { displayTheForm, addItemToCheckList, clearForm, displayToDo } from './dom.js'
import './styles.css';


projectLoad();
displayToDo();

let clickEventsModule = (function() {

    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    const addToChecklist = document.querySelector(".add-to-checklist");
    addToChecklist.addEventListener("click", addItemToCheckList);

    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);

    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", createToDo);
    
})();