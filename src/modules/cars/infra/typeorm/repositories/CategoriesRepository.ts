import{ getRepository, Repository} from "typeorm";
import { ICategoriesRepository, ICreatCategoryDTO } from "../../../repositories/ICategoriesRepository";
import { Category } from "../entities/Category";

class CategoriesRepository  implements ICategoriesRepository{
    private repository : Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ description, name} : ICreatCategoryDTO): Promise<void> {
        const categoriy = this.repository.create({
            description,
            name,
        });

        await this.repository.save(categoriy);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName( name: string): Promise<Category>{
        // Select * from categories where name = "name" limit 1
        const category = await this.repository.findOne({ name });
        return category;
    }
};

export { CategoriesRepository }