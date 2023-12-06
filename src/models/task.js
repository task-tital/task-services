const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const TasksModel = {
  id: {
    type: DataTypes.UUID,   
    primaryKey: true,
    defaultValue: DataTypes.UUIDV1,
    unique: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  dateEnd: {
    type: DataTypes.DATE,
    allowNull: true
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
};

const Tasks = sequelize.define('Tasks', TasksModel,
{
    sequelize,
    modelName: 'Tasks'
});

module.exports = { Tasks, TasksModel };