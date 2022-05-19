import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUserCase } from "./CreateUserUseCase";


class CreateUserController {
    async handle( request: Request, response: Response): Promise<Response> {
        const { name, email, password, driver_license}= request.body;
        const createUserUseCase = container.resolve(CreateUserUserCase);
        
        await createUserUseCase.execute({name, email, password, driver_license});

        return response.status(201).send();
    }
}

export { CreateUserController}