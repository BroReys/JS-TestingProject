import Message from "../models/message";

const findAll = async () => {
  const messages = await Message.findAll();
  return messages;
}

const createMessage = async (message) => {
  await Message.create(message);
}

const deleteMessage = async (message) => {
  await Message.destroy({
    where: {
      id: message.id
    }
  })
}

export default {
  findAll,
  createMessage,
  deleteMessage
}