const {Router} = require('express');
const {check} = require('express-validator');
const { getUsuarios, putUsuarios, postUsuarios, deleteUsuarios } = require('../controllers/usuario.controller');


const router = Router();

router.get('/', getUsuarios);

router.put('/:id', putUsuarios);

router.post('/',[
    check('correo', 'El correo no es válido').isEmail(),
], postUsuarios);

router.delete('/', deleteUsuarios);

module.exports = router;