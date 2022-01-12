"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMedicamento = exports.updateMedicamento = exports.postMedicamento = exports.getMedicamento = exports.getMedicamentos = void 0;
var medicamento_1 = __importDefault(require("../models/medicamento"));
exports.getMedicamentos = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var medicamentos;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, medicamento_1.default.findAll({ where: { estado: 0 } })];
            case 1:
                medicamentos = _a.sent();
                res.json(medicamentos);
                return [2 /*return*/];
        }
    });
}); };
exports.getMedicamento = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, medicamento;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, medicamento_1.default.findByPk(id)];
            case 1:
                medicamento = _a.sent();
                if (medicamento) {
                    res.json(medicamento);
                }
                else {
                    res.status(404).json({
                        msg: "No existe medicamento con el id " + id,
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.postMedicamento = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, medicamento, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, medicamento_1.default.build(body)];
            case 2:
                medicamento = _a.sent();
                medicamento.setDataValue('estado', 0);
                return [4 /*yield*/, medicamento.save()];
            case 3:
                _a.sent();
                res.json(medicamento);
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.log(error_1);
                res.status(500).json({
                    msg: 'Hable con el administrador',
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.updateMedicamento = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, body, medicamento, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                body = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, medicamento_1.default.findByPk(id)];
            case 2:
                medicamento = _a.sent();
                if (!medicamento) {
                    return [2 /*return*/, res.status(404).json({
                            msg: 'No existe un medicamento con el id ' + id,
                        })];
                }
                return [4 /*yield*/, medicamento.update(body)];
            case 3:
                _a.sent();
                res.json(medicamento);
                return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                console.log(error_2);
                res.status(500).json({
                    msg: 'Hable con el administrador',
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deleteMedicamento = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, medicamento;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, medicamento_1.default.findByPk(id)];
            case 1:
                medicamento = _a.sent();
                if (!medicamento) {
                    return [2 /*return*/, res.status(404).json({
                            msg: 'No existe un medicamento con el id ' + id,
                        })];
                }
                return [4 /*yield*/, medicamento.update({ estado: true })];
            case 2:
                _a.sent();
                res.json(medicamento);
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=medicamentos.js.map