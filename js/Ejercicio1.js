var hacercuenta=confirm("¿Quieres hacer una suma?");
console.log(hacercuenta);

if (hacercuenta==true) {
    var num1 = parseInt(prompt('Introduce el primer número',0));
    var num2 = parseInt(prompt('Introduce el segundo número',0));
    alert('La suma es: '+(num1+num2));
} else {
    console.log("Fin de programa.")
}