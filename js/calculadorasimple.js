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
    if (num2==0) {
        alert("No se puede dividir entre 0");
    } else {
    alert(num1+" / "+num2+" = "+(num1/num2));
    }
}