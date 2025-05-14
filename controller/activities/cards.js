import { cards_bd } from "./../../model/cards_bd.js"


export function createCards(){
    let cards_section = document.getElementById('cards')

for(let i = 0; i < cards_bd.length; i++ ){
    let div_cards = document.createElement("div")
    div_cards.className = "card center_alignment column"

    let i_cards = document.createElement("img")
    i_cards.className = "imgs"
    i_cards.src = cards_bd[i].img

    let text_cards = document.createElement("h1")
    text_cards.textContent = cards_bd[i].name

    let valor_cards = document.createElement("h3")
    valor_cards.textContent = cards_bd[i].language

    div_cards.appendChild(i_cards)
    div_cards.appendChild(text_cards)
    div_cards.appendChild(valor_cards)

    cards_section.appendChild(div_cards)
}
    
}