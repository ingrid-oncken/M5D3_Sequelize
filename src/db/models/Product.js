import sequelize from "../conn.js"
import s from "sequelize"
const { DataTypes } = s

const Product = sequelize.define("product", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // category: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isUrl: true,
      msg: "Invalid url",
    },
  },
})

export default Product
