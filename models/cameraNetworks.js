"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraNetworks = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
class CameraNetworks extends sequelize_1.Model {
}
exports.CameraNetworks = CameraNetworks;
CameraNetworks.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    descriptions: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    cameras: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    deletedAt: {
        type: sequelize_1.DataTypes.DATE
    },
}, {
    sequelize: sequelize_2.sequelize,
    tableName: 'cameranetworks',
});
sequelize_2.sequelize.sync();
