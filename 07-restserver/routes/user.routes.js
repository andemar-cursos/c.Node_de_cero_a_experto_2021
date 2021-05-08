const {Router} = require('express');
const { getUsuarios, putUsuarios, postUsuarios, deleteUsuarios } = require('../controllers/usuario.controller');


const router = Router();

router.get('/', getUsuarios);

router.put('/', putUsuarios);

router.post('/', postUsuarios);

router.delete('/', deleteUsuarios);

module.exports = router;