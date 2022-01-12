"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var reservas_1 = require("../controllers/reservas");
var router = express_1.Router();
router.get('/', reservas_1.getReservas);
router.get('/:id', reservas_1.getReserva);
router.post('/', reservas_1.postReserva);
router.put('/:id', reservas_1.putReserva);
router.delete('/:id', reservas_1.deleteReserva);
exports.default = router;
//# sourceMappingURL=reserva.js.map