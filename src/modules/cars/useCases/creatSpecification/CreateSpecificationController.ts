import {Response, Request } from "express";
import { container } from "tsyringe";

import  {CreatSpecificationUseCase} from "./CreatSpecificationUserCase"

class CreatSpecificationController {

    async handle(request: Request, response: Response): Promise<Response>{
        const{name, description}= request.body;
        
        const creatSpecificationUseCase = container.resolve(CreatSpecificationUseCase);

        await creatSpecificationUseCase.execute({name, description});

        return response.status(201).send();
    }
}

export {CreatSpecificationController};