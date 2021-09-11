function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    //let hora = 15
    //let min = 30
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#aba77e'
    } else if (hora >= 12 && hora < 18){
        img.src  = 'tarde.png'
        document.body.style.background = '#e8a66c'
    } else{
        img.src = 'noite.png'
        document.body.style.background ='#3c4a4f'
    }

}

