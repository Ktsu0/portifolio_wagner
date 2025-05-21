import { switchMenu } from "./../../controller/activities/menu.js"

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

    // Btns header container
    let btns_header = document.createElement("div")
    btns_header.id = "btns_header"
    btns_header.className = "space_around"

    // Definição das páginas e links atualizada
    const pages = [
      { name: "HOME", href: "index.html", iconClass: "fa-solid fa-house-chimney" },
      { name: "PROJETOS", href: "projects.html", iconClass: "fa-solid fa-folder" },
      { name: "FORMAÇÕES", href: "formations.html", iconClass: "fa-solid fa-graduation-cap" }
    ]

    // Pega só o arquivo da URL atual
    const currentPage = window.location.pathname.split("/").pop() || "index.html"

    // Criar os 3 botões dinamicamente
    pages.forEach(({ name, href, iconClass }) => {
        let btn = document.createElement("button")
        btn.className = "btn_53"

        // Ícone
        let icon = document.createElement("i")
        icon.className = `icon_h ${iconClass}`

        // Texto original
        let btn_original = document.createElement("div")
        btn_original.className = "original center_alignment"

        let text_p = document.createElement("p")
        text_p.textContent = name

        btn_original.appendChild(icon.cloneNode(true))
        btn_original.appendChild(text_p)

        // Letras animadas
        let letter_div = document.createElement("div")
        letter_div.className = "letters"
        letter_div.dataset.text = name

        for (let i = 0; i < name.length; i++) {
            let span = document.createElement("span")
            span.textContent = name[i]
            letter_div.appendChild(span)
        }

        // Monta o botão
        btn.appendChild(icon)
        btn.appendChild(btn_original)
        btn.appendChild(letter_div)

        // Se já estiver na página, desabilita o botão (opcional)
        if(currentPage === href){
            btn.disabled = true
            btn.style.opacity = "0.6"
            btn.style.cursor = "default"
        } else {
            btn.addEventListener("click", () => {
                window.location.href = href
            })
        }

        btns_header.appendChild(btn)
    })

    btns_menu.appendChild(menu_btn1)
    btns_menu.appendChild(menu_btn2)
    btns_menu.appendChild(menu_btn3)

    menu.appendChild(btns_header)

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
    header.appendChild(btns_menu)
    header.appendChild(menu)
}
