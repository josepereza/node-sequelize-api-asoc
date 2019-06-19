'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tarea = sequelize.define('Tarea', {
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    UsuarioId: DataTypes.INTEGER
  }, {timestamps: false});
  Tarea.associate = function(models) {
    Tarea.belongsTo(models.Usuario);
  };
  return Tarea;
};