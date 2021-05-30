const {Router} = require('express');
const {check} = require('express-validator');
const { login, googleSignIn } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validar-campos.middlewares');

const router = Router();

/**
 * {{url}}/api/categorias
 */

// Get All - publico
router.get('/', (req, res) => {
    res.json('get');
});

// Get by id - public
router.get('/:id', (req, res) => {
    res.json('get - id');
});

// Crear categoria - privado
router.post('/', (req, res) => {
    res.json('Create');
});


// Actualizar registro - privado
router.put('/:id', (req, res) => {
    res.json('Update');
});


// Delete - Admin
router.delete('/:id', (req, res) => {
    res.json('Delete');
});




module.exports = router;