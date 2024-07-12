"use strict";

/*

1 - Definir todas as variaveis que usaremos
2 - Fazer com que quando clicarmos um um numero ele projete no input 
3 - Quando clicarmos em um botão de operador, ele tem q fazer a soma com o proximo numeoro que digitarmos 
4 - Quando clicarmos no igual ele faz a conta 
5 - fazer com que o botão de limpeza limpe tudo 

 */

const appendToDisplay = function (value) {
  document.querySelector("#display").value += value;
};

const clearDisplay = function () {
  document.querySelector("#display").value = "";
};

const calculateResult = function () {
    
};
