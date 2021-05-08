const Role = require('../models/role.model');
const Usuario = require('../models/usuario.model');

const esRoleValido = async(rol = "") => {
    const existe = await Role.findOne({rol});
    if(!existe) throw new Error(`El rol ${rol} no existe`);
}

// Correo existe
const correoExiste = async(correo = "") => {
    
    const existe = await Usuario.findOne({correo});
    if(existe) throw new Error(`El correo ${correo} ya esta registrado`)

}


module.exports = {
    esRoleValido,
    correoExiste,
}