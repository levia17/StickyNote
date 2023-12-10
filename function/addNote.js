import { Note } from "../models/notesClass.js";

var noteStorageArea = {};
var serial = 0;


export default function addNote(){
    var btnAddNote = document.querySelector(".btnAddNote span");
    btnAddNote.addEventListener("click", () => {
        serial += 1; 
        noteStorageArea += new Note(serial, "newNote");
        var newDiv = document.createElement('div');
        document.querySelector(".spaceForNote").appendChild(newDiv);
        newDiv.setAttribute("id", serial);
        newDiv.setAttribute("contentEditable", "true");
        newDiv.classList.add("newNote");
        // Note's function
        var notesfunc = document.createElement("div");
        notesfunc.classList.add("notesfunc");
        document.getElementById(`${serial}`).appendChild(notesfunc); 
    } ) 
    }
