import { container } from "tsyringe";

import "../container/providers";

import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { CarsImagesRepository } from "../../modules/cars/infra/typeorm/repositories/CarsImagesRepository";
import { CarsRepository } from "../../modules/cars/infra/typeorm/repositories/CarsRepository";
import { CategoriesRepository } from "../../modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { UsersTokensRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
import { ICarsImagensRepository } from "../../modules/cars/repositories/ICarsImagensRepository";
import { ICarsRepository } from "../../modules/cars/repositories/ICarsRepository";
import {ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";

import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificatiosRepository";
import { IRentalsRepository } from "../../modules/rentals/infra/typeorm/repositories/IRentalsRepository";
import { RentalsRepository } from "../../modules/rentals/repositories/RentalsRepository";
import { IUsersTokensRepository } from "../../modules/accounts/repositories/IUsersTokensRepository";

// ICategoiresRepository
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", 
    CategoriesRepository
);

// ISpecificationsRepository
container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository", 
    SpecificationsRepository
);

// IUsersRepository
container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

// ICarsRepository
container.registerSingleton<ICarsRepository>(
    "CarsRepository",
    CarsRepository
);

// ICarsImageRepository
container.registerSingleton<ICarsImagensRepository>(
    "CarsImagesRepository",
    CarsImagesRepository
);

// IRentalsRepository
container.registerSingleton<IRentalsRepository>(
    "RentalsRepository",
    RentalsRepository
);

// IUsersTokensRepository
container.registerSingleton<IUsersTokensRepository>(
    "UsersTokensRepository",
    UsersTokensRepository
);