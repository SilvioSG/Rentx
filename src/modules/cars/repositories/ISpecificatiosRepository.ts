import { Specification } from "../infra/typeorm/entities/Specification";


interface ICreateSpecificatonDTO {
    name: string;
    description: string;
};

interface ISpecificationsRepository { //Para não vir nome repetido
    findByName(name:string) :Promise<Specification>;
    create ({ name, description }: ICreateSpecificatonDTO):Promise<Specification>;
    findByIds(ids: string[]): Promise<Specification[]>;
}

export { ICreateSpecificatonDTO , ISpecificationsRepository};