"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./routes/router");
const app = (0, express_1.default)();
const port = 3003;
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', router_1.apiRoutes);
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
