export function createCards(){
    let cards_section = document.getElementById('cards')

for(let i = 0; i < 40; i++ ){
    let div_cards = document.createElement("div")
    div_cards.className = "card center_alignment column"

    let i_cards = document.createElement("i")
    i_cards.className = "icon fa-brands fa-instagram icontheer icon"

    let text_cards = document.createElement("h1")
    text_cards.textContent = "Nome do Produto"

    let valor_cards = document.createElement("h4")
    valor_cards.textContent = "R$ 16,00"

    div_cards.appendChild(i_cards)
    div_cards.appendChild(text_cards)
    div_cards.appendChild(valor_cards)

    cards_section.appendChild(div_cards)
}
}