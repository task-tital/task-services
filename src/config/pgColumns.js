const Tasks = require('../models/task.js');

const listaNombresColumnas = [];

Tasks.describe()
.then((descripcionTabla) => {
    const nombresColumnas = Object.keys(descripcionTabla);
    listaNombresColumnas.push(...nombresColumnas);
    console.log("AA " + descripcionTabla);
}).catch((error) => {
    console.error('Fallo al obtener el nombre de las columnas de la tabla: ', error);
});

console.log(listaNombresColumnas);