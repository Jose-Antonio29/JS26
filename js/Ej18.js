function tabla() {
    var num=parseInt(document.getElementById("num").value);
    for (let i=1; i<11; i++) {
        document.getElementById("demo").innerHTML+=num+" X "+i+" = "+(num*i)+"<br>";
    }
}