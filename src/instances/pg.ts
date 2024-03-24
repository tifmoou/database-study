import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
    process.env.PG_BD,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {
        dialect: 'postgres',
        port: Number(process.env.PG_PORT)
    }
);