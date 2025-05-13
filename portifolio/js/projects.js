import { createHeader } from "./header.js"
import { precione_btn } from "./btn.js"
import { createCards } from "./cards.js"

import { switchMenu } from "./menu.js"
import { switchBanner } from "./banner.js";


window.switchMenu = switchMenu
window.switchBanner = switchBanner

document.addEventListener("DOMContentLoaded", ()=>{
    createHeader() 
    precione_btn()
    createCards()
})