// Crear un programa en JavaScript que realice lo siguiente:
// Debe solicitar al usuario 3 numeros por prompt y guardarlos en sus respectivas variables 

// 1. Determinar numeros 

let num1 = float(prompt ("Ingrese un numero que sea un numero real"));
let num2 = float(prompt ("Ingrese un numero que sea un numero real"));
let num3 = float(prompt ("Ingrese un numero que sea un numero real"));

if (num1 === num2 & num2 === num3) {
    console.log ("Los numeros ingresados son iguales");
} else {
    let numeros = [ num1, num2, num3];
    // De mayor a menor 
    let descendente = [numeros].sort((a, b) => a - b);
    // De menor a mayor 
    let ascendente = [numeros].sort((a,b) => a - b);

    console.log(`Ordenados de mayor a menor ${descendente}`);
    console.log(`Ordenados de menor a mayor ${ascendente}`);
}



