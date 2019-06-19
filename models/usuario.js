'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    poblacion: DataTypes.STRING,
    saldo: DataTypes.INTEGER
  }, {timestamps: false});
  Usuario.associate = function(models) {
    Usuario.hasMany(models.Tarea);
  };
  return Usuario;
};