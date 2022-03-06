import Sequelize from "sequelize";
import sequelize from "../config/database";

const Message = sequelize.define('message', {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

export default Message;