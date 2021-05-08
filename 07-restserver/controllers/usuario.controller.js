const {response} = require('express');
const bcryptjs = require("bcryptjs");
const Usuario = require('../models/usuario.model');


const getUsuarios = async(req, res = response) => {

    // const {q, name = "No name", key} = req.query;

    // Se debe validar que sean numeros antes de hacer el query
    const {limite = 5, desde = 0} = req.query;
    const query = {estado: true};

    // Obtener usuarios
    const q1 = await Usuario.find(query)
        .limit(Number(limite))
        .skip(Number(desde));

    // Obtener total de registros
    const q2 = await Usuario.countDocuments(query);

    // Lista de promesas a ejecutar
    const [usuarios, total] = await Promise.all([q1,q2]);

    res.json({
        total,
        usuarios
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

    res.json(usuario);
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