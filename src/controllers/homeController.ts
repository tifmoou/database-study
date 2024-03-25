import type { Request, Response } from "express";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { Op } from "sequelize";

export const home = async (req: Request, res: Response) => {
	const users = await User.findAll({
		attributes: { exclude: ["id"] },
		where: {
			age: {
				// [Op.or]: ["18", '23'],
				// [Op.gt]: 40,  > age | GT = Greather Then
				// [Op.gte]: 40, >= age | GTE = Equal
				// [Op.lt]: 40, < age | LT = Lower Than
				// [Op.lte]: <= 40

				[Op.between]: [30, 70],
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
