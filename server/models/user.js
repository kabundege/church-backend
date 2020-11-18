export default (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      
      phonenumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amazina: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      itorero_ryibanze:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      role:{
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue:'christian',
      },
      status:{
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue:'active',
      },
    },
    {},
  );

  users.associate = (models) => {};
  return users;
};