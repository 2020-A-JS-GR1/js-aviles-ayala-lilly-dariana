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
if(null){
    console.log("Es truty");
}else{
    console.log("Es Falso"); // Truty
}
if(undefined){
    console.log("Es truty"); // Falsy
}else{
    console.log("Es Falso");
}

//Orden de Importancia
// 1) "const"
// 2) "let"
//3) X -> "var"

//Objetos Js (JSON) -Arreglos

const lilly= {
    nombre: "Lilly", // llave: valor,
    "apellido": 'Aviles',
    edad: 24,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa:{
        color: 'plomo',
        talla: '40',
    },
    mascotas: ['Cachetes', 'Pequitas','Panda']
   // sueldo:1.2,
    //gastos: 0.8
}; // object

//ACCEDER A LAS PROPIEDADES DEL OBJETO
lilly.nombre;//"Lilly"
lilly.apellido; //"Aviles"
lilly["nombre"];
console.log(lilly);
lilly.nombre="Dariana";
console.log(lilly);
//SI DESEO AGRAGAR UNA NUEVA PROPIEDAD DE UN OBJETO
lilly.sueldo;//UNDEFINED
console.log(lilly.sueldo);//UNDEFINED
lilly.sueldo=1.2;
console.log(lilly.sueldo);//1.2
lilly["gastos"]=0.8;
console.log(lilly.gastos);//0.8
lilly.nombre=undefined;
console.log(lilly);
//console.log(Object.keys(lilly));
delete lilly.nombre; //ELIMINAR LA LLAVE: "NOMBRE"
console.log(Object.keys(lilly));
console.log(Object.values(lilly));

//LISTA DE VARIABLES POR VALOR EN JS
//number
//string
//boolean
//undefined
let edadLilly = 24;
let edadDariana=edadLilly;
console.log(edadLilly); //24
console.log(edadDariana);//24
edadLilly=edadLilly+1;
console.log(edadLilly);//25
console.log(edadDariana);//25


//LISTA DE VARIABLES POR REFERENCIA EN JS
let rafael = {
    nombre: "Rafael"
};
/*let lenin= rafael;
console.log(rafael);
console.log(lenin);
lenin.nombre="Lenin";
console.log(rafael);
console.log(lenin);
delete  rafael.nombre;
console.log(rafael);
console.log(lenin);*/

//COMO CLONAR A RAFAEL
let lenin = Object.assign({},rafael);
// let lenin = Object.assign({},rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);


/*const  arregloNumeros = []; //object

console.log(lilly);
console.log(arregloNumeros);*/