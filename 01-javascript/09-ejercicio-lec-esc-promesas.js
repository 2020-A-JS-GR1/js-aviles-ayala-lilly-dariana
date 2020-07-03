const fs = require('fs');
const archivo = './06-ejemplo.txt';
/*
Hacer una función que me acepte como parámetro una variable
con el Path del archivo y el contenido agregar al contenido
del archivo.La función debe tomar estos dos parámetros y leer
el archivo y añadir al texto al final del archivo.
Al final vamos a leer el archivo nuevamente imprimirlo en consola
TODOOO esto debe ser realizado con promesas*/
function promesaLectura(path) {
    const miPrimerPromesa = new Promise( // Definicion de la promesa
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
    return miPrimerPromesa
}

function promesaEscritura(path,contenidoNuevo) {
    const miSegundaPromesa = new Promise( // Definicion de la promesa

            (resolve, reject) => {
                fs.readFile(
                    path,
                    'utf-8',
                    (error, contenido) => {
                        if (error) {
                            reject('No es par =(', error);
                        } else {
                            fs.writeFile(
                                path,contenido +'\n'+ contenidoNuevo,'utf-8',
                                (error)=>{
                                    if(error){
                                        reject('No es par =(', error);
                                    }
                                    resolve(contenidoNuevo);
                                });
                        }
                    }
                );
            }
    )

    return miSegundaPromesa

}
promesaLectura(archivo)
    .then(
    (contenido)=>{
         console.log('Contenido then', contenido);
         promesaEscritura('./06-ejemplo.txt','Hi Hitler')
            .then(
                (contenido)=>{
                console.log('Contenido then', contenido);
                }
            )
            .catch(
            (error)=>{
                console.log('Contenido catch',error);
            }
        )
    }
)
.catch(
    (error)=>{
        console.log('Contenido catch',error);
    }
)

