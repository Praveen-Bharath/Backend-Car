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
    userId: DataTypes.UUID,
    CarId: DataTypes.INTEGER,
    Payment_Id: DataTypes.INTEGER,
    To_location: DataTypes.STRING,
    From_location: DataTypes.STRING,
    Date: DataTypes.DATE,
    Payment_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};