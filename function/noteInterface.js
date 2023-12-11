import { serial } from "./addNote.js";

export function noteInterface(){
    var newDiv = document.createElement('div');
    document.querySelector(".spaceForNote").appendChild(newDiv);
    newDiv.setAttribute("id", serial);
    newDiv.setAttribute("contentEditable", "true");
    newDiv.classList.add("newNote");
    // Note's function
    var notesfunc = document.createElement("div");
    notesfunc.classList.add("notesfunc-container");
    document.getElementById(`${serial}`).appendChild(notesfunc); 
    // BUTTON

    // Remove notes
    var btnRemove = document.createElement("div");
    document.querySelectorAll(`.notesfunc-container`)[serial - 1].appendChild(btnRemove);
    btnRemove.classList.add('btnRemove');
    // Icon remove
    var iconRemove = document.createElement("i");
    document.querySelectorAll(`.btnRemove`)[serial - 1].appendChild(iconRemove);
    $('.notefunc-container, i').addClass(`fa-solid fa-xmark`);
    // iconRemove.setAttribute("src", "./img/x-warning-delete-close-multiply-math-icon-2048x2048-hqon3odd.png");



}