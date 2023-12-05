const { insertPg, selectAllPg, selectFilterPg, selectPg, updatePg, deletePg, InputConstructor, ConditionConstructor } = require('../operations/pgOperations');
const { Tasks } = require('../models/task');
const { obtenerJson } = require('../seeds/obtenerJson');

const json = obtenerJson();

for(let elemento in json) {
    insertPg(Tasks, elemento);
}