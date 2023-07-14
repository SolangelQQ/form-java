const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const edad = document.querySelector("#edad-input");

function saludarSegunEdad(edad){
    return (edad>=11 && edad<=25) ? "joven " : (edad>=26) ? "senor(a) " : " ";
}

form.addEventListener("submit", (event) => {
    let saludarPorEdad = saludarSegunEdad(edad.value);
    alert("Hola "+ saludarPorEdad + nombre.value);
});
