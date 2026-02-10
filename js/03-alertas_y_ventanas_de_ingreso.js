/* Programa que nos pida dos números por pantalla y que nos diga 
cuál es el mayor y cuál es el menor */
var num1 = parseInt(prompt('Introduce el primer número',0));
var num2 = parseInt(prompt('Introduce el segundo número',0));

console.log(num1,num2);

if (num1==num2) {
    alert('Los dos números son iguales');
} else if (num1>num2) {
    alert('El mayor número es '+num1);
} else if (num1<num2) {
    alert('El mayor número es '+num2);
}

