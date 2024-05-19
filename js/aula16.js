// Aula 16 de JS Dado Virtual

// FUNÇÃO para sortear o dado quando clicado
function sortear(dado) {
    let imgDado = dado.querySelector('.imgDado');
    let dadoRolando = document.querySelector('#dadoRolando');

    // adicionar a animacao
    imgDado.classList.add('animar');

    // tocar o efeito sonoro
    dadoRolando.play();

    // usar setTimeout para executar as acoes apos 1.75 segundos
    setTimeout(function() {
        // ARMAZENAR NUMERO SORTEADO NA VARIAVEL
        let numeroAtual = parseInt(imgDado.getAttribute('data-numero')) || 0; // obtém o número atual do atributo data-numero
        let novoNumero = (numeroAtual % 6) + 1; // calcula o novo número (vai de 1 a 6)

        // definir atributo src com base no numero
        imgDado.setAttribute('src', 'imagens/dado/' + novoNumero + '.png');

        // definir o novo número no atributo data-numero
        imgDado.setAttribute('data-numero', novoNumero);

        // retirar a animacao
        imgDado.classList.remove('animar');
        
        // Definir a variável "sorteado"
        let sorteado = document.querySelector('#sorteado');
        sorteado.classList.remove('aparecer');
    }, 100);
}

// EVENTO para chamar a função sortear quando clicar no dado
// Certifique-se de que o elemento com a classe '.dado' existe no HTML
document.querySelector('.dado').addEventListener('click', function() {
    sortear(this);
});

// FUNCAO que gera numero randomico inteiro
// incluindo o minimo e o maximo
function getRandomInt(min, max) {
    min = Math.ceil(min); // arredonda para cima  ceil  = teto
    max = Math.floor(max); // arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
