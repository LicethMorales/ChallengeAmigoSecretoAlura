// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



let listaAmigos = [];
inputAmigo = document.querySelector("#amigo");
listaAmigosIngresados = document.querySelector("#listaAmigos");
amigoGanador = document.getElementById("resultado");



function agregarAmigo(){

        let amigoUsuario = `${inputAmigo.value}`;
                      

            if (amigoUsuario == "" || listaAmigos.includes(amigoUsuario)){
                alert("¡Debes ingresar un nombre válido, que no haya sido ingresado previamente.");
                limpiarCampoAmigo();
            } else{
                listaAmigos.push(amigoUsuario);    
                alert("¡Amigo ingresado exitosamente!"); 
                console.log(listaAmigos);  
                mostrarListaAmigos();
                limpiarCampoAmigo();
                amigoGanador.textContent = "";
            }
        

}

function limpiarCampoAmigo(){
    inputAmigo.value = "";
}

function mostrarListaAmigos(){
    
    listaAmigosIngresados.innerHTML += `<Li>${inputAmigo.value}</Li>`;
}

function sortearAmigo(){

    if (listaAmigos != ""){
    sorteo = Math.floor(Math.random()*listaAmigos.length);
    amigoSorteado = listaAmigos[sorteo];
    amigoGanador.innerHTML = "El amigo secreto es: " + amigoSorteado;
    
    //amigoGanador.innerHTML = `<Li>El amigo secreto es: ${amigoSorteado}</Li>`;
    console.log(amigoSorteado);
    }else{
        amigoGanador.textContent = "No hay amigos en la lista, ¡debes ingresar al menos uno!";
        
    }
}

    
  
    



