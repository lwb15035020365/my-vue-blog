import { DataTypes } from "sequelize";
import sequelize from "./index";


export default sequelize.define("EveryDay",
  {
    content: {
      type: DataTypes.STRING(1234),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    createdAt: true,
    updatedAt: false,
    paranoid: true,
  })