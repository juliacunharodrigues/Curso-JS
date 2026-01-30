
pessoa1.fala();const pessoa1 = {
    nome: 'julia',
    sobrenome: 'cunha',
    idade: 18, 

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
       this.idade++; 
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


/*function criapessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

const pessoa1 = criapessoa('julia', 'cunha', 18);
const pessoa2 = criapessoa('mingau', 'cunha', 10);
const pessoa3 = criapessoa('fred', 'oliveira', 6);
const pessoa4 = criapessoa('alice', 'rodrigues', 1);
console.log(pessoa1.nome, pessoa3.idade, pessoa4.nome);*/


/*const pessoa1 = {
    nome: 'júlia', 
    sobrenome: 'Cunha', 
    idade: 18 
}

console.log(pessoa1.nome);*/