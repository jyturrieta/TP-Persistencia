'use strict';
module.exports = (sequelize, DataTypes) => {
  const docente = sequelize.define('docente', {
    nombre: DataTypes.STRING,
    id_materia: DataTypes.INTEGER
  }, {});
  docente.associate = function(models) {
    // associations can be defined here
  };
  return docente;
};