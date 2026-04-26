let usuarios = []; // Corregido el typo

const formulario = document.getElementById("formulario");
const tabla = document.getElementById("tablaUsuarios");
const inputArchivo = document.getElementById("importarJSON");
const BtnDescargar = document.getElementById("descargarBtn");

function generarID() {
    return usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
}

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("correo").value.trim(); 
    
    if (nombre === "" || email === "") return alert("Completa todos los campos");

    usuarios.push({ id: generarID(), nombre, email });     
    mostrarUsuarios();
    formulario.reset();     
});

function mostrarUsuarios() {
    tabla.innerHTML = ""; 
    usuarios.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td contenteditable="true" onblur="editarCampo(${index}, 'nombre', this.innerText)">${user.nombre}</td>
            <td contenteditable="true" onblur="editarCampo(${index}, 'email', this.innerText)">${user.email}</td>
            <td>
                <button onclick="eliminarUsuario(${index})" style="color: red;">Eliminar</button>
            </td>
        `;
        tabla.appendChild(row);
    });
}

// Función de edición mejorada
function editarCampo(index, campo, valor) {
    const valorLimpio = valor.trim();
    if (valorLimpio !== "") {
        usuarios[index][campo] = valorLimpio;
    } else {
        // Si lo dejan vacío, refrescamos para recuperar el valor anterior
        mostrarUsuarios();
    }
}

function eliminarUsuario(index) {
    if (confirm("¿Desea eliminar este usuario?")) {
        usuarios.splice(index, 1);
        mostrarUsuarios();
    }
}

// Lógica de Descarga
BtnDescargar.addEventListener("click", () => {
    if (usuarios.length === 0) return alert("No hay datos para descargar");
    
    const dataStr = JSON.stringify(usuarios, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "usuarios.json";
    link.click();
    URL.revokeObjectURL(url);
});

// Lógica de Importación
inputArchivo.addEventListener("change", function(e) {
    const archivo = e.target.files[0];
    if (!archivo) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const datos = JSON.parse(e.target.result);
            if (Array.isArray(datos)) {
                usuarios = datos;
                mostrarUsuarios();
            }
        } catch (error) {
            alert("Error: El archivo no tiene un formato JSON válido.");
        }
    };
    reader.readAsText(archivo);
});