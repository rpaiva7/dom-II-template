
/* EXPLORANDO EVENTOS

Neste template, temos um input para o usuário digitar um texto, e um parágrafo em branco. Utilizando eventos, verifique se o usuário está segurando Shift enquanto digita. Caso esteja, altere o valor do páragrafo para: ATENÇÃO: SEGURANDO SHIFT. Caso não esteja, o parágrafo volta a estar vazio.  */

function checaCaps(event) {
    if(event.shiftKey) {
        const mensagem = document.getElementById('mensagem')
        mensagem.innerHTML = 'ATENÇÃO: SEGURANDO SHIFT'
    } else {
        const mensagem = document.getElementById('mensagem')
        mensagem.innerHTML = ""
    }
}