const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const edad = document.querySelector("#edad-input");
const genero = document.querySelector("#genero-input");
const idioma =  document.querySelector("#idioma-input");
const fecha = new Date();

function saludarSegunEdad(edad){
    return (edad>=11 && edad<=25) ? "joven" : (edad>=26) ? "Senor(a)" : " ";
}

function saludarSegunGenero(genero, tipo, idioma){
    let diccionario_joven = new Map([
        ['espaniol', ['senorita ', 'joven ']],
        ['ingles', ['miss ', 'young ']],
        ['aleman', ['fräulein ', 'junge ']],
        ['ruso', ['Мисс ', 'молодой ']],
        ['chino', ['小姐 ', '年轻 ']],
        ['frances', ['mademoiselle ', 'jeune ']]
    ]);

    let diccionario_adulto = new Map([
        ['espaniol', ['senora ', 'senor ']],
        ['ingles', ['madam ', 'mister ']],
        ['aleman', ['frau ', 'herr ']],
        ['ruso', ['Г-жа ', 'Г-н ']],
        ['chino', ['女士 ', '先生 ']],
        ['frances', ['Mme ', 'monsieur ']]
    ]);

    switch(tipo){ 
        case "joven": 
            return (genero == "mujer" ) ? diccionario_joven.get(idioma)[0] : diccionario_joven.get(idioma)[1];
            break;
        case "Senor(a)":
            return (genero == "mujer") ? diccionario_adulto.get(idioma)[0] : diccionario_adulto.get(idioma)[1];
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
            return (idioma == "espaniol") ? "Hola, buen dia " : 
            (idioma == "ingles") ? "Hello, good morning " :
            (idioma == "aleman") ? "Hallo, guten Morgen " : 
            (idioma == "ruso") ? "здравствуйте, доброе утро ":
            (idioma == "chino") ? "您好, 早上好 " :
            (idioma == "frances") ? "Bonjour  " : "" ;
            break;
        case "buenas tardes ":
            return (idioma == "espaniol") ? "Hola, buenas tardes " : 
            (idioma == "ingles") ? "Hello, good afternoon " :
            (idioma == "aleman") ? "Hallo, guten Tag " : 
            (idioma == "ruso") ? "здравствуйте, Добрый день ":
            (idioma == "chino") ? "您好,下午好 " :
            (idioma == "frances") ? "Bonjour à tous  " : "" ;
            break;
        case "buenas noches ":
            return (idioma == "espaniol") ? "Hola, buenas noches " : 
            (idioma == "ingles") ? "Hello, good night " :
            (idioma == "aleman") ? "Hallo, guten Abend " : 
            (idioma == "ruso") ? "здравствуйте, добрый вечер ":
            (idioma == "chino") ? "您好, 晚上好 " :
            (idioma == "frances") ? "Bonne soirée  " : "" ;
            break;      
    }
}

form.addEventListener("submit", (event) => {
    let saludarPorEdad = saludarSegunEdad(edad.value);
    let saludarPorGenero = saludarSegunGenero(genero.value, saludarPorEdad, idioma.value);
    let saludarPorHora = saludarSegunHora(fecha.getHours());
    let saludarPorIdioma = saludarSegunIdioma(idioma.value, saludarPorHora);
    alert(saludarPorIdioma + saludarPorGenero + nombre.value);
});
