import {Router} from 'express';
import MessageController from "../controllers/messageController";

const MessageRouter = Router();

MessageRouter.get('/messages', MessageController.findAll);

MessageRouter.post('/msgpost', MessageController.create);

MessageRouter.delete('/msgdelete', MessageController.msgDelete);

export default MessageRouter;