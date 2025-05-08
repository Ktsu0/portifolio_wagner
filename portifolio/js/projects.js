import { createHeader } from "./header.js";
import { switchMenu } from "./menu.js";

window.switchMenu = switchMenu

document.addEventListener("DOMContentLoaded", ()=>{
    createHeader() 
})