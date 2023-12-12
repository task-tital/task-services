const { insertPg, selectAllPg, selectFilterPg, selectPg, updatePg, deletePg, InputConstructor, ConditionConstructor } = require('../operations/pgOperations');
const { TasksModel } = require('../models/task');

entrada = new InputConstructor();
entrada.setAttribute('title', 'prueba 00');
entrada.setAttribute('priority', 2);

insertPg(TasksModel, entrada);