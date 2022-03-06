import MessageService from '../services/message_service'
import MessageRepository from '../repositories/message_repository'

const findAll = async (req, res) => {
  console.log("controller findAll endPoint reqBody: " + req)
  const messages = await MessageRepository.findAll();
  console.log("this is message array from controller: " + messages)
  res.json(messages);
}

const create = async (req, res) => {
  const message = await MessageService.createMessage(req.body);
  res.json(message);
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