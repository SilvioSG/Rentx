import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload";
import { CreateUserController } from "../../../../modules/accounts/UseCases/createUser/CreateUserController";
import { ProfileUserController } from "../../../../modules/accounts/UseCases/profileUser/ProfileUserController";
import { UpdateUserAvatarController } from "../../../../modules/accounts/UseCases/updateUserAvatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const profileUserController = new ProfileUserController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch("/avatar",ensureAuthenticated,uploadAvatar.single("avatar") ,updateUserAvatarController.handle);
usersRoutes.get("/profile", ensureAuthenticated, profileUserController.handle);

export { usersRoutes }