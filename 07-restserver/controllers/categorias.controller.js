const { Categoria } = require('../models');


const crearCategoria = async(req, res) => {

    const nombre = req.body.nombre.toUpperCase();

    const categoriaDB = await Categoria.findOne({nombre});

    if(categoriaDB) {
        return res.status(400).json({
            msg: `La categoria ${categoriaDB.nombre}, ya existe`,
        });
    }

    // Generate Data to save
    const data = {
        nombre,
        usuario: req.usuario._id,
    };

    const categoria = new Categoria(data);

    // Save
    await categoria.save();

    res.status(201).json(categoria);
}


module.exports = {
    crearCategoria,
}
