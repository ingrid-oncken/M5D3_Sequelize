import sequelize from "../conn.js"
import Product from "./Product.js"
import Category from "./Category.js"

Product.belongsTo(Category)
Category.hasMany(Product)

export default { sequelize, Product, Category }
