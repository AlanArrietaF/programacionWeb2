let productos =[
    {nombre: 'camisa',   precio: 300},
    {nombre: 'pantalon', precio: 550},
    {nombre: 'zapatos',  precio: 750},
    {nombre: 'sombrero', precio: 550},
    {nombre: 'tenis',    precio: 1200}
];

let carrito=[];

// --- NUEVA FUNCIÓN ---
function agregarNuevoProductoAlSistema() {
    let nombre = prompt("Ingrese el nombre del nuevo producto:");
    let precio = Number(prompt("Ingrese el precio del producto:"));

    if (nombre && !isNaN(precio) && precio > 0) {
        productos.push({ nombre: nombre, precio: precio });
        alert(`Producto "${nombre}" agregado a la tienda.`);
    } else {
        alert("Datos inválidos. No se pudo agregar el producto.");
    }
}

function mostrarMenu(){
   let menu = "Seleccione un producto para agregar al carrito\n";
   for( let i = 0 ;i< productos.length ; i++ ){
        menu += (i+1)+" .- " + productos[i].nombre + " - $"+ productos[i].precio+"\n";
   } 

   // Ajustamos los índices de las opciones extra
   menu += (productos.length+1) + ".- Ver carrito y Total\n";
   menu += (productos.length+2) + ".- AGREGAR NUEVO PRODUCTO\n"; // Nueva opción
   menu += (productos.length+3) + ".- Salir\n";

   return menu;
}

function agregarAlCarrito(index){  
    let productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log(`Producto ${productoSeleccionado.nombre} se agregó al carrito`);
}

function mostrarCarritoTotaL(){
    if(carrito.length === 0){
        console.log("El carrito está vacío");
    } else {
        let mensajeCarrito ="Carrito de compras\n";
        let total = 0;
        for (let i = 0; i < carrito.length; i++){
            mensajeCarrito += (i+1) + " .- " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\n Total: $" + total;
        console.log(mensajeCarrito);
        alert(mensajeCarrito); // Añadido alert para verlo sin abrir consola
    }
}

/*-- Menu de inicio --*/ 
let opcion;
do {
    opcion = Number(prompt(mostrarMenu()));

    // Verificar si la opción es válida (ahora hasta length + 3)
    if(isNaN(opcion) || opcion < 1 || opcion > productos.length + 3) {
        console.log("Opción no válida");
    } 
    // Opción: Comprar producto
    else if(opcion >= 1 && opcion <= productos.length) {
        agregarAlCarrito(opcion - 1);
    } 
    // Opción: Ver Carrito
    else if(opcion === productos.length + 1) {
        mostrarCarritoTotaL();
    } 
    // Opción: Agregar producto al sistema
    else if(opcion === productos.length + 2) {
        agregarNuevoProductoAlSistema();
    }

} while(opcion !== productos.length + 3);

console.log("Gracias por su compra :)");