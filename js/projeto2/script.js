function verificar(){
    
    const data = new Date()
    let ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        const fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'menino.png')
            }else if(idade < 21){
                img.setAttribute('src', 'jovem-mas.png')
            }else if(idade < 50){
                img.setAttribute('src', 'moco.png')
            }else{
                img.setAttribute('src', 'idoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'menina.png')
            }else if(idade < 21){
                img.setAttribute('src', 'jovem-fem.png')
            }else if(idade < 50) {
                img.setAttribute('src', 'moca.png')
            }else{
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}