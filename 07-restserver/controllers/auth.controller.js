const { response } = require('express');
const bcryptjs = require("bcryptjs");
const Usuario = require('../models/usuario.model');
const { generateJWT } = require('../helpers/jwt.helpers');
const { googleVerify } = require('../helpers/google.helpers');


const login = async(req, res = response) => {

    const {correo, password} = req.body;

    try {
        // Verificar email existe
        const usuario = await Usuario.findOne({correo});
        if(!usuario) return res.status(400).json({msg:'Usuario/password no validos'});
        
        // Usuario activo
        if(!usuario.estado) return res.status(400).json({msg:'Usuario no habilitado'})
        
        // verify password
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if(!validPassword) return res.status(400).json({msg:'Usuario/password no validos'});

        // Generar JWT
        const token = await generateJWT(usuario.id);

        res.json({
            usuario,
            token,
        });

    } catch (error) {
        return res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

};


const googleSignIn = async(req, res=response) => {

    const { id_token } = req.body;

    try {
        
        const userg = await googleVerify(id_token);

        res.json({
            msg: userg
        });
        
    } catch (error) {
        res.status(400).json({
            msg: 'Token no valido'
        })
    }

}




module.exports = {
    login,
    googleSignIn
}
