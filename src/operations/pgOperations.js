const { Op } = require('sequelize');

/**
 * Funcion que inserta entradas en la tabla.
 * @param {Sequelize} modelo el modelo de la tabla.
 * @param {InputConstructor} datos son las entradas que se rellenaran. Crear a partir de InputConstructor.
 * @returns 
 */
const insertPg = async(modelo, datos) => {
    try {
        console.log(datos.getInput());
        return await modelo.create(datos.getInput());
    } catch(error) {
        throw new Error('Error INSERT: ' + error);
    }
};

/**
 * Funcion que selecciona todas las entradas de la tabla.
 * @param {Sequelize} modelo el modelo de la tabla.
 * @returns 
 */
const selectAllPg = async (modelo) => {
    try {
        return await modelo.findAll();
    } catch(error) {
        throw new Error('Error SELECT: ' + error);
    }
};

/**
 * Funcion que selecciona todas las entradas de la tabla que cumplan con la condicion.
 * @param {Sequelize} modelo el modelo de la tabla.
 * @param {ConditionConstructor} condiciones es un objeto con pares clave-valor: nombreColumna-condicion. Crear a partir de la clase ConditionConstructor.
 * @returns
 */
const selectFilterPg = async (modelo, condiciones) => {
    try {
        return await modelo.findAll({
            where: condiciones.getCondiciones()
        });
    } catch(error) {
        throw new Error('Error SELECT: ' + error);
    }
}

/**
 * Funcion SELECT simple, obtiene unas columnas con unas condiciones.
 * @param {Sequelize} modelo el modelo de la tabla.
 * @param {string[]} atributos lista con los nombres de las columnas que se recuperaran.
 * @param {ConditionConstructor} condiciones es un objeto con pares clave-valor: nombreColumna-condicion. Crear a partir de la clase ConditionConstructor.
 * @returns 
 */
const selectPg = async (modelo, atributos, condiciones) => {
    try {
        return await modelo.findAll({
            attributes: atributos,
            where: condiciones.getCondiciones()
        });
    } catch(error) {
        throw new Error('Error SELECT: ' + error);
    }
}

/**
 * Funcion que actualiza el valor de una entrada de la tabla a partir del id.
 * @param {Sequelize} modelo el modelo de la tabla.
 * @param {InputConstructor} datos datos que se actualizaran. Usar InputConstructor.
 * @param {string} id 
 * @returns 
 */
const updatePg = async(modelo, datos, id) => {
    try {
        return await modelo.update(datos.getInput(), { where: { id: id } })
    } catch(error) {
        throw new Error('Error UPDATE: ' + error);
    }
};

/**
 * Funcion que elimina una entrada de la tabla a partir de su id.
 * @param {Sequelize} modelo el modelo de la tabla.
 * @param {string} id el id que indica la entrada de la tabla a la que se refiere.
 */
const deletePg = async (modelo, id) => {
    try{
        const resultado = await modelo.destroy({ where: {id: id}});
        if(resultado === 0) {
            throw new Error('No existe el id: '+ id);
        }
    } catch(error) {
        throw new Error('Error DELETE: ' + error);
    }
}

class InputConstructor {
    constructor() {
        this.inputObject = {};
    }

    setAttribute(columna, valor) {
        this.inputObject[columna] = valor;
    }

    removeAttribute(columna) {
        delete this.inputObject[columna];
    }

    getInput() {
        return this.inputObject;
    }

    clean() {
        this.inputObject = {};
    }
}

class ConditionConstructor {
    constructor() {
        this.condicionObject = {};
    }

    getCondiciones() {
        return this.condicionObject;
    }

    setEquals(columna, valor) {
        this.condicionObject[columna] = valor;
    }

    setLike(columna, valor) {
        this.condicionObject[columna] = {[Op.like]: '%' + valor +'%'};
    }

    setGreaterThan(columna, valor) {
        this.condicionObject[columna] = {[Op.gt]: valor};
    }

    setLowerThan(columna, valor) {
        this.condicionObject[columna] = {[Op.lt]: valor};
    }

    clean() {
        this.condicionObject = {};
    }
}

module.exports = { insertPg, selectAllPg, selectFilterPg, selectPg, updatePg, deletePg, InputConstructor, ConditionConstructor };