"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
class Camera extends sequelize_1.Model {
}
exports.Camera = Camera;
Camera.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    url: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    deletedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    sequelize: sequelize_2.sequelize,
    tableName: 'cameras',
});
sequelize_2.sequelize.sync();
