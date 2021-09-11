function tab(){
    const num = document.getElementById('txtn')
    const tab = document.getElementById('sel')
    
    if(num.value.length == 0){
        window.alert('coloque um num')
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}