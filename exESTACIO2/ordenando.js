const swap = (valores, esq, dir) => {
    var temp = valores[esq]
    valores[esq] = valores[dir]
    valores[dir] = temp
}

const shuflle = (valores) => {
    for (let i = valores.length - 1; i > 0; i--) {
        let m = Math.floor(Math.random() * (i + 1))
        let temp = valores[i]
        valores[i] = valores[m]
        valores[m] = temp
    }
}


const bubble_sort = (valores) => {
    let len = valores.length

    while (len > 0) {
        for (let i = 0; i < len - 1; i++) {
            if (valores[i] > valores[i + 1]) {
                const temp = valores[i]
                valores[i] = valores[i + 1]
                valores[i + 1] = temp
            }
        }
        len -= 1
    }

    return valores;
}

const selection_sort = (valores) => {
    const swap = (valores, num1, num2) =>
        ([valores[num1], valores[num2]] = [valores[num2], valores[num1]])

    for (let i = 0; i < valores.length - 1; i++) {
        let num_min = i

        for (let j = i + 1; j < valores.length; j++) {
            if (valores[j] < valores[num_min]) num_min = j
        }

        if (num_min !== i) swap(valores, num_min, i)
    }

    return valores
}


const particionamento = (valores, esq, dir) => {
    var pivo   = valores[Math.floor((dir + esq) / 2)], //termo do meio
        i       = esq, //termo da esquerda
        j       = dir //termo da direita
    while (i <= j) {
        while (valores[i] < pivo) {
            i++
        }
        while (valores[j] > pivo) {
            j--
        }
        if (i <= j) {
            swap(valores, i, j) //invertendo 2 elementos
            i++
            j--
        }
    }
    return i
}

const quick_sort = (valores, esq, dir) => {
    var i
    if (valores.length > 1) {
        i = particionamento(valores, esq, dir) 
        if (esq < i - 1) { 
            quick_sort(valores, esq, i - 1)
        }
        if (i < dir) { 
            quick_sort(valores, i, dir)
        }
    }
    return valores
}

const qs = (valores) => {
    quick_sort(valores, 0, valores.length - 1)
}

function add() {
    if (valor.value == '') {
        alert("Por favor, Insira um número.")
    } else {
        let valor = document.getElementById("valor")
        let add = document.createElement("li")
        let valores = document.getElementById("valores")
        add.appendChild(document.createTextNode(Number(valor.value)))
        valores.appendChild(add)
        valores.value = add
        valor.value = ''
        valor.focus()
    }
}


ordenar = () => {
    let listaValoresHtml = document.getElementById("valores")

    let listaValores = []

    for (const child of listaValoresHtml.children) {
        listaValores.push(Number(child.textContent))
    }

    let listaSelecaoOrdenacao = document.getElementById("seleciona")

    let valorOrdenacaoSelecionada = listaSelecaoOrdenacao.value

    switch (valorOrdenacaoSelecionada) {
        case "1":
            bubble_sort(valores = listaValores)
            attLista(valores = listaValores)
            break
        case "2":
            selection_sort(valores = listaValores)
            attLista(valores = listaValores)
            break
        case "3":
            qs(valores = listaValores)
            attLista(valores = listaValores)
            break
        default:
    }
};

misturar = () => {
    let listaValoresHtml = document.getElementById("valores")

    let listaValores = []
    
    for (const child of listaValoresHtml.children) {
      listaValores.push(Number(child.textContent))
    }

    shuflle(valores=listaValores);
    attLista(valores=listaValores);
  }

valores = () => {
    let listaValoresHtml = document.getElementById("valores");

    let listaValores = [];

    for (const child of listaValoresHtml.children) {
        listaValores.push(Number(child.textContent))
    }

    shuflle(valores = listaValores)
    attLista(valores = listaValores)
}

attLista = (valores) => {

    let listaValoresHtml = document.getElementById("valores")

    listaValoresHtml.innerHTML = ""

    for (const valor of valores) {

        let node = document.createElement("li")

        let textoNode = document.createTextNode(valor)

        node.appendChild(textoNode)

        listaValoresHtml.appendChild(node)
    }

}
