'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  course.init({
    course_id:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id: DataTypes.INTEGER,
    courses: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};