'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Trip.init({
    TripNo: {
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4,
    },
    CarId:{
      type:DataTypes.INTEGER,
      foreignKey:true,
      allowNull:false,
    },
    From_location:{ 
      type:DataTypes.STRING,
      allowNull:false,
    },
    To_location:{
    type:DataTypes.STRING,
    allowNull:false,
    },
    Date:{
      type:DataTypes.DATE,
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'trip',
  });
  return Trip;
};