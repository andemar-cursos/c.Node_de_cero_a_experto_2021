const {Router} = require('express');
const {check} = require('express-validator');
const { login, googleSignIn } = require('../controllers/auth.controller');
const { crearCategoria } = require('../controllers/categorias.controller');
const {validarCampos, validarJWT} = require('../middlewares');

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
router.post('/', 
    [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos,
    ], crearCategoria);


// Actualizar registro - privado
router.put('/:id', (req, res) => {
    res.json('Update');
});


// Delete - Admin
router.delete('/:id', (req, res) => {
    res.json('Delete');
});




module.exports = router;