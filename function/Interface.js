import { serial } from "./addNote.js";
// import { noteInterface } from "../models/notesInterface.js";
import { createEle } from "../AuxilliaryFunction.js";

export function Interface(){
    var newDiv = document.createElement('div');
    document.querySelector(".spaceForNote").appendChild(newDiv);
    newDiv.setAttribute("id", serial);
    newDiv.setAttribute("contentEditable", "true");
    newDiv.classList.add("newNote");

    // Note's function
    // new noteInterface('note').createDiv( `#${serial}`, `notesfunc`);
    createEle(`div`, `notesfunc`);
        // var notesfunc = document.createElement("div");
        // notesfunc.classList.add("notesfunc");
        // document.getElementById(`${serial}`).appendChild(notesfunc); 
    // BUTTON

    // Remove notes
    var btnRemove = document.createElement("div");
    document.querySelectorAll(`.notesfunc`)[serial - 1].appendChild(btnRemove);
    btnRemove.classList.add('btnRemove');
    // Icon remove
    var iconRemove = document.createElement("i");
    document.querySelectorAll(`.btnRemove`)[serial - 1].appendChild(iconRemove);
    $('.notefunc, i').addClass(`fa-solid fa-xmark`);
}