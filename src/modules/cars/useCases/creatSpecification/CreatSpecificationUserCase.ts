import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";

import { ISpecificationsRepository } from "../../repositories/ISpecificatiosRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreatSpecificationUseCase {
    constructor (
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository) 
        {}

    async execute ({description, name }: IRequest): Promise<void>{
        const specificationAlreadyExists =await this.specificationsRepository.findByName(name);

        if(specificationAlreadyExists) {
           throw new AppError("Specification Already Exists")
        }
        await this.specificationsRepository.create({name, description});
    }
}

export { CreatSpecificationUseCase};