function calcularFCM(){
    const numHombre = 220;
    const numMujer = 225;
    //Cojo los valores del HTML
    let edad = document.getElementById("edad").value;
    let sexo = document.getElementById("sexo").value;

    //Si el sexo es hombre,  hago la siguiente formula y lo que me de se lo paso a resultado
    if(sexo = document.getElementById("sexo").value == "hombre"){
        
        let fcmHombre = numHombre - (parseInt(edad));
        document.getElementById("resultado").value = fcmHombre;
    
    //Si el sexo es mujer,  hago la siguiente formula y lo que me de se lo paso a resultado
    }else{
        let fcmMujer = numMujer - (parseInt(edad));
        document.getElementById("resultado").value = fcmMujer;
    }
   
}


