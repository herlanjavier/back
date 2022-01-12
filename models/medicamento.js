"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../db/connection"));
var Medicamento = connection_1.default.define('Medicamento', {
    nombre_generico: {
        type: sequelize_1.DataTypes.STRING,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    laboratorio: {
        type: sequelize_1.DataTypes.STRING,
    },
    medida: {
        type: sequelize_1.DataTypes.STRING,
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING,
    },
    precio: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    item: {
        type: sequelize_1.DataTypes.STRING,
    },
    dosis: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    cantidad: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    fecha_vencimiento: {
        type: sequelize_1.DataTypes.DATE,
    },
});
exports.default = Medicamento;
//# sourceMappingURL=medicamento.js.map