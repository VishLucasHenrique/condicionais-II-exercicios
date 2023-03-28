const seuNumero = Number(prompt("Insira um numero"))

const comIf = () => {
    if(seuNumero % 2 == 0) {
        if(seuNumero % 3 == 0) {
            alert("Seu número é divisivel por 2 e por 3")
         }else {
            alert("O número é divisível por 2 mas não é por 3")
         }
    }else if(seuNumero % 3 == 0){
        alert("Seu número não é divisível por 2, mas é por 3")
    }else {
        alert("Seu numero não é divisível por 2 nem por 3")
    }
}
comIf()

const comOperador = () => {
    if(seuNumero % 2 == 0 || seuNumero % 3 == 0) {
        alert("Seu número é divisível por 2 ou por 3")
    }else {
        alert("Seu número não é divisível por 2 nem por 3")
    }
}
comOperador()