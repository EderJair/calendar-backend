const express = require('express');
const { validationResult } = require('express-validator');


const crearUsuario = (req, res = express.response)=>{

    const {name, email, password} = req.body;

    res.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    })
}

const  loginUsuario = (req, res = express.response) => {

    const { name, email, password } = req.body;


    res.status(201).json({
        ok: true,
        msg: 'login',
        name,
        email,
        password
    })
    
}


const revalidarToken = (req, res = express.response) => {
    res.json({
        ok: true,
        msg: 'renew'
    })
    
}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}