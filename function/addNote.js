export function addNote (){
    var btnAddNote = document.querySelector(".btnAddNote span");
    btnAddNote.addEventListener("click", () => {
        var newNote = document.createElement("div");
        document.querySelector("main .spaceForNote").appendChild(newNote)
        newNote.classList.add("newNote");
        newNote.setAttribute("contentEditable", "true");
    } ) 
} 
