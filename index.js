function pagarComPix(){
    let preco = Number(document.getElementById("preco").value)
    let frete = Number(document.getElementById("frete").value)
    let valorAPagar = (preco * 0.90) + frete
    let resultado = document.getElementById('resultado')
    resultado.innerText = `${valorAPagar}`
}
function pagarComDinheiro(){
    let preco = Number(document.getElementById("preco").value)
    let frete = Number(document.getElementById("frete").value)
    let valorAPagar = (preco * 0.95) + frete
    let resultado = document.getElementById('resultado')
    resultado.innerText = `${valorAPagar}`
}
function pagarComCartao(){
    let preco = Number(document.getElementById("preco").value)
    let frete = Number(document.getElementById("frete").value)
    let valorAPagar = preco + frete
    let resultado = document.getElementById('resultado')
    resultado.innerText = `${valorAPagar}`
}
function pagarParcelado(){
    let preco = Number(document.getElementById("preco").value)
    let frete = Number(document.getElementById("frete").value)
    let valorAPagar = (preco * 1.10) + frete
    let resultado = document.getElementById('resultado')
    resultado.innerText = `${valorAPagar}`
}