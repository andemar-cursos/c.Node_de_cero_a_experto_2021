const {response} = require('express');


const getUsuarios = (req, res = response) => {
    res.json('get api');
}

const putUsuarios = (req, res = response) => {
    res.json('put api');
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