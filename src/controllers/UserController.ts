import {Request, Response} from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController {
	async index(req: Request, res: Response) {
		res.send("Hello World!");
	}
	
	async create(req: Request, res: Response) {
		const userRepository = getRepository(User);
		const { name, email } = req.body;
		
		const userAlreadyExists = await userRepository.findOne({ email, });
		if(userAlreadyExists)
		{
			return res.status(400).json({
				error: "Usuário já existe",
			});
		}
		
		const userCreated = userRepository.create({ name, email });
		await userRepository.save(userCreated);
		
		return res.json(userCreated);
	}
}

export { UserController };