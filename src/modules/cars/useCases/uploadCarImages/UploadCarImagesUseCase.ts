import { inject, injectable } from "tsyringe";

import { ICarsImagensRepository } from "../../repositories/ICarsImagensRepository";

interface IRequest {
    car_id: string;
    images_name: string[];
}

@injectable()
class UploadCarImageUseCase {
    constructor(
        @inject("CarsImagesRepository")
        private carImageRepository: ICarsImagensRepository,
    ) {}

    async execute({car_id, images_name}: IRequest):Promise<void>{
        images_name.map(async (image) => {
            await this.carImageRepository.create(car_id, image);
        });
    }
}

export { UploadCarImageUseCase}