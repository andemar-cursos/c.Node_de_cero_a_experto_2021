const {response} = require('express');
const {validationResult} = require('express-validator');
const bcryptjs = require("bcryptjs");
const Usuario = require('../models/usuario.model');


const getUsuarios = (req, res = response) => {

    const {q, name = "No name", key} = req.query;

    res.json({
        q,
        name,
        key
    });
}

const putUsuarios = (req, res = response) => {
    const id = req.params.id;

    res.json(`put api - ${id}`);
}

const postUsuarios = async(req, res = response) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json(errors);

    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    // Correo existe
    const existeEmail = await Usuario.findOne({correo});
    if( existeEmail) return res.status(400).json({
        msg: 'El correo ya esta registrado',
    });

    // Encriptar pass
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    // Save
    await usuario.save();

    res.json(usuario);
}

const deleteUsuarios = (req, res = response) => {
    res.json('delete api');
}


module.exports = {
    getUsuarios,
    putUsuarios,
    postUsuarios,
    deleteUsuarios,
}