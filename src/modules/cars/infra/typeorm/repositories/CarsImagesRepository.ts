import { getRepository, Repository } from "typeorm";
import { ICarsImagensRepository } from "../../../repositories/ICarsImagensRepository";
import { CarImage } from "../entities/CarImage";


class CarsImagesRepository implements ICarsImagensRepository{
    private repository: Repository<CarImage>;

    constructor(){
        this.repository= getRepository(CarImage)
    }

    async create(car_id: string, image_name: string): Promise<CarImage> {
        const carImage = this.repository.create({
            car_id,
            image_name,
        });
        await this.repository.save(carImage);
        
        return carImage;
    }
}

export { CarsImagesRepository }