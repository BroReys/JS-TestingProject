import MessageService from '../services/message_service'

const findAll = async (req, res) => {
  const messages = await MessageService.findAll;
  console.log("this is message array: " + messages)
  res.json(messages);
}

const create = async (req, res) => {
  const message = await MessageService.createMessage(req.body);
  console.log(message)
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