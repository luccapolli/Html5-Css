let num = document.querySelector("input#num1")
let lista = document.getElementById("lista")
let saida = document.getElementById("saida")
numeros = []

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function inserir(){
    if (num.value == "") {
        alert("por favor, insira um número.")
    }else {
        if (!inLista(num.value, numeros)){
            numeros.push(Number(num.value))
            let item = document.createElement("option")
            item.text = `O número ${num.value} foi adicionado!`
            lista.appendChild(item)
            num.value = ''
            num.focus()
        } else {
            window.alert("número repetido.")
            num.value = ''
            num.focus()
        }
    }
    
}

function organizar(){
    lista.sort()
}