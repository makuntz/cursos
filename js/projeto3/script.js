function contar() {
    
    const init = document.getElementById('txti')
    const end = document.getElementById('txtf')
    const step = document.getElementById('txtp')
    const res = document.getElementById('res')
    
    
    if(init.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        //window.alert('[ERRO] Faltam Dados!')
        res.innerHTML = 'Impossível contar!'
    } else{
        res.innerHTML = 'Contando:  <br>'
        const i = Number(init.value)
        const e = Number(end.value)
        const s = Number(step.value)
        if(s <= 0){
            window.alert('Passo Invalido')
        }

        if(i < e){
            for(let c = i; c <= e; c += s){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= e; c -= s){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
} 

