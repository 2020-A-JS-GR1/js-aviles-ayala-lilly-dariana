//10-async-away.js
const promesaLeerArchivo = new Promise();
const promesaEscribirArchivo=new Promise();

function ejercicio() {
//regla async y away usar dentro de funciones (anónimas, con nobre y flecha gorda/
    // cuando se usa await siempre poner bloque try y catch
// ESTO NO ES POSIBLE
// PORQUE NO ESTA DENTRO DE UNA FUNCION
// const respuesta = await promesaEscribirArchivo;

// ASYNC AWAIT -> DENTRO DE UNA FUNCION
    async function ejercicio() {
        console.log('1');
        try {
            console.log('2');
            const contenidoArchivoActual = await promesaLeerArchivo();
            console.log('3');
            await promesaEscribirArchivo();
            console.log('4');
            const nuevoContenido = await promesaLeerArchivo();
            console.log('5');
        } catch (error) {
            console.error(error);
        }
        console.log('6');
        console.log('7');
    }

    const f = async () => {
        // contenido
    }

}