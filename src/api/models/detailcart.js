'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailCart extends Model {
    static associate(models) {
      // define association here
      // Un detalle de carrito pertenece a un carrito
      DetailCart.belongsTo(models.Cart, {
        foreignKey: 'cartId',
        as: 'cart',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      // Un detalle de carrito pertenece a un producto
      DetailCart.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      
    }
  }
  DetailCart.init({
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'DetailCart',
  });
  return DetailCart;
};