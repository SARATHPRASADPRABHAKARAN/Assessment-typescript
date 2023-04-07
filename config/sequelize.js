"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    database: 'camera',
    dialect: 'mysql',
    username: 'root',
    password: 'root',
});
exports.sequelize.authenticate()
    .then(() => {
    console.log('Connected to database successfully!');
})
    .catch((error) => {
    console.error('Unable to connect to the database:', error);
});
