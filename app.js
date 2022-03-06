import express from 'express';
import 'dotenv/config';
import sequelize from "./src/config/database";
import UserRouter from "./src/routes/userRouter";
import MessageRouter from "./src/routes/meassageRouter";
import User from "./src/models/user";
import Message from "./src/models/message";

const app = express();

User.hasMany(Message, {onDelete: 'CASCADE'});

Message.belongsTo(User, {foreignKey: "userId"});

sequelize.sync()
.then(result => {
  console.log(result)
});

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(UserRouter);
app.use(MessageRouter);

app.listen(process.env.PORT);
