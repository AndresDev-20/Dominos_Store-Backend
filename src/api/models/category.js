'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // define association here
      // Una categoria puede tener muchos productos
      Category.hasMany(models.Product, {
        foreignKey: 'categoryId',
        as: 'products',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Category.init({
    nameCategory: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};