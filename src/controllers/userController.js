import UserService from '../services/user_service'

const findAll = async (req, res) => {
  const users = await UserService.findAll;
  console.log("this is user array " + users);
  res.json(users);
}

const create = async (req, res, next) => {
  const user = req.body;
  try {
    await UserService.createUser(user)
    // other service call (or same service, different function can go here)
    // i.e. - await generateUserPreview()
    res.sendStatus(201)
    next()
  } catch (e) {
    console.log(e.message)
    res.sendStatus(400)
  }
}

const userDelete = async (req, res, next) => {
  try {
    await UserService.deleteUser(req.body);
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
  userDelete
}