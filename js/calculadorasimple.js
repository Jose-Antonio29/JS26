var num1 = parseInt(prompt("Dime un número: "));
var num2 = parseInt(prompt("Dime otro: "));
var operador = prompt("Dime que operación quieres realizar (+,-,*,/)");

if (operador=="+") {
    alert(num1+" + "+num2+" = "+(num1+num2));
} else if (operador=="-") {
    alert(num1+" - "+num2+" = "+(num1-num2));
} else if (operador=="*") {
    alert(num1+" * "+num2+" = "+(num1*num2));
} else if (operador=="/") {
    alert(num1+" / "+num2+" = "+(num1/num2));
}