//orientação a protótipo - é onde um objeto está se baseando em outro
/*
const pessoa = {
    genero: 'masculino',
}

const thiago = {
    nome: 'thiago',
    idade: 38,
    __proto__: pessoa
}
console.log(thiago.genero)*/

//função construtora
/*
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

const thiago = new Pessoa('thiago', 38)
console.log(thiago) */

//Usando o operador new

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`);
}


const renam = new Pessoa('renan', 30)
renam.falar()