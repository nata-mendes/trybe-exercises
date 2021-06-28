//Parte I do conteudo:

// let name = "Natã";
// const birthCity = "Rio de Janeiro";
// let birthYear = 1999;
// birthYear = 2030;

// console.log(name);
// console.log(birthCity);
// console.log(birthYear);

//Parte II do conteudo:

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId);
// console.log(typeof isEnrolled);
// console.log(typeof patientInfo);
// console.log(typeof patientEmail);
// console.log(typeof patienAge);

// let base = 5;
// let altura = 8;
// let area = base * altura

// console.log(area);

// let perimetro = (base + altura) * 2;

// console.log(perimetro);

//Parte IV do conteudo:

// let nota = 1;

// if (nota >= 80) {
//   console.log("Parabéns! Você foi aprovada(o)!");
// }
// else if (nota < 80 && nota >= 60) {
//   console.log ("Você está na lista de espera.");
// }
// else {
//   console.log("Você foi reprovada(o).");
// }

//Parte V do conteudo:

// let result = "lista";

// switch (result) {
//   case "aprovada":
//     console.log("Parabéns! Você foi aprovada(o)!");
//     break;

//   case "lista":
//     console.log("Você está na nossa lista de espera.");
//     break;

//   case "reprovada":
//     console.log("Infelizmente você foi reprovada(o).");
//     break;

//   default:
//     console.log("Não se aplica.");
// }

// Exercicios do dia:

// Exercicio 01:

// let a = 10;
// let b = 3;

// let adicao = a + b;
// let subtracao = a - b;
// let multiplicacao = a * b;
// let divisao = a / b;
// let modulo = a % b;

// console.log(modulo);

// Exercicio 02:

// let num1 = 10;
// let num2 = 18;

// if (num1 > num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }

// Exercicio 03:

// let num1 = 55;
// let num2 = 33;
// let num3 = 25;

// if (num1 > num2 && num1 > num3) {
//   console.log(num1);
// } else if (num2 > num1 && num2 > num3) {
//   console.log(num2);
// } else {
//   console.log(num3);
// }

// Exercicio 04:

// let num = -6;

// if (num > 0) {
//   console.log("Positivo! ;D");
// } else if (num < 0) {
//   console.log("Negativo! ;-;");
// } else {
//   console.log("Zero! '-'");
// }

// Exercicio 05:

// let ang1 = 120;
// let ang2 = 60;
// let ang3 = -60;

// if (ang1 > 0 && ang2 > 0 && ang3 > 0 && (ang1 + ang2 + ang3) === 180) {
//   console.log("true");
// } else if (ang1 > 0 && ang2 > 0 && ang3 > 0 && (ang1 + ang2 + ang3) !== 180) {
//   console.log("false");
// } else if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
//   console.log("Um dos ângulos digitados tem um valor negativo. Favor verificar.");
// }

// Exercicio 06:

// let peca = "caminhao";

// switch (peca.toLowerCase()) {
//   case "rei":
//     console.log("Pode se mover uma casa por jogada em qualquer uma das direções.");
//     break;

//   case "dama":
//     console.log("Pode se mover quantas casas quiser em qualquer uma das direções.");
//     break;

//   case "rainha":
//     console.log("Pode se mover quantas casas quiser em qualquer uma das direções.");
//     break;

//   case "bispo":
//     console.log("Pode se mover quantas casas quiser, porém, apenas nas diagonais.");
//     break;

//   case "cavalo":
//     console.log("Tem o movimento assemelhado à letra L. É a única peça do jogo que pode saltar outras peças.");
//     break;

//   case "torre":
//     console.log("Pode se mover quantas casas quiser na horizontal ou vertical.");
//     break;

//   case "peão":
//     console.log("Pode se mover apenas uma casa, sempre à frente, por rodada, exceto quando for o primeiro movimento daquela peça no jogo, onde poderá avançar duas casas à frente. Pode capturar outras peças que estejam em sua diagonal a uma casa de distância.");
//     break;

//   case "peao":
//     console.log("Pode se mover apenas uma casa, sempre à frente, por rodada, exceto quando for o primeiro movimento daquela peça no jogo, onde poderá avançar duas casas à frente. Pode capturar outras peças que estejam em sua diagonal a uma casa de distância.");
//     break;

//   default:
//     console.log("Essa não é uma peça válida.");
// }

// Exercicio 07:

// let notaPorcentagem = 100;
// let notaConceito;

// if (notaPorcentagem > 100 || notaPorcentagem < 0) {
//   console.log("O valor informado é invalido.");
// } else {
//   if (notaPorcentagem <= 100 && notaPorcentagem >= 90) {
//     notaConceito = "A";
//   } else if (notaPorcentagem < 90 && notaPorcentagem >= 80) {
//     notaConceito = "B";
//   } else if (notaPorcentagem < 80 && notaPorcentagem >= 70) {
//     notaConceito = "C";
//   } else if (notaPorcentagem < 70 && notaPorcentagem >= 60) {
//     notaConceito = "D";
//   } else if (notaPorcentagem < 60 && notaPorcentagem >= 50) {
//     notaConceito = "E";
//   } else {
//     notaConceito = "F";
//   }

//   console.log(`A nota percentual do aluno foi ${notaPorcentagem}% logo, sua nota conceitual é ${notaConceito}.`);

// }

// Exercicio 8:

// let num1 = 19;
// let num2 = 21;
// let num3 = 23;
// let result = false;

// if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
//   result = true;
// }

// console.log(result);

// Exercicio 9:

// let num1 = 18;
// let num2 = 20;
// let num3 = 22;
// let result = false;

// if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
//   result = true;
// }

// console.log(result);

// Exercicio 10:

// let valorCusto = 23;
// let valorVenda = 30;
// let valorImposto = valorCusto * 0.2;
// let valorCustoTotal = valorCusto + valorImposto;
// let valorLucro = valorVenda - valorCustoTotal;

// let quantidadeVendida = 1000;

// console.log(`O lucro líquido sobre a venda de ${quantidadeVendida} unidades é de, aproximadamente, R$${Math.round(valorLucro * quantidadeVendida)},00.`);

// Exercicio 11:

let salarioBruto = -2612;
let inss = 0;
let ir = 0;



if (salarioBruto < 0) {
} else {
    if (salarioBruto >= 0 && salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
  } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
  } else {
    inss = 570.88;
  }
}