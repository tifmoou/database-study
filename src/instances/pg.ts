import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// biome-ignore lint/style/noNonNullAssertion: <typescript eh um lixo>
export const sequelize = new Sequelize(process.env.PG_DB!, process.env.PG_USER!, process.env.PG_PASSWORD!, {
	dialect: "postgres",
	port: Number(process.env.PG_PORT),
});
