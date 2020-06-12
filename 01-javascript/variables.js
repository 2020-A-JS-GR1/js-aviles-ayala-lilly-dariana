//tipos de variables
//mutables e inmutables
//
//mutables
var numeroUno = 1;
let numeroDos =  2;

numeroUno = 5;
numeroDos = 8;

numeroUno = false;
numeroDos = true;

// inmutables
const configuracionArchivo ="PDF";
//configuracionArchivo = "XML";

// tipos de variables

const numero =1; //number
const sueldo = 1.2; //number
const texto = "Lilly"; // string
const booleanoo = false; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined


console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleanooo);
console.log(typeof hijos);
console.log(typeof numero);
console.log(typeof zapatos);
console.log(typeof apellido);
console.log(typeof Number("asd"));
console.log(Number("asd"));

if(true == true){
    console.log("Es verdadero"); //!
}else{
    console.log("Es Falso");
}

if(true == false){
    console.log("Es verdadero");
}else{
    console.log("Es Falso"); //!
}

if(""){
    console.log("Es verdadero");
}else{
    console.log("Es Falsy"); //!
}
if("Adrian"){
    console.log("Es truty");
}else{
    console.log("Es Falso");
}
if(-1){
    console.log("Es truty"); // Truty
}else{
    console.log("Es Falso");
}
if(0){
    console.log("Es truty");
}else{
    console.log("Es Falso"); // Truty
}
if(1){
    console.log("Es truty"); // Falsy
}else{
    console.log("Es Falso");
}}