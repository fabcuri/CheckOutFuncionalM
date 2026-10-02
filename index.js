function pagarComPix(){
    let preco = Number(document.getElementById("preco").value)
    let frete = Number(document.getElementById("frete").value)
    let valorAPagar = (preco * 0.90) + frete
    let resultado = document.getElementById('resultado')
    resultado.innerText = `${valorAPagar}`
}