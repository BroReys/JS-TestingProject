import Sequelize from "sequelize";
import sequelize from "../config/database";

const User = sequelize.define('user', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [["admin", "user"]]
        }
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false
      },
      registrationLink: {
        type: Sequelize.STRING(24),
        validate: {
          is: /^[a-z A-Z0-9]+$/i
        },
        unique: true,
        allowNull: false,
      }
    }, {timestamps: false}
);

export default User;