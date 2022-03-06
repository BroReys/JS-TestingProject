import {Router} from 'express';
import UserController from "../controllers/userController";

const UserRouter = Router();

UserRouter.get('/', UserController.findAll);

UserRouter.post('/register', UserController.create);

UserRouter.post('/post', UserController.create);

UserRouter.delete('/userDelete', UserController.userDelete);

export default UserRouter;