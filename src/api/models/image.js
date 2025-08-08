'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      // define association here
      //Una imagen pertenece a un producto
      Image.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })

    }
  }
  Image.init({
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    publicId: { // Para eliminar/editar en Cloudinary
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    altText: {
      type: DataTypes.STRING,
      allowNull: true
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};