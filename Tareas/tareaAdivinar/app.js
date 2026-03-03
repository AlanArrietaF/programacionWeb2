function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var numeroU = parseInt(prompt("Ingresa un número del 1 al 10"));
var numeroM = getRandomInt(11);
var vidas = 3;

console.log("Número de la maquina " + numeroM);

while(numeroM !== numeroU && vidas > 1){
    vidas--;
    numeroU = parseInt(prompt("Intenta de nuevo"));
}

if(numeroM == numeroU){
    console.log("Ganaste");
}else{
    console.log("Perdiste");
}