const programador = {
    nome: 'Jonas',
    idade: 36,

}

const tecnologia = [
    {
        nome: 'C++',
        especialidade: 'Desktop'
    },
    {
        nome: 'Python',
        especialidade: 'Data Science',
    },
    {
        nome:'JavaScript', 
        especialidade: 'Web/Mobile'
    }
]
console.log (`O usuário ${programador.nome} tem ${programador.idade} e usa a tecnologia ${tecnologia[2].nome} em ${tecnologia[2].especialidade}`)
