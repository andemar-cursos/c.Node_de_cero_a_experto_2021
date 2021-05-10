const {Router} = require('express');
const {check} = require('express-validator');
const { getUsuarios, putUsuarios, postUsuarios, deleteUsuarios } = require('../controllers/usuario.controller');
const { esRoleValido, correoExiste, existeUsuarioById } = require('../helpers/db-validators.helpers');
const { validarCampos } = require('../middlewares/validar-campos.middlewares');
const { validarJWT } = require('../middlewares/validar-jwt.middlewares');
const { esAdminRole, tieneRol } = require('../middlewares/validar-roles.middleware');

const router = Router();

router.get('/', getUsuarios);

router.put('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioById),
    check('rol').custom(esRoleValido),
    validarCampos,
], putUsuarios);

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener mas de 6 caracteres').isLength({min: 6}),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom(correoExiste),
    // check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(esRoleValido),
    validarCampos,
], postUsuarios);

router.delete('/:id', [
    validarJWT,
    // esAdminRole,
    tieneRol('ADMIN_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioById),
    validarCampos,
], deleteUsuarios);

module.exports = router;