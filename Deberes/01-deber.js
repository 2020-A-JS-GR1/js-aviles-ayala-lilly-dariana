const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];



const respuestaVocalConsonante = arreglo
    .map(

        (valorActual, indiceActual, arregloCompleto) => {
            return{
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + (0.1*(valorActual.nombre.match(/[aeiou]/gi).length)+
                    (0.05*(valorActual.nombre.match(/[bcdfghjklmnpqrstvwyz]/gi).length))),
            };
         } ).filter(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota >= 14;
        }
    );

console.log('respuestaVocalConsonante', respuestaVocalConsonante);

