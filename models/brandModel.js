import db from "../database/db.js";
import { DataTypes } from "sequelize";

const BrandsModel = db.define("brands", {
    name_brand: { type: DataTypes.STRING, allowNull: false }
},{
    timestamps: false
})
export default BrandsModel;




