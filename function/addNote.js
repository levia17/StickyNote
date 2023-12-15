import { Note } from "../models/notesInfomation.js";
import { Interface } from "./Interface.js";

export var noteStorageArea = {};
export var serial = 0;


export function addNote(){
    var btnAddNote = document.querySelector(".btnAddNote span");
    btnAddNote.addEventListener("click", () => {
        serial += 1; 
        noteStorageArea += new Note(serial, "newNote");
        Interface();
        console.log(noteStorageArea);
    } ) 
    }
