var lista5 = new Array();

var i = 0;
aletorio();

function siguiente() {
    i > 4 ? (i = 0) : (i = i);
    var img = document.getElementById("ia");
    img.style = "background:url('Img/" + lista5[i] + ".jpg')";
    i = i + 1;
    console.log(lista5 + " " + lista5[i]);
}

function anterior() {
    i < 0 ? (i = 4) : (i = i);
    var img = document.getElementById("ia");
    img.style = "background:url('Img/" + lista5[i] + ".jpg')";
    i = i - 1;
    console.log(lista5 + " " + lista5[i]);
}

function aletorio() {
    var myArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    var x, j, k;
    for (x = myArray.length; x; x--) {
        j = Math.floor(Math.random() * x);
        k = myArray[x - 1];
        myArray[x - 1] = myArray[j];
        myArray[j] = k;
    }
    for (let index = 0; index < 5; index++) {
        lista5[index] = myArray[index];
    }
    i = 1;
    var img = (document.getElementById("ia").style =
        "background:url('Img/" + lista5[0] + ".jpg')");
}