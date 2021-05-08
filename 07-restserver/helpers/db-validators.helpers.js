const Role = require('../models/role.model');

const esRoleValido = async(rol = "") => {
    const existe = await Role.findOne({rol});
    if(!existe) throw new Error(`El rol ${rol} no existe`);
}


module.exports = {
    esRoleValido,
}