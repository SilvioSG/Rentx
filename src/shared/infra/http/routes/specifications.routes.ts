import { Router } from "express";
import { CreatSpecificationController } from "../../../../modules/cars/useCases/creatSpecification/CreateSpecificationController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const specificationsRoutes = Router();

const createSpecificationController = new CreatSpecificationController();

specificationsRoutes.post("/", ensureAuthenticated, ensureAdmin, createSpecificationController.handle);

export { specificationsRoutes }