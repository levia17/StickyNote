import { Note } from "../models/notesClass.js";
import { noteInterface } from "./noteInterface.js";

var noteStorageArea = {};
export var serial = 0;


export function addNote(){
    var btnAddNote = document.querySelector(".btnAddNote span");
    btnAddNote.addEventListener("click", () => {
        serial += 1; 
        noteStorageArea += new Note(serial, "newNote");
        noteInterface();
    } ) 
    }
