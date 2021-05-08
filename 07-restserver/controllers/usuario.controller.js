const {response} = require('express');
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

const putUsuarios = async(req, res = response) => {
    const {id} = req.params;
    const {_id, password, google, correo, ...data} = req.body;

    if( password ) {
        // Encriptar pass
        const salt = bcryptjs.genSaltSync();
        data.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, data);

    res.json({
        usuario,
    });
}

const postUsuarios = async(req, res = response) => {

    
    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

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