// Importando a função do arquivo onde ela está definida (por exemplo, idade.js)
import{somar, subtrair, multiplicar, dividir} from './funcoes_matematicas.js';
import * as calculadora_idade from './calculadora_idade.js';

console.log("Soma: " + somar(5, 5, 5));
console.log("Subtração: " + subtrair(5, 5));
console.log("Multiplicação: " + multiplicar(5, 3));
console.log ("Divisão: " + dividir(5, 0));

console.log (calculadora_idade.calc_idade("João", 1976, 2050));

