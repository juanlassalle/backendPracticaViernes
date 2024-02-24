import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const User = sequelize.define('User',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING(150),
   
})
/* await User.sync() */