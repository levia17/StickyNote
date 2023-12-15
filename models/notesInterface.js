import { serial } from "../function/addNote.js";

export class noteInterface{
    constructor(name){
        this.name = name;
    }
    createDiv( location, noteclass){
        var newDiv = document.createElement('div');
        document.querySelector(`${location}`).appendChild(newDiv);
        newDiv.addClass(`${noteclass}`);
        newDiv.attr('id', `${serial}`);
    }
}