import { Sequelize } from 'sequelize-typescript';


export const sequelize = new Sequelize({
    database: 'camera',
    dialect: 'mysql',
    username: 'root',
    password: 'root',
  });

  sequelize.authenticate()
  .then(() => {
    console.log('Connected to database successfully!');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });