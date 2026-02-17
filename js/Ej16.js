function cont() {
    var num;
    var letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z",
                  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var result="";
    for (let i=0; i<8; i++) {
        num=Math.floor(Math.random()+1);
        if (num==1) {
        var randomABC=Math.floor(Math.random()*letras.length);
        result+=letras[randomABC];
    } else {
            var numrandom=Math.floor(Math.random()*9+1);
            result+=numrandom;
        }
    }
    document.getElementById("demo").innerHTML="Su contraseña es: "+result;
}