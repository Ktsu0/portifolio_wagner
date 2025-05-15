import { createHeader } from "./../view/js/header.js"
import { precione_btn } from "./activities/btn.js"
import { createFormation } from "./activities/formation_card.js"

import { switchMenu } from "./activities/menu.js"

window.switchMenu = switchMenu

document.addEventListener("DOMContentLoaded", ()=>{
    createHeader() 
    precione_btn()
    createFormation()
})