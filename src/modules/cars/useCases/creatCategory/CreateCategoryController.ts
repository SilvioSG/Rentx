import{ Response, Request } from "express";
import { container } from "tsyringe";
import { CreatCategoryUseCase } from "./CreatCategoryUseCase";

class CreatCategoryController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, description} = request.body;

        const creatCategoryUseCase = container.resolve(CreatCategoryUseCase);

        await creatCategoryUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreatCategoryController }