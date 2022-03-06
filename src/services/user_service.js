import UserRepository from '../repositories/user_repository'

const findAll = UserRepository.findAll();

const createUser = async (user) => {
  return await UserRepository.createUser(user);
}

const deleteUser = async (user) => {
  await UserRepository.deleteUser(user);
}

export default {
  findAll,
  createUser,
  deleteUser
}