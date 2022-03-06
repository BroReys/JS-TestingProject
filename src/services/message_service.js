import MessageRepository from '../repositories/message_repository'

const findAll = MessageRepository.findAll();

const createMessage = async (message) => {
  return await MessageRepository.createMessage(message);
}

const deleteMessage = async (message) => {
  await MessageRepository.deleteMessage(message);
}

export default {
  findAll,
  createMessage,
  deleteMessage
}