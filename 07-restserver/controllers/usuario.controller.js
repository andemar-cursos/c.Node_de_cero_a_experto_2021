const {response} = require('express');
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

    const body = req.body;
    const usuario = new Usuario(body);

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