"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../db/connection"));
var Reserva = connection_1.default.define('Reserva', {
    id_medicamentos: {
        type: sequelize_1.DataTypes.TEXT,
    },
    cantidad: {
        type: sequelize_1.DataTypes.TEXT,
    },
    nombre: {
        type: sequelize_1.DataTypes.TEXT,
    },
    paterno: {
        type: sequelize_1.DataTypes.TEXT,
    },
    ci: {
        type: sequelize_1.DataTypes.TEXT,
    },
    entregado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
exports.default = Reserva;
//# sourceMappingURL=reserva.js.map