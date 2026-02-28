var numeroU = parseInt(prompt("Ingresa un número"));
var numeroUD = parseInt(prompt("Ingresa otro número"));

if (numeroU > numeroUD){
    console.log("El primer número es más grande");
}else if(numeroU < numeroUD){
    console.log("El segundo número es más grande");
}else{
    console.log("Los números son iguales");
}