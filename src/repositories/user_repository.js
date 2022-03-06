import User from "../models/user";

const findAll = async () => {
  const users = await User.findAll();
  return users;
}

const createUser = async (user) => {
  await User.create(user);
}

const deleteUser = async (user) => {
  await User.destroy({
        where: {
          id: user.id
        }
      }
  )
}

export default {
  findAll,
  createUser,
  deleteUser
}