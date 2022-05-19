import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { ICreateUsersDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../shared/errors/AppError";


@injectable()
class CreateUserUserCase {
    constructor (
        @inject("UsersRepository")
        private usersRpeository:IUsersRepository) {} 

    async execute({name, email, password, driver_license}:ICreateUsersDTO): Promise<void>{

        const userAlreadyExists = await this.usersRpeository.findByEmail(email);

        if(userAlreadyExists){
            throw new AppError("User already exists!")
        }

        const passwordHash = await hash(password, 8);

        await this.usersRpeository.create({
            name,
            email,
            password: passwordHash,
            driver_license,
        });
    }
}


export { CreateUserUserCase };