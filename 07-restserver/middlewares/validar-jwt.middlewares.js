const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario.model');

const validarJWT = async(req, res, next) => {

    const token = req.header('x-token');

    if(!token) return res.status(401).json({msg: "No existe token"})

    try {
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);


        const usuarioAuth = await Usuario.findById(uid);
        req.usuarioAuth = usuarioAuth;

        // Verificar si el usuario existe y esta habilitado.
        if(!usuario || !usuario.estado) return res.status(401).json({msg: "Token no valido"});

        next();
    } catch (error) {
        
    }
}



module.exports = {
    validarJWT,
}