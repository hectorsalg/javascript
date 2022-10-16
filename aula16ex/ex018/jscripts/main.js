let lista = []
function adicionar() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('ianali')
    let res = document.getElementById('ires')
    let n = Number(num.value)

    res.innerHTML = ''
    if (lista.includes(n) || num.value.length == 0 || n < 1 && n > 100) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        let op = document.createElement('option')
        op.text = `Valor ${n} adicionado.`
        op.value = `tab${n}`
        tab.appendChild(op)
        lista.push(n)
    }
}

function finalizar() {
    let res = document.getElementById('ires')
    let grandeza = lista.sort()
    let soma = () => {
        let total = 0
        for (let num = 0; num < lista.length; num++) {
            total += lista[num]
        }
        return total
    }

    let media = () => {
        let total = 0
        for (let num = 0; num < lista.length; num++) {
            total += lista[num]
        }

        total /= lista.length

        return total
    }

    if (lista.length == 0) {
        alert('Adicione valores antes de finalzar!')
    } else {
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${grandeza[grandeza.length - 1]}.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${grandeza[0]}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma()}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media()}.</p>`
    }
    
}