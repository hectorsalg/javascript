function contar() {
    var inicio = Number((document.getElementById('iinicio')).value)
    var fim = Number(document.getElementById('ifim').value)
    var passo = Number(document.getElementById('ipasso').value)
    var res = document.getElementById('ires')
    res.innerHTML = ''
    if (inicio == '' || fim == ''){
        res.innerHTML = 'Impossível contar!'
    } else if (passo == '' || passo == 0){
        alert('Passo iválido! Contando PASSO 1')
        passo = 1
        if (inicio > fim){
            for (inicio; inicio >= fim; inicio -= passo) {
                res.innerHTML += `${inicio}👉`
            }
        } else {
            for (inicio; inicio <= fim; inicio += passo) {
                res.innerHTML += `${inicio}👉`
            }
        }
        res.innerHTML += `🚩`
    } else {
        if (inicio > fim){
            for (inicio; inicio >= fim; inicio -= passo) {
                res.innerHTML += `${inicio}👉`
            }
        } else {
            for (inicio; inicio <= fim; inicio += passo) {
                res.innerHTML += `${inicio}👉`
            }
        }
        res.innerHTML += `🚩`
    }
}