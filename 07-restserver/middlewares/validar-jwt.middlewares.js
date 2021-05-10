const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {

    const token = req.header('x-token');

    if(!token) return res.status(401).json({msg: "No existe token"})

    try {
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        
        next();
    } catch (error) {
        
    }
}



module.exports = {
    validarJWT,
}