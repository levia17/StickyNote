import { serial } from "./addNote.js";
var countBtn = document.querySelectorAll('.btnRemove');
export function removeNote(){
    for(var i = 0; i < countBtn.length; i++){
        countBtn[i].addEventListener('click', () => {
            console.log('123');
        })
    }
}

