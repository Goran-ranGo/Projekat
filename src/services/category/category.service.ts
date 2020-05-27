import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Category } from "entities/category.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class CategoryService extends TypeOrmCrudService<Category> {
    constructor(
        @InjectRepository(Category)
        private readonly category: Repository<Category> // čim se pomene neki repozitorijum
    ) {                                                 // mora da se registruje u app.module.ts
        super(category);
    }
}