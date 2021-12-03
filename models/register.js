'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Register extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Register.init({
    userId:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
      allowNull:false
    },
    name:
    {
      type:DataTypes.STRING,
      allowNull:false
    },
    email:
    { type:DataTypes.STRING,
      allowNull:false
    },
    password:
    {
      type:DataTypes.STRING,
      allowNull:false
    },
    phoneNo:
    {
    type:DataTypes.BIGINT,
    allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Register',
  });
  return Register;
};