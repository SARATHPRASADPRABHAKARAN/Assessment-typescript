"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.allNetwork = exports.getOneNetwork = exports.netWorkUpdate = exports.createNetwork = void 0;
const cameraNetworks_1 = require("../models/cameraNetworks");
const createNetwork = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.body.name;
        const descriptions = req.body.descriptions;
        const cameras = req.body.cameras;
        const payload = { name, descriptions, cameras };
        const create = yield cameraNetworks_1.CameraNetworks.create(payload);
        res.status(200).json({ data: create });
    }
    catch (error) {
        console.log(error);
    }
});
exports.createNetwork = createNetwork;
const netWorkUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const name = req.body.name;
        const descriptions = req.body.descriptions;
        const cameras = req.body.cameras;
        const payload = { name, descriptions, cameras };
        const create = yield cameraNetworks_1.CameraNetworks.update(payload, { where: { id: id } });
        res.status(200).json({ data: create });
    }
    catch (error) {
        console.log(error);
    }
});
exports.netWorkUpdate = netWorkUpdate;
const getOneNetwork = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const create = yield cameraNetworks_1.CameraNetworks.findOne({ where: { id: id } });
        res.status(200).json({ data: create });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getOneNetwork = getOneNetwork;
const allNetwork = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const create = yield cameraNetworks_1.CameraNetworks.findAll();
        res.status(200).json({ data: create });
    }
    catch (error) {
        console.log(error);
    }
});
exports.allNetwork = allNetwork;
const Delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const create = yield cameraNetworks_1.CameraNetworks.update({ deletedAt: new Date() }, { where: { id: id } });
        res.status(200).json({ data: "network deleted" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.Delete = Delete;
