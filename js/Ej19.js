var aleatorio = parseInt(Math.random()*10+1);
console.log(aleatorio);
var intentos=3;
var ok=false;
function random() {
    intentos--;
    if (intentos>0 && ok==false) {
        var num=parseInt(document.getElementById("adivina").value);
        if (num==aleatorio) {
            document.getElementById("result").innerHTML = "Has acertado!!";
            ok=true;
        } else {
            if (num<aleatorio) {
                document.getElementById("result").innerHTML = "Has fallado, prueba más alto";
            } else {
                document.getElementById("result").innerHTML = "Has fallado, prueba más bajo";
            }
            document.getElementById("result").innerHTML+="<br>Te quedan "+intentos+" intentos";
        }       
    } else if (intentos<1) {
        document.getElementById("result").innerHTML = "Has perdido";
    } else if(ok==true) {
        document.getElementById("result").innerHTML = "Ya has ganado";
    }
}