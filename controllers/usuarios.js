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
exports.login = exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
var usuario_1 = __importDefault(require("../models/usuario"));
//obtener todos los usuarios
exports.getUsuarios = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuarios;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, usuario_1.default.findAll({ where: { estado: 0 } })];
            case 1:
                usuarios = _a.sent();
                res.json(usuarios);
                return [2 /*return*/];
        }
    });
}); };
//obtener un  usuarios
exports.getUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, usuario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, usuario_1.default.findByPk(id)];
            case 1:
                usuario = _a.sent();
                if (usuario) {
                    res.json({ usuario: usuario });
                }
                else {
                    res.status(404).json({
                        msg: "No existe un usuario con el id " + id,
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
//Crear un  usuarios
exports.postUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, existeEmail, usuario, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, usuario_1.default.findOne({
                        where: {
                            email: body.email,
                            password: body.password,
                        },
                    })];
            case 2:
                existeEmail = _a.sent();
                if (existeEmail) {
                    return [2 /*return*/, res.status(400).json({
                            msg: 'Ya existe un usuario con el email ' + body.email,
                        })];
                }
                return [4 /*yield*/, usuario_1.default.build(body)];
            case 3:
                usuario = _a.sent();
                usuario.setDataValue('estado', 0);
                return [4 /*yield*/, usuario.save()];
            case 4:
                _a.sent();
                res.json(usuario);
                return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                res.status(500).json({
                    msg: 'Hable con el administrador',
                });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
//  Actualizar un  usuarios
exports.putUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, body, usuario, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                body = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, usuario_1.default.findByPk(id)];
            case 2:
                usuario = _a.sent();
                if (!usuario) {
                    return [2 /*return*/, res.status(404).json({
                            msg: 'No existe un usuario con el id ' + id,
                        })];
                }
                return [4 /*yield*/, usuario.update(body)];
            case 3:
                _a.sent();
                res.json(usuario);
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
//  Eliminar  un  usuarios
exports.deleteUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, usuario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, usuario_1.default.findByPk(id)];
            case 1:
                usuario = _a.sent();
                if (!usuario) {
                    return [2 /*return*/, res.status(404).json({
                            msg: 'No existe un usuario con el id ' + id,
                        })];
                }
                return [4 /*yield*/, usuario.update({ estado: true })];
            case 2:
                _a.sent();
                res.json(usuario);
                return [2 /*return*/];
        }
    });
}); };
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nombre, password, user;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, nombre = _a.nombre, password = _a.password;
                return [4 /*yield*/, usuario_1.default.findOne({ where: { nombre: nombre, password: password } })];
            case 1:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, res.status(404).json({
                            msg: 'No existe un usuario con nombre: ' + nombre,
                        })];
                }
                res.json(user);
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=usuarios.js.map