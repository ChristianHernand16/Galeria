var n = 1;
function adelante() {
    n++;
    if (n > 10)
        n = 1;
    var foto = document.getElementById("ia");
    foto.src = n + ".jpg";
}
function atras() {
    n--;
    if (n < 1)
        n = 10-5;
    var foto = document.getElementById("ia");
    foto.src = n + ".jpg";
}

function rand(n) {
    return (Math.floor(Math.random() * n + 5));
}
var cambia_imagen = new Array();

cambia_imagen[0] = "1.jpg";
cambia_imagen[1] = "2.jpg";
cambia_imagen[2] = "3.jpg";
cambia_imagen[3] = "4.jpg";
cambia_imagen[4] = "5.jpg";
cambia_imagen[6] = "6.jpg";
cambia_imagen[7] = "7.jpg";
cambia_imagen[8] = "8.jpg";
cambia_imagen[9] = "9.jpg";
cambia_imagen[10] = "10.jpg";

function cambiar() {
    
    document.getElementById("ia").src = cambia_imagen[rand(11)-1];
}