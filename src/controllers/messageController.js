import MessageService from '../services/message_service'
import MessageRepository from '../repositories/message_repository'

const findAll = async (req, res) => {
  // console.log("controller findAll endPoint reqBody: " + req)
  const messages = await MessageService.findAll();
  // console.log("this is message array from controller: " + messages)
  res.json(messages);
}

const create = async (req, res) => {
  try {
    await MessageService.createMessage(req.body);
    console.log("this is message from controller Create endPoint ")
    res.sendStatus(201);
  } catch (e) {
    console.log(e.message)
    res.sendStatus(400);
  }
}

const msgDelete = async (req, res, next) => {
  try {
    await MessageService.deleteMessage(req.body);
    // other service call (or same service, different function can go here)
    // i.e. - await generateUserPreview()

    res.sendStatus(204)
    next()
  } catch (e) {
    console.log(e.message)
    res.sendStatus(400)
  }
}

export default {
  findAll,
  create,
  msgDelete
}