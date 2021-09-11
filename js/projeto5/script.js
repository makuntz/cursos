const num = document.getElementById('txtn')
const tabela = document.getElementById('sel') 
const res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tabela.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ' '
    num.focus()
}

function fim(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let total = valores.length
        let menor = valores[0]
        let maior = valores [0]
        let soma = 0
        let media = 0

        for(const i in valores){
            soma += valores[i]
            if(valores[i] > maior){
                maior = valores[i]
            }
            if(valores[i] < menor){
                menor = valores[i]
            }
        }
        media = soma / total
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}
