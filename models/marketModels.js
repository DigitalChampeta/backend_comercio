import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ProductsModel = db.define("products", {
    product_name: { type: DataTypes.STRING, allowNull: false },
    stock: { type: DataTypes.INTEGER, allowNull: false },
    description_product: { type: DataTypes.STRING, allowNull: false },
    price: {type: DataTypes.FLOAT, allowNull: false },
},{
    timestamps: false
})
export default ProductsModel;

// INTENTAR ANTES CON UN MODELO UNICO (1 TABLA) Y DESPUES CON 2 -3