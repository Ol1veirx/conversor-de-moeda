const btnConvert = document.getElementById('btn-convert')

btnConvert.addEventListener('click', () => {
    const opcao = document.getElementById('outhersCoins')

    const moedaSelecionada = opcao.value

    const valorBRL = parseFloat(document.getElementById('valorEmBrl').value)

    const taxaDolar = 5.3;
    const taxaEuro = 6.2;
    const taxaLibra = 7.5;
    const taxaIene = 0.048

    let resultado;
    switch(moedaSelecionada){
        case 'dol':
            resultado = valorBRL / taxaDolar
            exibirResultado('src/img/eua.png', resultado)
            break;
        case 'eur':
            resultado = valorBRL / taxaEuro;
            exibirResultado('src/img/euro.png', resultado)
            break;
        case 'lib':
            resultado = valorBRL / taxaLibra;
            exibirResultado('src/img/libra.png', resultado)
            break;
        case 'iene':
            resultado = valorBRL / taxaIene;
            exibirResultado('src/img/iene.png', resultado)
            break;
        default:
            resultado = 'Escolha uma moeda válida'
            document.getElementById('resultado').innerHTML = resultado
    }
    

    const brlValue = document.getElementById('brl-value')
    brlValue.innerHTML = `Valor em BRL: R$${valorBRL}`

})

function exibirResultado(bandeiraSRC, valorConvertido){
    const resultadoDiv = document.getElementById('resultado')
    const imgElemento = document.getElementById('bandeira');
    const spanElemento = document.getElementById('coin-convert')

    imgElemento.src = bandeiraSRC
    imgElemento.alt = 'Bandeira do pais'

    spanElemento.textContent = `O valor convertido é: ${valorConvertido.toFixed(2)} ${document.getElementById('outhersCoins').value.toUpperCase()}`
}