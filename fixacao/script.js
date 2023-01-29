
/* EXERCÍCIO DE FIXAÇÃO

Neste template, temos uma lista de itens, e um formulário. Agora, ao clicar no botão "Enviar", devemos adicionar o conteúdo do formulário à nossa lista de itens. */

function insereItem(event) {
    event.preventDefault()

    const input = document.getElementById('meu-input')
    const lista = document.getElementById('lista')


/* Essas 3 linhas de código abaixo permitem que eu insira um novo elemento de texto na minha lista */
    const ItemLista = document.createElement('li')
    const itemTexto = document.createTextNode(input.value)
    ItemLista.appendChild(itemTexto)


  /* Esse código abaixo permite que o novo elemento de texto digitado na caixa de input vá para o final da lista */
    lista.insertAdjacentElement('beforeend', ItemLista)
    input.value = "" /* Apaga o nome digitado na caixa de input após clicar no botão */
}