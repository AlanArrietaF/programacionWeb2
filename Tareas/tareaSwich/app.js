var pedido = prompt("¿Quiere un café, té, chocolate?").toLowerCase();

switch (pedido) {
  case "café":
    console.log("Marchando un café solo. ¡Ideal para despertar!");
    break;
  case "té":
    console.log("Aquí tienes tu té verde. Muy relajante.");
    break;
  case "chocolate":
    console.log("Un chocolate caliente bien espeso. ¡A disfrutar!");
    break;
  default:
    console.log("Lo siento, no tenemos eso en el menú. ¿Quizás un vaso de agua?");
}