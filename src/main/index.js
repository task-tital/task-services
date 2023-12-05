const { sequelize } = require('../config/database');
const { insertPg, selectAllPg, selectFilterPg, selectPg, updatePg, deletePg, InputConstructor, ConditionConstructor } = require('../operations/pgOperations');
const { Tasks } = require('../models/task');

/*
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
*/

entrada = new InputConstructor();
entrada.setAttribute('title', 'prueba 00');
entrada.setAttribute('priority', 2);

insertPg(Tasks, entrada);