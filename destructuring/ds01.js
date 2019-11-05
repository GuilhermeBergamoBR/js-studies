// es2015

const pessoa = {
    nome: 'Guilherme',
    idade: 19,
    endereco:{
        logradouro: 'Rua ABC',
        numero:1000
    }
}
//destructuring basico, abstração de um objeto.
const {nome, idade} = pessoa
console.log(nome, idade)

//uma alternativa é criar nicknames para os atributos
const {nome: n, idade: i} = pessoa
console.log(n, i)
//como sobrenome n existe em pessoa, recebe undefined. bemHumorado tbm n existe, mas atribuindo um valor(como true no caso), o atributo é criado.
const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

// é assim que se acessa um atributo de um atributo
const {endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//isso n retorna undefined, mas um erro do js. pois estamos tentando acessar atributos de um atributo(undefined) que n existe no objeto
const {conta:{ag, num}} = pessoa
console.log(ag, num)