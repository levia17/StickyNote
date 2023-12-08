var spaceForNote = {};

export default function addNote(){
    var listColor = ["red", "blue", "green"];
    var btnAddNote = document.querySelector(".btnAddNote span");
    btnAddNote.addEventListener("click", () => {
        var newNote = document.createElement("div");
        for(var i = 1; i <= Object.keys(spaceForNote).length; i++){
        
        }
        document.querySelector("main .spaceForNote").appendChild(newNote)
        newNote.classList.add("newNote");
        var colorRandom = Math.floor(Math.random()*listColor.length);
        newNote.style.backgroundColor = listColor[colorRandom];
        newNote.setAttribute("contentEditable", "true");
        // Note's function
        var notesfunc = document.createElement("div");
        notesfunc.classList.add("notesfunc");
        document.querySelector("main .newNote").appendChild(notesfunc); 
        
    } ) 

    }
