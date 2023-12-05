export default function addNote(){
    var listColor = ["red", "blue", "green"];
    var btnAddNote = document.querySelector(".btnAddNote span");
    btnAddNote.addEventListener("click", () => {
        var newNote = document.createElement("div");
        document.querySelector("main .spaceForNote").appendChild(newNote)
        newNote.classList.add("newNote");
        var colorRandom = Math.floor(Math.random()*listColor.length);
        newNote.style.backgroundColor = listColor[colorRandom];
        newNote.setAttribute("contentEditable", "true");
    } ) 
} 
