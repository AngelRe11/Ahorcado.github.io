String.prototype.replaceAt = function (index, character) { return this.substring(0, index) + character + this.substring(index + character.length); }

//const listaAnimales=['perro',"gato","pajaro", "mono","pez"];
//const listaFrutas=["pera","manzana","naranja","sandia","mandarina"];
//const listaVehiculos=["coche","avion","moto","bicicleta","barco"];
const temas = [{
    nombre: "animales", palabras: ['perro', "gato", "pajaro", "mono", "pez"]
}, {
    nombre: "frutas", palabras: ["pera", "manzana", "naranja", "sandia", "mandarina"]
}, {
    nombre: "vehiculos", palabras: ["coche", "avion", "moto", "bicicleta", "barco"]
}]
const instrucciones = document.querySelector("#botones")

let temaSeleccionado = ""
let palabraSeleccionada = ""
let palabraGuiones = ""

for (let tema of temas) {
    let button = document.createElement("button")
    button.value = tema.nombre
    button.textContent = tema.nombre
    instrucciones.appendChild(button)
    button.classList.add("tema")
}

let botones = document.getElementsByClassName("tema")
for (let i = 0; i < botones.length; i++) {
    botones[i].onclick = (e) => {
        temaSeleccionado = e.target.value
        temas.forEach(tema => {
            if (tema.nombre === temaSeleccionado) {
                let indice = Math.floor(Math.random() * tema.palabras.length)
                palabraSeleccionada = tema.palabras[indice]
                console.log(palabraSeleccionada)
            }
        })
        document.getElementById("botones").style.display = "none"
        palabraGuiones = palabraSeleccionada.replace(/./g, "_ ");
        document.querySelector('#output').appendChild(document.createTextNode(palabraGuiones))
    }
}
let contadorFallos = 0;

document.querySelector('#comprobar').addEventListener('click', () => {
    const letra = document.querySelector('#letra').value;
    let haFallado = true;
    for (let i = 0; i < palabraSeleccionada.length; i++) {
        if (letra == palabraSeleccionada[i]) {
            palabraGuiones = palabraGuiones.replaceAt(i * 2, letra);
            haFallado = false;
        }
    }
    if (haFallado) {
        contadorFallos++;
        document.querySelector('#ahorcado').style.backgroundPosition = -(80.29 * contadorFallos) +
            'px 0';
        if (contadorFallos == 7) {
            alert("perdiste el juego")
        }
    } else {
        if (palabraGuiones.indexOf('_') < 0) {
            document.querySelector('#ganador').style.display = 'flex';
        }
    };
    console.log(document.querySelector("#output").textContent)
    document.querySelector('#output').textContent = palabraGuiones
    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();
})


