function contar() {
    let inicio = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let res = document.getElementById('ires')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let count = i; count >= f; count += p) {
                res.innerHTML += `${count}c \u{1F449}`
            }
        } else{
            // Contagem decrescente
            for (let count = i; count >= f; count -= p) {
                res.innerHTML += `${count}c \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3c1}`
    }
}