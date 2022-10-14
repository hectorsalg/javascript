function carregar() {
    var msg =  window.document.getElementById('imsg')
    var img = window.document.getElementById('iimagem')
    var data =  new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/ft-manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'imagens/ft-tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'imagens/ft-noite.jpg'
        document.body.style.background = '#515154'
    }
}