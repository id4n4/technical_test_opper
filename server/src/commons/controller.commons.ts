import { Body, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { BaseService } from "./service.commons";

export abstract class BaseController<T> {

    abstract getService(): BaseService<T>;

    @Get('all')
    async findAll() : Promise<T[]> {
        return await this.getService().findAll();
    }

    @Get('findOneBy/:columnName=:value')
    async getByColumn(
        @Param('columnName') columnName: string,
        @Param('value') value: any,
    ): Promise<T> {
        return await this.getService().findOneBy(columnName, value);
    }

    @Get('findManyBy/:columnName=:value')
    async getManyByColumn(
        @Param('columnName') columnName: string,
        @Param('value') value: any,
    ): Promise<T[]> {
        return await this.getService().findManyBy(columnName, value);
    }

    @Post('save')
    @HttpCode(HttpStatus.CREATED)
    async save(@Body() entity: T) : Promise<T> {
        return await this.getService().save(entity);
    }

    @Post('save/many')
    @HttpCode(HttpStatus.CREATED)
    async saveMany(@Body() entities: T[]) : Promise<T[]> {
        return await this.getService().saveMany(entities);
    }

    @Post('delete/:id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: any) {
        return this.getService().delete(id)
    }

    @Get('count')
    async count() : Promise<number> {
        return await this.getService().count();
    }

}