let namorada = {
    nome: 'Mel',
    sexo: 'F',
    idade: 21,
    gameplay: 2,
    jogar(j=0){
        console.log('Jogou')
        this.gameplay += j
    }
}

namorada.jogar(2)
console.log(`${namorada.nome} jogou ${namorada.gameplay} vezes.`)