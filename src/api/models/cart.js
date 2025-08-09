'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      // define association here
      // Un carro pertenece a un usuario
      Cart.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      // Un carro puede tener muchos detalles de carrito
      Cart.hasMany(models.DetailCart, {
        foreignKey: 'cartId',
        as: 'details',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Cart.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};