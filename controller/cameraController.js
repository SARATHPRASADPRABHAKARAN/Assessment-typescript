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
exports.camDelete = exports.camgetall = exports.camGetOne = exports.camUpdate = exports.camCreate = void 0;
const cameras_1 = require("../models/cameras");
const cameraNetworks_1 = require("../models/cameraNetworks");
const camCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.body.name;
        const description = req.body.description;
        const url = req.body.url;
        const payload = { name, description, url };
        console.log('sssfss', payload);
        const create = yield cameras_1.Camera.create(payload);
        res.status(200).json({ data: create });
    }
    catch (error) {
        console.log(error);
    }
});
exports.camCreate = camCreate;
const camUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const name = req.body.name;
        const description = req.body.description;
        const url = req.body.url;
        console.log(id);
        const payload = { name: name, description: description, url: url };
        const create = yield cameras_1.Camera.update(payload, { where: { id: id } });
        res.status(200).json({ data: create });
    }
    catch (error) {
        console.log(error);
    }
});
exports.camUpdate = camUpdate;
const camGetOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const create = yield cameras_1.Camera.findOne({ where: { id: id } });
        res.status(200).json({ data: create });
    }
    catch (error) {
        console.log(error);
    }
});
exports.camGetOne = camGetOne;
const camgetall = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const create = yield cameras_1.Camera.findAll();
        res.status(200).json({ data: create });
    }
    catch (error) {
        console.log(error);
    }
});
exports.camgetall = camgetall;
const camDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const create = yield cameras_1.Camera.update({ deletedAt: new Date() }, { where: { id: id } });
        console.log(create);
        const network = yield cameraNetworks_1.CameraNetworks.update({ deletedAt: new Date() }, { where: { cameras: id } });
        res.status(200).json({ data: "deleted" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.camDelete = camDelete;
