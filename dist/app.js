"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//app, sera la app servidor
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
//settings
app.set('port', process.env.PORT || 5000); //Si existe un puerto tomalo o usa el 5000
//middlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json()); //para que las peticiones lleguen en format json
//routes
app.use('/api', routes_1.default);
//this folder for this application will be used store public files 
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads'))); //resolve devuelve la ruta de uploads para que sepa donde se almacenara
exports.default = app;
