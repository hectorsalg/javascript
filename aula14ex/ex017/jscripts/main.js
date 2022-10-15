function calcular() {
    var num = Number(document.getElementById('inum').value)
    var msg = document.getElementById('imsg')
    var count = 1
    msg.value = ''
    if (num == '') {
        alert('Por favor, digite um número.')
    } else {
        msg.cols = '15'
        for (count; count <= 10; count++) {
            msg.value += `${num} x ${count} = ${num * count}\n`
        }
    }
}