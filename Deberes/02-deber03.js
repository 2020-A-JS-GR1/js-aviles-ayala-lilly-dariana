const fs = require('fs');
const archivo = './02-ejercicio.txt';
/*
Hacer una función que me acepte como parámetro una variable
con el Path del archivo y el contenido agregar al contenido
del archivo.La función debe tomar estos dos parámetros y leer
el archivo y añadir al texto al final del archivo.
Al final vamos a leer el archivo nuevamente imprimirlo en consola
TODOOO esto debe ser realizado con promesas*/
function promesaLectura(path) {
    return new Promise( // Definicion de la promesa
        (resolve, reject) => {
            fs.readFile( //asincrona
                path,
                'utf-8',
                (error, contenidoLeido) => {

                    if (error) {
                        reject('Hubo error', error);
                    } else {
                        resolve(contenidoLeido);
                    }
                }
            );
        }
    )

}

function promesaEscritura(path,contenido,contenidoNuevo) {
    return new Promise( // Definicion de la promesa

        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if (error) {
                        reject( 'Hubo error',error);
                    } else {
                        fs.writeFile(
                            path,contenido +'\n'+ contenidoNuevo,'utf-8',
                            (error)=>{
                                if(error){
                                    reject('Hubo error',error);
                                }
                                resolve(contenidoNuevo);
                            });
                    }
                }
            );
        }
    )


}



    async function ejercicio(path, contenidoNuevo) {
        try {
            const respuestaActual = await promesaLectura(path);
            console.log('Lee el archivo: ', respuestaActual);
            await promesaEscritura(path, respuestaActual, contenidoNuevo);
            const nuevoContenido = await promesaLectura(path);
            console.log('Lee la modificación de texto: ', nuevoContenido);
        } catch (error) {
            console.error(error);
        }
    }

    ejercicio(archivo, 'Buenas noches');