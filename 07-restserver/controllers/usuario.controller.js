const {response} = require('express');


const getUsuarios = (req, res = response) => {

    const {q, name = "No name", key} = req.query;

    res.json({
        q,
        name,
        key
    });
}

const putUsuarios = (req, res = response) => {
    const id = req.params.id;

    res.json(`put api - ${id}`);
}

const postUsuarios = (req, res = response) => {

    const body = req.body;
    res.json(body);
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