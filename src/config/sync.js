const sequelize = require('./database'); // Asegúrate de ajustar la ruta al archivo de configuración

const { TasksModel } = require('../models/task'); // Importa tu modelo

TasksModel.sync().then(() => {

  console.log("Tablas creadas");

}).catch((error)=>{
    console.log(error)
})
