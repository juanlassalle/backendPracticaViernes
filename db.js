import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('dbbackend','root','monitorfeo1517/',{
    dialect: "mysql",
    port: 3306
})