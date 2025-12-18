const nome = 'Júlia';
const sobrenome = 'Rodrigues'; 
const idade = 18; 
const peso = 70; 
const altura = 1.75; 
let imc = peso / (altura * altura)
let anoNascimento = (2025 - idade)

// com template
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${70} kg.`)
console.log(`Tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)


/*console.log(nome, sobrenome, 'Tem', idade, 'anos, pesa', 70, 'kg. Tem', altura, 'de altura e seu imc é de', imc,)
console.log(nome, sobrenome, 'nasceu em', anoNascimento)*/

//console.log('seu imc é', imc) 

//testando template
// console.log(`tem ${altura} de altura`)
