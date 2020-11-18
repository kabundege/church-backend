export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT,
    },
    phonenumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    amazina: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    itorero_ryibanze:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    role:{
      type: Sequelize.STRING,
      allowNull:true,
      defaultValue:'christian',
    },
    status:{
      type: Sequelize.STRING,
      allowNull:true,
      defaultValue:'active',
    },
    createdAt: {
      type: Sequelize.DATE, 
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE, 
      defaultValue: Sequelize.NOW,
      allowNull:false,
    },
  });
}
export function down(queryInterface) {
 
 return queryInterface.dropTable('users');
}
