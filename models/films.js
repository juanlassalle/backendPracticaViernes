
import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Film = sequelize.define('Film',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    score: DataTypes.INTEGER,
    director: DataTypes.STRING
})

/* await Film.sync() */