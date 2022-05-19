import { Specification } from "../../infra/typeorm/entities/Specification";
import { ICreateSpecificatonDTO, ISpecificationsRepository } from "../ISpecificatiosRepository";


class SpecificationRepositoryInMemory implements ISpecificationsRepository {
    specifications: Specification[] =[]

    async create({ name, description }: ICreateSpecificatonDTO): Promise<Specification> {
        const specification = new Specification();

        Object.assign(specification,{
            description,
            name,
        });

        this.specifications.push(specification);

        return specification;
    }

    async findByName(name: string): Promise<Specification> {
        return this.specifications.find((specification) => specification.name ===name);

    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        const allSpecifications = this.specifications.filter(specification => ids.includes(specification.id))

        return allSpecifications;
    }
}

export { SpecificationRepositoryInMemory };