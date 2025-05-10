import { createHeader } from "./header.js"
import { precione_btn } from "./btn.js"
import { createCards } from "./cards.js"

import { switchMenu } from "./menu.js"


window.switchMenu = switchMenu

document.addEventListener("DOMContentLoaded", ()=>{
    createHeader() 
    precione_btn()
    createCards()
})