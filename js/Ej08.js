var edad = prompt("Introduzca su edad:");
var edad2 = parseInt(edad);
if (edad2<18) {
    alert("Acceso denegado");
} 
if (edad2>=18 && edad2<=65) {
    alert("Acceso permitido");
} 
 if (edad2>65) {
    alert("Acceso VIP");
}