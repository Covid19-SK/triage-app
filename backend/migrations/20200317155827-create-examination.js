'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('examinations', {
      id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.UUID,
      },
      patientId: {
        allowNull: false,
        references: {
          model: {
            tableName: 'patients',
          },
          key: 'id',
        },
        type: Sequelize.UUID,
      },
      institutionId: {
        allowNull: false,
        references: {
          model: {
            tableName: 'institutions',
          },
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      cough: {
        type: Sequelize.ENUM,
        values: ['none', 'mild', 'severe'],
      },
      breathShortness: {
        type: Sequelize.ENUM,
        values: ['none', 'mild', 'severe'],
      },
      fever: {
        type: Sequelize.ENUM,
        values: ['none', 'mild', 'severe'],
      },
      other: {
        type: Sequelize.STRING,
      },
      abroad: {
        type: Sequelize.BOOLEAN,
      },
      illPersonContact: {
        type: Sequelize.BOOLEAN,
      },
      covid19Contact: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('examinations');
  },
};
