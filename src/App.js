const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const edad = document.querySelector("#edad-input");
const genero = document.querySelector("#genero-input");
const fecha = new Date();

function saludarSegunEdad(edad){
    return (edad>=11 && edad<=25) ? "joven" : (edad>=26) ? "Senor(a)" : " ";
}

function saludarSegunGenero(genero, tipo){
    switch(tipo){ 
        case "joven": 
            return (genero == "mujer") ? "senorita " : "joven ";
            break;
        case "Senor(a)":
            return (genero == "mujer") ? "senora " : "senor ";
            break;
        case " ":
            return " ";
            break;
    }
}

function saludarSegunHora(hora){
    return (hora>=4 && hora<=12) ? "buen dia " : 
    (hora>=13 && hora<=18) ? "buenos tardes " : "buenos noches ";
}

form.addEventListener("submit", (event) => {
    let saludarPorEdad = saludarSegunEdad(edad.value);
    let saludarPorGenero = saludarSegunGenero(genero.value, saludarPorEdad);
    let saludarPorHora = saludarSegunHora(fecha.getHours());
    alert("Hola "+ saludarPorHora + saludarPorGenero + nombre.value);
});
