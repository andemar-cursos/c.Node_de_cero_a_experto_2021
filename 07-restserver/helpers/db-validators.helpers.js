const { Categoria } = require('../models');
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

// id mongo existe
const existeUsuarioById = async(id) => {
    
    const existe = await Usuario.findById(id);
    if(!existe) throw new Error(`El id ${id} no existe`);

}


// id mongo categoria existe
const existeCategoriaById = async(id) => {

    const existe = await Categoria.findById(id);
    if(!existe) throw new Error(`El id ${id} no existe`);
}


module.exports = {
    esRoleValido,
    correoExiste,
    existeUsuarioById,
    existeCategoriaById,
}