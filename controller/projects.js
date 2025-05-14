import { createHeader } from "./../view/js/header.js"
import { precione_btn } from "./activities/btn.js"
import { createCards } from "./activities/cards.js"

import { switchMenu } from "./activities/menu.js"
import { switchBanner } from "./activities/banner.js"


window.switchMenu = switchMenu
window.switchBanner = switchBanner

document.addEventListener("DOMContentLoaded", ()=>{
    createHeader() 
    precione_btn()
    createCards()
})