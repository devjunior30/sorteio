function sortear() {

    let primeiroNumero = Math.ceil(document.getElementById("firstNumber").value)
    let segundoNumero = Math.floor(document.getElementById("secondNumber").value)


if(primeiroNumero >= segundoNumero) {

resultado.innerHTML= "O PRIMEIRO NUMERO NÃO PODE SER MAIOR QUE O SEGUNDO NUMERO"

} else if (primeiroNumero && segundoNumero < 10) {

    resultado.innerHTML= "O numero precisa ser maior que 10 (dez)"

}

else { let result = Math.floor(Math.random() * (segundoNumero - primeiroNumero + 1)) + primeiroNumero;

    resultado.innerHTML = `O numero sorteado foi: ` + result}

}

