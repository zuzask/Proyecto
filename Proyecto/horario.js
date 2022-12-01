function horarioMañana() {
    //Cojo los valores del HTML
    let valores = document.getElementById("resultado");

    let horario = "";

    //Le pongo un borde
    horario += "<table border='2'>";

    //Creo las celdas del horario
    horario += "<tr>Mañana<th></th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th></tr>";

    //Recorro las filas y va rellenando las celdas
    for (let i = 9; i < 15; i++) {

        horario += "<tr>";

        horario += "<th>" + i + ":00-" + (i + 2) + ":00</th>";

        for (let j = 0; j < 5; j++) {

            horario += "<td></td>";

        }

        horario += "</tr>";

        i++;

    }

    //Cierro la tabla
    horario += "</table><br><br>";

    //Muestro en el HTML
    valores.innerHTML = horario;

}

//El comentari de esta funcion es igual que el del horario de mañanas
function horarioTarde() {

    let valores = document.getElementById("resultado");

    let horario = "";

    horario += "<table border='2'>";

    horario += "<tr>Tarde<th></th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th><th>Sabado</th><th>Domingo</th></tr>";

    for (let i = 16; i < 21; i++) {

        horario += "<tr>";

        horario += "<th>" + i + ":00-" + (i + 1) + ":00</th>";

        for (let j = 0; j < 7; j++) {

            horario += "<td></td>";

        }

        horario += "</tr>";

    }

    horario += "</table>";

    valores.innerHTML = horario;

}
