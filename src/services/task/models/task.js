const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://citizix_user:S3cret@localhost:5432/prueba');

//const sequelize = require('../../../config/database');
// console.log(sequelize);

const Tasks = sequelize.define('Tasks', {
  id: {
    type: DataTypes.UUID,   
    primaryKey: true,
    defaultValue: sequelize.literal('gen_random_uuid()')
  },
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  dateEnd: {
    type: DataTypes.DATE,
    allowNull: true
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
    sequelize,
    modelName: 'Tasks'
});

module.exports = Tasks;