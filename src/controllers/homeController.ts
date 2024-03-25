import type { Request, Response } from "express";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { Op } from "sequelize";

export const home = async (req: Request, res: Response) => {
	const users = await User.findAll({
		attributes: { exclude: ["id"] },
		where: {
			age: {
				[Op.or]: ["18", "23"],
			},
		},
	});
	console.log("USERS:", JSON.stringify(users));

	const age: number = 90;
	const showOld = age > 5;

	const list = Product.getAll();
	const expensiveList = Product.getFromPriceAfter(12);

	res.render("pages/home", {
		name: "Bonieky",
		lastName: "Lacerda",
		showOld,
		products: list,
		expensives: expensiveList,
		frasesDoDia: [],
		users,
	});
};
