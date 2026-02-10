function diaSemana() {
    var dia = parseInt(document.getElementById("dia").value);

    switch(dia) {
        case 1: document.getElementById("p").innerHTML= "Lunes"; break;
        case 2: document.getElementById("p").innerHTML= "Martes"; break;
        case 3: document.getElementById("p").innerHTML= "Miércoles"; break;
        case 4: document.getElementById("p").innerHTML= "Jueves"; break;
        case 5: document.getElementById("p").innerHTML= "Viernes"; break;
        case 6: document.getElementById("p").innerHTML= "Sábado"; break;
        case 7: document.getElementById("p").innerHTML= "Domingo"; break;
    }
}