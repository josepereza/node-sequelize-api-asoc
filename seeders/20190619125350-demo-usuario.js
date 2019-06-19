'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Usuarios', [{
        nombre: 'santi Doe',
        poblacion: 'malaga',
        saldo: 120
      },{
        nombre: 'John felipe',
        poblacion: 'barcelona',
        saldo: 203
      },{
        nombre: 'pedor Doe',
        poblacion: 'malaga',
        saldo: 230
      }], {});
      },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Usuarios', null, {});
   
  }
};
