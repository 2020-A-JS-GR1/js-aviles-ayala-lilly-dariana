//04-funciones.js
function soloNumeros(a,b,c) {
    return a - b +c; //valor devolver
}

function soloLetras(a,b,c) {
   console.log(a,b,c); //undefined
}


//soloNumeros('v',true,[1,2,3]);
soloNumeros('v',true,[1,2,3]);
soloNumeros();
soloNumeros(1,2,3,4,5,6,78,9)
soloLetras();


//Funciones nombradas
function funcionNombrada() {
}
funcionNombrada();
const  funcionNombradaDos = function(){}; //funcionesA ANONIMAS
var funcionNombradaTres= function () {

} // funciones SIN NOMBRE
let funcionNombradaCuatro = function opcional() {

} // funciones ANONIMAS
funcionNombradaDos();
funcionNombradaTres();
funcionNombradaCuatro();

// opcional() NO EXISTO

const funcionNombradaCinco = () => {
}; // FAT ARROW FUNCTIONS
const funcionNombradaSeis = (x) => {
    return x + 1
}; // FAT ARROW FUNCTIONS
const funcionNombradaSiete = (x) => x + 1; // FAT ARROW FUNCTIONS
                                           // Una sola linea
                                           // Omito Return
                                           // Omito llaves
const funcionNombradaOcho = x => x + 1;   // TENGO SOLO UN PARAMETRO
// Omito los parentesis
const funcionNombradaNueve = (x, y, z) => x + y + z; // TENGO SOLO UN PARAMETRO
                                                     // Omito los parentesis

function sumarNumeros(numeroInicial, // 1
                      ...otrosNumeros) { // Parametros Inf [2,3,4,5,...]
    numeroInicial; // 1
    otrosNumeros; // [2, 3, 4, 5, 6, 7, 8, 9, 10]
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) => {
            total = total + valorActual;
        }
    );
    return numeroInicial + total;
    // return numeroInicial + otrosNumeros.reduce((a, v) => a + v, 0);
}

// sumarNumeros(1,2,3,4,5,6,7,8,9,10);
sumarNumeros(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const arreglo = [0, 1, 2];

function sumarArreglo(arregloParametro) {
    const clonArreglo = Object.assign([],arregloParametro);
    clonArreglo[0] = 100;
    return clonArreglo;
}

console.log(sumarArreglo(arreglo));
console.log('arreglo', arreglo);












