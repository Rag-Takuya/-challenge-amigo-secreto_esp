// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables para almacenar los amigos y sus sorteos
let amigos = [];
let listaAmigosElement = document.getElementById("listaAmigos");
let resultadoElement = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();
    console.log(inputAmigo.value)
    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista si es válido
    amigos.push(nombre);
    mostrarListaAmigos();
    inputAmigo.value = ""; // Limpiar el campo
    inputAmigo.focus(); // Enfocar el campo para nueva entrada
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    listaAmigosElement.innerHTML = ""; // Limpiar lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigosElement.appendChild(li);
    });
}

// Función para sortear amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe ingresar al menos dos nombres para sortear.");
        return;
    }

    const disponibles = [...amigos]; // Copia de la lista de amigos
    const resultado = [];

    amigos.forEach((amigo) => {
        // Filtrar opciones válidas: no debe ser el mismo amigo
        const opcionesValidas = disponibles.filter((opcion) => opcion !== amigo);

        if (opcionesValidas.length === 0) {
            alert("Error en el sorteo, no se pudo asignar correctamente. Inténtelo de nuevo.");
            resultadoElement.innerHTML = ""; // Limpiar resultado
            return;
        }

        // Seleccionar aleatoriamente una opción válida
        const elegidoIndex = Math.floor(Math.random() * opcionesValidas.length);
        const elegido = opcionesValidas[elegidoIndex];

        resultado.push(`${amigo} tiene como amigo secreto a ${elegido}`);

        // Eliminar el amigo asignado de la lista disponible
        disponibles.splice(disponibles.indexOf(elegido), 1);
    });

    // Mostrar resultados
    mostrarResultados(resultado);
}

// Función para mostrar los resultados del sorteo
function mostrarResultados(resultado) {
    resultadoElement.innerHTML = ""; // Limpiar resultados anteriores
    resultado.forEach((asignacion) => {
        const li = document.createElement("li");
        li.textContent = asignacion;
        resultadoElement.appendChild(li);
    });
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
