/* Problem 2:
Un número deficiente es todo número natural que cumple que la suma de sus divisores
propios es menor que el propio número. Por ejemplo, 16 es un número deficiente ya que
sus divisores propios son 1, 2, 4 y 8 y se cumple que 1+2+4+8=15, que es menor que 16.
Programa una función que pasado un número por argumento devuelva True si es
deficiente y False si no lo es.
*/

/*
https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
*/

function deficiente(finalNumber){
    
    // create an array with n elements and last value is n-1 so... [0,n-1] starting in 0 to use array.map instead of a bucle
    const arrayLengthFinalNumber = Array.from(Array(finalNumber).keys())
    
    // use array map, to divide every number from 1 to actual number and get the elements are integers
    const division = arrayLengthFinalNumber.map(element =>{
        const division = finalNumber/element+1
        if(Number.isInteger(division)){
            return division
        }
    })
    
    // sum all array elements
    const sum = division.reduce((a, b) => a + b, 0)

    return finalNumber > sum
}