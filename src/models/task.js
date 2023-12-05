const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const Tasks = sequelize.define('Tasks', {
  id: {
    type: DataTypes.UUID,   
    primaryKey: true,
    defaultValue: DataTypes.UUIDV1,
    unique: true
  },
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  dateEnd: {
    type: DataTypes.DATE,
    allowNull: true
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
    sequelize,
    modelName: 'Tasks'
});

module.exports = Tasks;