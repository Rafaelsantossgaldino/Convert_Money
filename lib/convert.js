// Calculo da Conversao
const convert = (cotacao, quantidade) => {
    return cotacao * quantidade
}

// Quantos digitos depois da virgula
const money = valor => {
    return parseFloat(valor).toFixed(2)
}

module.exports = {
    convert,
    money
}