import { createHeader } from "./../view/js/header.js"
import { switchMenu } from "./activities/menu.js"
import { precione_btn } from "./activities/btn.js"
import { footerIcons } from "./activities/footer_icons.js"

window.footerIcons = footerIcons

document.addEventListener("DOMContentLoaded", ()=>{
  createHeader()
  precione_btn() 
})