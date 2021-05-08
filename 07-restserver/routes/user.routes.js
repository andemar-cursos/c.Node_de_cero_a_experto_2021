const {Router} = require('express');
const {check} = require('express-validator');
const { getUsuarios, putUsuarios, postUsuarios, deleteUsuarios } = require('../controllers/usuario.controller');
const { esRoleValido } = require('../helpers/db-validators.helpers');
const { validarCampos } = require('../middlewares/validar-campos.middlewares');

const router = Router();

router.get('/', getUsuarios);

router.put('/:id', putUsuarios);

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener mas de 6 caracteres').isLength({min: 6}),
    check('correo', 'El correo no es válido').isEmail(),
    // check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(esRoleValido),
    validarCampos,
], postUsuarios);

router.delete('/', deleteUsuarios);

module.exports = router;