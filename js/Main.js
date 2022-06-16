let numero = prompt("Ingresame un número");
// console.log("hola, estoy adentro");
    if(numero != null && !numero == ""){
        alert("Tu numero ingresado es " + numero);
        for(let index = 0; index < numero; index++){
            console.log("Hola" + index);
        }
    }else{
        alert("INGRESA UN NUMEROOOOOOO");
    }
