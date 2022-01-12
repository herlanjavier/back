"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../db/connection"));
var Producto = connection_1.default.define('Producto', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    laboratorio: {
        type: sequelize_1.DataTypes.STRING,
    },
    medida: {
        type: sequelize_1.DataTypes.STRING,
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    precio: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    fecha_ven: {
        type: sequelize_1.DataTypes.DATE,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
exports.default = Producto;
//# sourceMappingURL=producto.js.map