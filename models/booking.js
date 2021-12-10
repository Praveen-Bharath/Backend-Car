'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Booking.init({
    userId: {
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
      allowNull:false 
      },
    CarId: DataTypes.INTEGER,
    Payment_Id: DataTypes.INTEGER,
    To_location: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    From_location:
    {type:DataTypes.STRING,
      allowNull:false,
    },
    Date: {
      type:DataTypes.DATEONLY,
      allowNull:false,
      defaultValue: sequelize.NOW
      },
    Payment_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};