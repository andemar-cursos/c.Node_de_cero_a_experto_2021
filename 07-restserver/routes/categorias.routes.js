const {Router} = require('express');
const {check} = require('express-validator');
const {existeCategoriaById} = require('../helpers/db-validators.helpers');
const { crearCategoria, obtenerCategorias, obtenerCategoria, actualizarCategoria, borrarCategoria } = require('../controllers/categorias.controller');
const {validarCampos, validarJWT, tieneRol} = require('../middlewares');

const router = Router();

/**
 * {{url}}/api/categorias
 */

// Get All - publico
router.get('/', [], obtenerCategorias);

// Get by id - public
router.get('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos,
], obtenerCategoria);

// Crear categoria - privado
router.post('/', 
    [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos,
    ], crearCategoria);


// Actualizar registro - privado
router.put('/:id', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos,
], actualizarCategoria);


// Delete - Admin
router.delete('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarJWT,
    tieneRol('ADMIN_ROLE'),
    validarCampos,
] , borrarCategoria);


module.exports = router;