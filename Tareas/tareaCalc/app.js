function agregarPantalla(value) {
    document.getElementById("display").value += value;
}

function limpiarPantalla() {
    document.getElementById("display").value = "";
}

function calcular() {
    try {
        // Usamos una constante para evitar repetir la llamada al DOM
        const display = document.getElementById("display");
        const resultado = eval(display.value);
        display.value = resultado;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }  
}

document.addEventListener("keydown", function(event) {
    const tecla = event.key; // Obtiene el valor de la tecla presionada

    // 1. Detectar si es un número (0-9) o un operador (+, -, *, /)
    if (!isNaN(tecla) || "+-*/.".includes(tecla)) {
        agregarPantalla(tecla);
    }

    // 2. Detectar la tecla Enter para calcular
    if (tecla === "Enter") {
        event.preventDefault(); // Evita comportamientos extraños del formulario
        calcular();
    }

    // 3. Detectar Escape para limpiar la pantalla
    if (tecla === "Escape") {
        limpiarPantalla();
    }

    // 4. Detectar Backspace para borrar el último carácter (opcional pero útil)
    if (tecla === "Backspace") {
        const display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
    }
});