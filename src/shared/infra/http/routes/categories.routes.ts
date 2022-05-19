import { Router } from "express";
import multer from "multer";

import { CreatCategoryController } from "../../../../modules/cars/useCases/creatCategory/CreateCategoryController";
import { ImportCategoryController } from "../../../../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../../../../modules/cars/useCases/listCategories/ListCategoriesController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const categoriesRoutes = Router();

const upload = multer({
    dest:"./tmp",
});

const creatCategoryController = new CreatCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController= new ListCategoriesController();

categoriesRoutes.post("/",ensureAuthenticated, ensureAdmin, creatCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post("/import", upload.single("file"), ensureAuthenticated, ensureAdmin,  importCategoryController.handle);

export { categoriesRoutes };
