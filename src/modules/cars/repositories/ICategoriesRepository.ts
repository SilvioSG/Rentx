import { Category } from "../infra/typeorm/entities/Category";

// DTO => Data transfer Object
interface ICreatCategoryDTO {
    name: string;
    description: string;
};

interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    list() : Promise<Category[]>;
    create({name, description }: ICreatCategoryDTO ): Promise<void>;
}

export { ICategoriesRepository, ICreatCategoryDTO  };