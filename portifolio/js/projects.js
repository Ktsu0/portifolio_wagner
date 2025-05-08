import { createHeader } from "./header.js"
import { switchMenu } from "./menu.js"
import { precione_btn } from "./btn.js"

window.switchMenu = switchMenu

document.addEventListener("DOMContentLoaded", ()=>{
    createHeader() 
    precione_btn()
})