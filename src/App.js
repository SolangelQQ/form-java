const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const edad = document.querySelector("#edad-input");
const genero = document.querySelector("#genero-input");
const idioma =  document.querySelector("#idioma-input");
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
    (hora>=13 && hora<=18) ? "buenas tardes " : "buenas noches ";
}

function saludarSegunIdioma(idioma, horario){
    switch(horario){
        case "buen dia ":
            return (idioma == "espaniol") ? "buen dia " : 
            (idioma == "ingles") ? "good morning " :
            (idioma == "aleman")? "guten Morgen " : 
            (idioma == "ruso")? "доброе утро ":
            (idioma == "chino")? "早上好 " :
            (idioma == "frances")? "bonjour  " : "" ;
            break;
        case "buenas tardes ":
            return (idioma == "espaniol") ? "buenas tardes " : 
            (idioma == "ingles") ? "good afternoon " :
            (idioma == "aleman")? "guten Tag " : 
            (idioma == "ruso")? "Добрый день ":
            (idioma == "chino")? "下午好 " :
            (idioma == "frances")? "bonjour à tous  " : "" ;
            break;
        case "buenas noches ":
            return (idioma == "espaniol") ? "buenas noches " : 
            (idioma == "ingles") ? "good night " :
            (idioma == "aleman")? "guten Abend " : 
            (idioma == "ruso")? "добрый вечер ":
            (idioma == "chino")? "晚上好 " :
            (idioma == "frances")? "bonne soirée  " : "" ;
            break;      
    }
}

form.addEventListener("submit", (event) => {
    let saludarPorEdad = saludarSegunEdad(edad.value);
    let saludarPorGenero = saludarSegunGenero(genero.value, saludarPorEdad);
    let saludarPorHora = saludarSegunHora(fecha.getHours());
    let saludarPorIdioma = saludarSegunIdioma(idioma.value, saludarPorHora);
    alert("Hola, "+ saludarPorIdioma + saludarPorGenero + nombre.value);
});
