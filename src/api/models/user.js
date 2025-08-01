"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // definimos aqui las relaciones con los demas modelos
      User.belongsTo(models.Role, {
        foreignKey: 'rolId',
        as: 'role',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),

      // Un usuario puede tener un carro
      User.hasOne(models.Cart, {
        foreignKey: 'userId',
        as: 'cart',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rolId: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
