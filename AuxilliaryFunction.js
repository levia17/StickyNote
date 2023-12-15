import { serial } from "./function/addNote.js";

export function createEle(type, eleClass){
console.log(type);
console.log(eleClass);
        var newEle = document.createElement(type);
        newEle.classList.add(eleClass);
        document.getElementById(`${serial}`).appendChild(newEle); 
}