import type { Request, Response } from "express";
import { Product } from "../models/Product";
import { User } from "../models/User";

export const home = async (req: Request, res: Response) => {
	const users = await User.findAll();
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
