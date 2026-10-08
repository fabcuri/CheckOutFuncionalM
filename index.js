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
    let valorAPagar = preco * 1.05 + frete
    let resultado = document.getElementById('resultado')
    resultado.innerText = `${valorAPagar}`
}

function pagamento(metodo){
    let preco = Number(document.getElementById("preco").value)
    let frete = Number(document.getElementById("frete").value)
    let valorAPagar = 0
    if(metodo == "Pix"){
        valorAPagar = preco * 0.9 + frete
    }
if(metodo == "Dinheiro"){
    valorAPagar = preco * 0.95 + frete
}
if(metodo == "Cartao"){
    valorAPagar = preco  + frete
}
if(metodo == "Parcelado"){
    valorAPagar = preco * 1.05 + frete
}
    let resultado = document.getElementById('resultado')
    let forma = document.getElementById('forma')
    forma.innerText = `Forma: ${metodo}`
    resultado.innerText = `Total:  ${valorAPagar}`
    
}