function calcularIMC() {

    //Cojo los valores del HTML
    let estatura = document.getElementById("estatura").value;
    let peso = document.getElementById("peso").value;

    //Formula del IMC
    let imc = (parseInt(peso) / Math.pow((parseInt(estatura)) / 100, 2)) ;

    //Hago que el resultado tenga 2 decimales
    let resultado = Number(imc.toFixed(2));
    //Resalto la opcion
    resaltarResultado(resultado);
    

}

function resaltarResultado(imc){
    //Le paso el valor a resultado
    document.getElementById("resultado").value = imc;

    if (imc < 16) {
        grado = "type1";
    } else if (imc >= 16 && imc <= 16.99) {
        grado = "type2";
    } else if (imc >= 17 && imc <= 18.49) {
        grado = "type3";
    } else if (imc >= 18.5 && imc <= 24.99) {
        grado = "type4";
    } else if (imc >= 25 && imc <= 29.99) {
        grado = "type5";
    } else if (imc >= 30 && imc <= 34.99) {
        grado = "type6";
    } else if (imc >= 35 && imc <= 39.99) {
        grado = "type7";
    } else if (imc > 40 ) {
        grado = "type8";
    } 

    //Segun la opcion que sea, la pone en negrita
    document.querySelectorAll(".AltRow1").forEach(e => e.style.fontWeight ="normal");
    document.querySelectorAll(`#${grado}>td`).forEach(e=>e.style.fontWeight = "bold");
}


