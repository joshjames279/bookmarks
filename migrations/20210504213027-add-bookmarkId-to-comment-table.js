'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('comments', 'bookmarkId', {
      type: Sequelize.INTEGER,
      references: {
         model: {
           tableName: 'bookmarks',
         },
         key: 'id'
       },
       onDelete: 'CASCADE',
       allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('comments', 'bookmarkId');
  }
};
