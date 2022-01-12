"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var medicamentos_1 = require("../controllers/medicamentos");
var router = express_1.Router();
router.get('/', medicamentos_1.getMedicamentos);
router.get('/:id', medicamentos_1.getMedicamento);
router.post('/', medicamentos_1.postMedicamento);
router.put('/:id', medicamentos_1.updateMedicamento);
router.delete('/:id', medicamentos_1.deleteMedicamento);
exports.default = router;
//# sourceMappingURL=medicamento.js.map