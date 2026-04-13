const boton = document.querySelector("#add"); // Tu botón tiene id="add"
const inputNumero = document.querySelector("#new"); // Tu input tiene id="new"
const listaDinamica = document.querySelector("#lista"); // Tu ul tiene id="lista"

boton.addEventListener("click", () => {
    listaDinamica.innerHTML = ""; // Limpia la lista
    const cantidad = parseInt(inputNumero.value);

    if (!isNaN(cantidad)) {
        for (let i = 1; i <= cantidad; i++) {
            const li = document.createElement("li");
            li.textContent = "Elemento " + i;
            listaDinamica.appendChild(li);
        }
    } else {
        alert("Escribe un número válido");
    }
});