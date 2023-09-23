function sortear() {

    let primeiroNumero = Math.ceil(document.getElementById("firstNumber").value)
    let segundoNumero = Math.floor(document.getElementById("secondNumber").value)


    if (primeiroNumero >= segundoNumero) {

        resultado.innerHTML = "O PRIMEIRO NUMERO NÃO PODE SER MAIOR QUE O SEGUNDO NUMERO"

    }
    else {
        let result = Math.floor(Math.random() * (segundoNumero - primeiroNumero + 1)) + primeiroNumero;

        resultado.innerHTML = `O numero sorteado foi: ` + result
    }
}

