'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Tareas', [{
        titulo: 'hardware',
        descripcion: 'hadware false',
        UsuarioId:1
      },{
        titulo: 'hardware2',
        descripcion: 'hadware2 false',
        UsuarioId :1
      },{
        titulo: 'hardware3',
        descripcion: 'hadware3 false',
        UsuarioId:2
      },{
        titulo: 'hardware44',
        descripcion: 'hadware4 false',
        UsuarioId:2
      },{
        titulo: 'hardware5',
        descripcion: 'hadware5 false',
        UsuarioId:2
      },{
        titulo: 'hardware6',
        descripcion: 'hadware6 false',
        UsuarioId:3
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Tareas', null, {});
    
  }
};
