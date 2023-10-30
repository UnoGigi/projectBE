const mongoose = require('mongoose')

const UtentiSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },

    nome:{
        type: String,
        required: true
    },

    cognome:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true,
        min: 8
    },

    indirizzo:{
        type: String,
        required: true
    },

    telefono:{
        type: Number,
        required: true
    },

    imgprofilo:{
        type: String
    }
}, {timestamps: true, strict: true})

module.exports = mongoose.model('UtentiModel', UtentiSchema, 'utenti')