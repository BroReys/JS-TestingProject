import Message from "../models/message";

const findAll = async () => {
  const messages = await Message.findAll();
  console.log("messages Repo result: " + messages)
  return messages;
}

const createMessage = async (message) => {
  await Message.create(message);
  console.log("message creation Repo result: " + message);

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