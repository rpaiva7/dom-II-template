
/* CRIANDO ELEMENTOS 

No template HTML do exercício, temos uma lista de elementos. Utilizando a manipulação do DOM, acrescente um item ao começo da lista e outro ao final. O texto dos elementos deve ser "Item 0" e "Item 5", respectivamente.  */

function adicionarItemZero() {
    const lista = document.getElementById('lista')
    const itemLista = document.createElement('li')
    const itemTextoZero = document.createTextNode('Item 0')
    itemLista.appendChild(itemTextoZero)


    lista.insertAdjacentElement('afterbegin', itemLista)

}

function adicionarItemCinco() {
    const lista = document.getElementById('lista')
    const itemLista = document.createElement('li')
    const itemTextoCinco = document.createTextNode('Item 5')
    itemLista.appendChild(itemTextoCinco)
    lista.insertAdjacentElement('beforeend', itemLista)

}

adicionarItemZero()
adicionarItemCinco()