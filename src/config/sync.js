const sequelize = require('./database'); // Asegúrate de ajustar la ruta al archivo de configuración

const Tasks = require('../services/task/models/task'); // Importa tu modelo
 


Tasks.sync().then(() => {

  console.log("Tablas creadas");

}).catch((err)=>{
    console.log(err)
})
