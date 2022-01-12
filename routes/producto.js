"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productos_1 = require("../controllers/productos");
var router = express_1.Router();
router.get('/', productos_1.getProductos);
router.get('/:id', productos_1.getProducto);
router.post('/', productos_1.postProducto);
router.put('/:id', productos_1.putProducto);
router.delete('/:id', productos_1.deleteProducto);
exports.default = router;
//# sourceMappingURL=producto.js.map