"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ventas_1 = require("../controllers/ventas");
var router = express_1.Router();
router.get('/', ventas_1.getVentas);
router.get('/:id_venta', ventas_1.getVenta);
router.post('/', ventas_1.postVenta);
router.put('/:id_venta', ventas_1.putVenta);
router.delete('/:id_venta', ventas_1.deleteVenta);
exports.default = router;
//# sourceMappingURL=venta.js.map