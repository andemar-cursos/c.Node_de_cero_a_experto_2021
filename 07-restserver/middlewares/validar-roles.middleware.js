const esAdminRole = (req, res, next) => {

    if(!req.usuario) return res.status(500).json({msg: "Se quiere verificar el role sin validar el token primero"});
    
    const {rol, nombre} = req.usuario;
    
    if(rol !== 'ADMIN_ROLE') return res.status(401).json({msg: "No tienes permiso para ejecutar este endpoint"});
    
    next();
}

const tieneRol = (...roles) => {
    
    return (req, res, next) => {
        
        if(!req.usuario) return res.status(500).json({msg: "Se quiere verificar el role sin validar el token primero"});

        if(!roles.includes(req.usuario.rol)) return res.status(401).json({msg: `El servicio requiere uno de estos roles: ${roles}`});
        
        next();
    }

}


module.exports = {
    esAdminRole,
    tieneRol
}