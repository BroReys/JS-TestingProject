import MessageRepository from '../repositories/message_repository'

// const findAll = async () => {
//   console.log("this is msgService findAll step");
//   await MessageRepository.findAll();
// }

const findAll = async () => {
  console.log("this is msgService findall step");
  return await MessageRepository.findAll();
}

const createMessage = async (message) => {
  console.log("this is msgService creation step" + message);
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