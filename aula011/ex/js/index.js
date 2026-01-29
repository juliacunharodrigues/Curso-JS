const numero = Number(prompt('Digite um numero:')); 
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto'); 

numeroTitulo.innerHTML = numero;

texto.innerHTML += `<p> Raiz quadrada: ${numero ** 0.5} </p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}`;
texto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}`;
texto.innerHTML += `<p> Arredondando pra cima: ${(Math.ceil(numero))}`;
texto.innerHTML += `<p> Arredondando pra baixo: ${Math.floor(numero)}`;
texto.innerHTML += `<p> Com duas casas deciamis: ${numero.toFixed(2)} `;