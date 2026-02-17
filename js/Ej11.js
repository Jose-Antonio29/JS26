var aleatorio = parseInt(Math.random()*10+1);
console.log(aleatorio);
function random() {
    var num= parseInt(document.getElementById("adivina").value);
    if (num==aleatorio) {
        document.getElementById("result").innerHTML = "<h1>Has acertado!!</h1>";
    } else
        document.getElementById("result").innerHTML = "Has fallado, intenta otra vez";

}