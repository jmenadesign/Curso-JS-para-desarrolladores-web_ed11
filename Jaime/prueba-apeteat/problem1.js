/*
Problem 1:
Un número cuadrado perfecto en matemáticas es un número entero que es el cuadrado de algún otro;
dicho de otro modo, es un número cuya raíz cuadrada es un número natural.
Por ejemplo 49 es un cuadrado perfecto de 7 porque 7 x 7 = 49, o 81 porque 9 x 9 = 81
Pasado por argumento un número, escribe una función la cual devuelva True si el número es un
cuadrado perfecto y False si no lo es.
*/


// https://www.geeksforgeeks.org/javascript-number-isinteger-function/



function isSquarePerfect(number){

    let squareRoot = Math.sqrt(number)
    return Number.isInteger(squareRoot)
      
}

