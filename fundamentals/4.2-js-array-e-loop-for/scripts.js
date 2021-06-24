// array

// exercicio 1 da parte do conteudo:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu.indexOf('Serviços');

// console.log(menuServices);

// exercicio 2 da parte do conteudo:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);

// exercicio 3 da parte do conteudo:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.push = 'Contato';

// console.log(menu);

// for

// exercicio 1 da parte do conteudo:

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index += 1) {
//   console.log(groceryList[index]);
// }

// for/of:

// exercicio 1 da parte do conteudo:

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let name of names) {
//   console.log(name);
// }

// Exercicios:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1:

// for (let number of numbers) {
//   console.log(number);
// }

// 2:

let sum = 0;

for (let number of numbers) {
  sum += number;
}

console.log(sum);