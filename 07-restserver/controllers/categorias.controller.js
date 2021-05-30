const { Categoria } = require('../models');


const obtenerCategorias = async(req, res) => {

    const {limite = 5, desde = 0} = req.query;
    const query = { estado: true};


    const q1 = Categoria.find(query)
        .populate('usuario', 'nombre')
        .limit(Number(limite))
        .skip(Number(desde));

    const q2 = Categoria.countDocuments(query);

    const [categorias, total] = await Promise.all([q1, q2]);

    res.json({
        total,
        categorias
    });
    
}

const obtenerCategoria = async(req, res) => {

    const {id} = req.params;

    const categoria = await Categoria
                        .findById(id)
                        .populate('usuario');

    res.json({
        categoria,
    });

}

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

const actualizarCategoria = async(req, res) => {

    const {id} = req.params;
    let {nombre} = req.body;
    const usuario = req.usuario._id;

    const existe = await Categoria.findOne({nombre});

    if(existe) {
        return res.status(400).json({
            msg: `La categoria ${existe.nombre}, ya existe`
        });
    }

    nombre = nombre.toUpperCase();
    const data = {nombre, usuario};

    const categoria = await Categoria.findByIdAndUpdate(id, data, {new: true});

    res.json(categoria);
}

const borrarCategoria = async(req, res) => {

    const {id} = req.params;

    const data = {estado: false};

    const categoria = await Categoria.findByIdAndUpdate(id, data, {new: true});

    res.json(categoria);
    
}



module.exports = {
    obtenerCategorias,
    obtenerCategoria,
    crearCategoria,
    actualizarCategoria,
    borrarCategoria,
}
