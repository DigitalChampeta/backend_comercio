import db from "../database/db.js";
import { DataTypes } from "sequelize";

const BrandsModelsModel = db.define("brands", {
    name_brand: { type: DataTypes.STRING, allowNull: false }
},{
    timestamps: false
})
export default ProductsModel;