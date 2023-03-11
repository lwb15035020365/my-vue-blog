import { DataTypes } from "sequelize";
import sequelize from "./index";

const Blog = sequelize.define("Blog", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
  views: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // tags: {
  //   type: DataTypes.
  // }
},
  {
    createdAt: true,
    updatedAt: true,
    paranoid: true,
  })