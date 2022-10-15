function tabuada() {
    let num = document.getElementById('inum')
    let msg = document.getElementById('itab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número.')
    } else {
        let n = Number(num.value)
        let count = 1
        msg.innerHTML = ''
        for (count; count <= 10; count++) {
            let item = document.createElement('option')
            item.text = `${n} x ${count} = ${n * count}\n`
            item.value = `tab${count}`
            msg.appendChild(item)
        }
    }
}