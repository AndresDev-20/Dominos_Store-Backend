"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here

      // un producto pertenece a un detalle de carrito
      Product.hasMany(models.DetailCart, {
        foreignKey: 'productId',
        as: 'details',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Product.init(
    {
      nameProduct: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imagesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
