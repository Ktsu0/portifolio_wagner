import { formation_bd } from "./../../model/formation_bd.js"

export function createFormation() {
    let cards_section = document.getElementById('cards')

    for (let i = 0; i < formation_bd.length; i++) {
        let flip_card = document.createElement("div")
        flip_card.className = "flip-card"

        let flip_card_inner = document.createElement("div")
        flip_card_inner.className = "flip-card-inner"

        let flip_card_front = document.createElement("div")
        flip_card_front.className = "flip-card-front column"

        let name_cards = document.createElement("h1")
        name_cards.style.fontSize = "3vh"
        name_cards.textContent = formation_bd[i].name

        let i_cards = document.createElement("img")
        i_cards.className = "imgs"
        i_cards.src = formation_bd[i].img

        flip_card_front.appendChild(name_cards)
        flip_card_front.appendChild(i_cards)

        let flip_card_back = document.createElement("div")
        flip_card_back.className = "flip-card-back column"

        let text_cards = document.createElement("h3")
        text_cards.textContent = formation_bd[i].text

        // Botão Diploma
        let diplomaBtn = document.createElement("button")
        diplomaBtn.className = "icon-button"
        diplomaBtn.onclick = () => {
            if (formation_bd[i].diploma) {
                window.open(formation_bd[i].diploma, '_blank')
            }
        }
        let diplomaIcon = document.createElement("i")
        diplomaIcon.className = "fas fa-certificate"
        diplomaBtn.appendChild(diplomaIcon)

        // Botão Instituição
        let institutionBtn = document.createElement("button")
        institutionBtn.className = "icon-button"
        institutionBtn.onclick = () => {
            if (formation_bd[i].institution) {
                window.open(formation_bd[i].institution, '_blank')
            }
        }
        let institutionIcon = document.createElement("i")
        institutionIcon.className = "fas fa-school"
        institutionBtn.appendChild(institutionIcon)

        let buttonsWrapper = document.createElement("div")
        buttonsWrapper.className = "button-wrapper"
        buttonsWrapper.appendChild(diplomaBtn)
        buttonsWrapper.appendChild(institutionBtn)

        flip_card_back.appendChild(text_cards)
        flip_card_back.appendChild(buttonsWrapper)

        flip_card_inner.appendChild(flip_card_front)
        flip_card_inner.appendChild(flip_card_back)

        flip_card.appendChild(flip_card_inner)
        cards_section.appendChild(flip_card)
    }
}
