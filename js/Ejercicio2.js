function suma() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("demo").innerHTML=num1+" + "+num2+" = "+(parseInt(num1)+parseInt(num2));
}