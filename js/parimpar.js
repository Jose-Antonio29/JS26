function parimpar() {
    var num = parseInt(document.getElementById("num").value);

    if (num % 2 == 0) {
        document.getElementById("demo").innerHTML = num + " es par";
    } else
        document.getElementById("demo").innerHTML = num + " no es par";
}