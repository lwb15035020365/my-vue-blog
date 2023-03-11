import sequelize from "./db";

sequelize.sync({ alter: true }).then(() => {
  console.log('所有模型同步完成');
})

