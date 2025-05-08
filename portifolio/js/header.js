import { switchMenu } from "./menu.js"


export function createHeader(){
    const header = document.getElementById("header")

    let logo_text = document.createElement("div")
    logo_text.id = "logo_profession"
    logo_text.className = "start"

    // Ghost
    let ghost = document.createElement("div")
    ghost.id = "ghost"
    ghost.className = "loader"

    let head = document.createElement("div")
    head.className = "head"

    let flames = document.createElement("div")
    flames.className = "flames"

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

    // Menu
    let btns_menu = document.createElement("div")
    btns_menu.id = "btn_menu"
    btns_menu.className ="column"
    btns_menu.onclick = switchMenu

    let menu_btn1 = document.createElement("span")
    menu_btn1.className = "menu_btn menu_btn1"
    
    let menu_btn2 = document.createElement("span")
    menu_btn2.className = "menu_btn menu_btn2"

    let menu_btn3 = document.createElement("span")
    menu_btn3.className = "menu_btn menu_btn3"

    let menu = document.createElement("div")
    menu.id = "menu_container"
    menu.className = "space-around"

    // Btns 
    let btns_header = document.createElement("div")
    btns_header.id = "btns_header"
    btns_header.className = "space_around"

    let btn_53_1 = document.createElement("button")
    btn_53_1.className = "btn_53"

    const currentPage = window.location.pathname

    if (currentPage.includes("index.html") || currentPage === "/index.html") {
        btn_53_1.addEventListener("click", () => {
            window.location.href = "projects.html";
        });
    } else {
        btn_53_1.addEventListener("click", () => {
            window.location.href = "index.html";
        })
    }

    let btn_53_2 = document.createElement("button")
    btn_53_2.className = "btn_53"

    if (currentPage.includes("index.html") || currentPage === "/index.html") {
        btn_53_2.addEventListener("click", () => {
            window.location.href = "projects.html";
        });
    } else {
        btn_53_2.addEventListener("click", () => {
            window.location.href = "index.html";
        })
    }

    let btn_53_3 = document.createElement("button")
    btn_53_3.className = "btn_53"

    if (currentPage.includes("index.html") || currentPage === "/index.html") {
        btn_53_3.addEventListener("click", () => {
            window.location.href = "projects.html";
        });
    } else {
        btn_53_3.addEventListener("click", () => {
            window.location.href = "index.html";
        })
    }

    // btns_front
    let btn_original_1 = document.createElement("div")
    btn_original_1.className = "original center_alignment"

    let btn_original_2 = document.createElement("div")
    btn_original_2.className = "original center_alignment"

    let btn_original_3 = document.createElement("div")
    btn_original_3.className = "original center_alignment"

    // Texts
    let home = document.createElement("p")
    home.textContent = "HOME"

    let projetos = document.createElement("p")
    projetos.textContent = "PROJETOS"

    let formacao = document.createElement("p")
    formacao.textContent = "FORMAÇÃO"

    // Animation Letters
    let letter_1 = document.createElement("div")
    letter_1.className = "letters"
    letter_1.dataset.text = "HOME"

    let letter_2 = document.createElement("div")
    letter_2.className = "letters"
    letter_2.dataset.text = "PROJETOS"

    let letter_3 = document.createElement("div")
    letter_3.className = "letters"
    letter_3.dataset.text = "FORMAÇÃO"

    // Spans
    for (let i = 0; i < letter_1.dataset.text.length; i++) {
        let span = document.createElement("span");
        span.textContent = letter_1.dataset.text[i];
        letter_1.appendChild(span);
      }

    for (let i = 0; i < letter_2.dataset.text.length; i++) {
        let span = document.createElement("span");
        span.textContent = letter_2.dataset.text[i];
        letter_2.appendChild(span);
    }

    for (let i = 0; i < letter_3.dataset.text.length; i++) {
        let span = document.createElement("span");
        span.textContent = letter_3.dataset.text[i];
        letter_3.appendChild(span);
    }

    // Icons
    let icon_1 = document.createElement("i")
    icon_1.className = "icon_h fa-solid fa-house-chimney"

    let icon_2 = document.createElement("i")
    icon_2.className = "icon_h fa-solid fa-folder"

    let icon_3 = document.createElement("i")
    icon_3.className = "icon_h fa-solid fa-graduation-cap"

    // Clones dos ícones
    let icon_1_clone = icon_1.cloneNode(true)
    let icon_2_clone = icon_2.cloneNode(true)
    let icon_3_clone = icon_3.cloneNode(true)

    // Montagem do Ghost
    eye.appendChild(pupil)
    flames.appendChild(particle)
    ghost.appendChild(head)
    ghost.appendChild(flames)
    ghost.appendChild(eye)

    // Montagem do Logo
    logo_text.appendChild(ghost_fog)
    logo_text.appendChild(ghost)
    logo_text.appendChild(profession)
    header.appendChild(logo_text)

    // Botões com ícones e textos
    btn_original_1.appendChild(icon_1_clone)
    btn_original_1.appendChild(home)
    btn_original_2.appendChild(icon_2_clone)
    btn_original_2.appendChild(projetos)
    btn_original_3.appendChild(icon_3_clone)
    btn_original_3.appendChild(formacao)

    btn_53_1.appendChild(icon_1)
    btn_53_2.appendChild(icon_2)
    btn_53_3.appendChild(icon_3)

    btn_53_1.appendChild(btn_original_1)
    btn_53_2.appendChild(btn_original_2)
    btn_53_3.appendChild(btn_original_3)

    btn_53_1.appendChild(letter_1)
    btn_53_2.appendChild(letter_2)
    btn_53_3.appendChild(letter_3)

    btns_header.appendChild(btn_53_1)
    btns_header.appendChild(btn_53_2)
    btns_header.appendChild(btn_53_3)

    btns_menu.appendChild(menu_btn1)
    btns_menu.appendChild(menu_btn2)
    btns_menu.appendChild(menu_btn3)

    menu.appendChild(btns_header)

    header.appendChild(btns_menu)
    header.appendChild(menu)
}
