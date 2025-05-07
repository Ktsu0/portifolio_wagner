document.addEventListener("DOMContentLoaded",()=>{

    const header = document.getElementById("header")

    let logo_text = document.createElement("div")
    logo_text.id = "logo_profession"
    logo_text.className = "start"

    // Ghost Header
    let ghost = document.createElement("div")
    ghost.id = "ghost"
    ghost.className = "loader"

    let head = document.createElement("div")
    head.className = "head"

    let flames = document.createElement("div")
    flames.className = "flames"

    for (let i = 0; i < 15; i++) 
    let particle = document.createElement("div")
    particle.className = "particle"

    let eye = document.createElement("div")
    eye.className = "eye"

    let pupil = document.createElement("div")
    pupil.className = "pupil"

    let ghost_fog = document.createElement("div")
    ghost_fog.className = "ghost_fog"

    // Text Profession
    let profession = document.createElement("h1")
    profession.id = "programming-title"
    profession.className = "center_alignment"

    // Btns Header
    let btns_header = document.createElement("div")
    btns_header.id = "btns_header"
    btns_header.className = "space_around"

    let btn_53_1 = document.createElement("button")
    btn_53_1.className = "btn_53"

    let btn_53_2 = document.createElement("button")
    btn_53_2.className = "btn_53"

    let btn_53_3 = document.createElement("button")
    btn_53_3.className = "btn_53"

    let icon_1 = document.createElement("i")
    icon_1.className = "icon_h"
    icon_1.className = "fa-solid fa-house-chimney"

    let icon_2 = document.createElement("i")
    icon_2.className = "icon_h"
    icon_2.className = "fa-solid fa-folder"

    let icon_3 = document.createElement("i")
    icon_3.className = "icon_h"
    icon_3.className = "fa-solid fa-graduation-cap"



    eye.appendChild(pupil)
    flames.appendChild(particle)

    ghost.appendChild(head)
    ghost.appendChild(flames)
    ghost.appendChild(eye)

    logo_text.appendChild(ghost_fog)
    logo_text.appendChild(ghost)
    logo_text.appendChild(profession)

    header.appendChild(logo_text)

    btn_53_1.appendChild(icon_1)
    btn_53_2.appendChild(icon_2)
    btn_53_3.appendChild(icon_3)

    btns_header.appendChild(btn_53_1)
    btns_header.appendChild(btn_53_2)
    btns_header.appendChild(btn_53_3)

    header.appendChild(btns_header)
})