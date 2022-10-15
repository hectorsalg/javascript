function carregar() {
    var msg =  window.document.getElementById('imsg')
    var img = window.document.getElementById('iimgagem')
    var data =  new Date()
    // var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/ft-manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'imagens/ft-tarde.jpg'
    } else {
        // BOA NOITE!
        img.src = 'imagens/ft-noite.jpg'
    }
}