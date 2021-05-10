const validarCampos = require('../middlewares/validar-campos.middlewares');
const validarJWT = require('../middlewares/validar-jwt.middlewares');
const validaRoles = require('../middlewares/validar-roles.middleware');

module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validaRoles,
}