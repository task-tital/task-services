const fs = require('fs');
const path = require('path');

const direccionSeedRelativa = './taskSeeds.json';
const direccionSeed = path.resolve(__dirname, direccionSeedRelativa);

async function obtenerJson() {
    try {
        const dataReaded = fs.readFileSync(direccionSeed);
        const jsonData = JSON.parse(dataReaded);
        return jsonData;
    } catch(error) {
        throw new Error('Error al obtenerJson(): '+ error);
    }
};

module.exports = { obtenerJson };