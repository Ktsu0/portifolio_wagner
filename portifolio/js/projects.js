import { createHeader } from "./header.js"
import { switchMenu } from "./menu.js"
import { Ghost } from "./ghost.js"
import { GhostShadow } from "./ghost_shadow.js"
import { TextHeader } from "./text_header.js"

window.switchMenu = switchMenu

document.addEventListener("DOMContentLoaded", ()=>{
    createHeader() 
})