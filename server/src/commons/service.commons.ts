import { FindManyOptions, Repository } from "typeorm";

export abstract class BaseService<T> {
    abstract getRepository(): Repository<T>;

    findAll() : Promise<T[]>{
        return this.getRepository().find();
    }

    async findOneBy(columnName: string, value: any): Promise<T> {
        const queryBuilder = this.getRepository().createQueryBuilder();
        const entity = await queryBuilder
            .select()
            .where(`${columnName} = :value`, { value })
            .getOne();
        
        return entity;
    }
    async findManyBy(columnName: string, value: any): Promise<T[]> {
        const queryBuilder = this.getRepository().createQueryBuilder();
        const entity = await queryBuilder
            .select()
            .where(`${columnName} = :value`, { value })
            .getMany();

        return entity;
    }

    save(entity: T) : Promise<T>{
        return this.getRepository().save(entity);
    }

    saveMany(entities: T[]): Promise<T[]> {
        return this.getRepository().save(entities);
    }

    async delete(id: any) {
        await this.getRepository().delete(id);
    }

    count(options?: FindManyOptions<T>): Promise<number> {
        return this.getRepository().count(options);
    }
}