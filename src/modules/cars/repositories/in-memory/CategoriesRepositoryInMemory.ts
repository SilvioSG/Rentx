import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoriesRepository, ICreatCategoryDTO } from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository{
    
    categoires: Category[] = [];
    
    async findByName(name: string): Promise<Category> {
        const category = this.categoires.find((category)=> category.name === name);
        return category;
    }

    async list(): Promise<Category[]> {
        const all = this.categoires;
        return all;
    }

    async create({ name, description }: ICreatCategoryDTO): Promise<void> {
        const category = new Category();
        Object.assign(category, {
            name,
            description
        });

        this.categoires.push(category);
    }
}

export { CategoriesRepositoryInMemory };