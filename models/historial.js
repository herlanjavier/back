"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../db/connection"));
var Venta = connection_1.default.define('Venta', {
    fecha_venta: {
        type: sequelize_1.DataTypes.DATE,
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    costo: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
exports.default = Venta;
//# sourceMappingURL=historial.js.map