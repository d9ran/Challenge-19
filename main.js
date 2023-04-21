// Realice un programa que dada la vida de un personaje, indique una acción: 
// ∙ Si la vida es menor a 50, que cure nuestro personaje con una poción grande de vida y nos muestre la vida actual después de haberlo curado.
// ∙ Si la vida es menor a 75, que cure nuestro personaje con una poción chica de vida y nos muestre la vida actual después de haberlo curado.
// ∙ Si la vida es mayor o igual a 75 que no cure a nuestro personaje y nos informe de ello.
// ∙ la poción de vida chica cura 25 y la grande 50.

let vida = parseInt(prompt("Ingrese sus puntos de vida"));
if (vida<0 || vida>100){
    alert("Por favor, ingrese un valor entre 0 y 100");
}else{
    let pocionGrande = 50;
    let pocionChica = 25;
    let nuevaVida;
    
    const consumirPocionGrande = () => {
        nuevaVida = vida + pocionGrande;
        console.log(`Ahora tus puntos de salud son ${nuevaVida}`);
    
    }
    const consumirPocionChica = () => {
        nuevaVida = vida + pocionChica;
        console.log(`Ahora tus puntos de salud son ${nuevaVida}`);
    }
    
    if (vida<50 ){
        console.log(`Tu salud actual es ${vida}`);
        console.log("Consumiendo poción grande...");
        consumirPocionGrande();
    }
    else if (vida<75){
        console.log(`Tu salud actual es ${vida}`);
        console.log("Consumiendo poción chica...");
        consumirPocionChica();
    
    }
    else if (vida>=75){
        console.log(`Tu salud actual es de ${vida}. No es necesario curar.`);
    
    }else{
        console.log("Por favor, ingrese un valor válido");
    }   


}




