const mongoose = require("../config/connection");


const schemaUsuario = new mongoose.Schema({
    ref:{
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    fechaNacimiento: {
        type: Date,
        required: true,
    },
    esEstudiante: {
        type: Boolean,
        required: true,
    },
    saldo: {
        Type: mongoose.Types.Decimal128,
        
    },
    historialVentas:{
        type: Array,
    },
})

const modeloUsuario = mongoose.model("usuarios", schemaUsuario);
module.exports = modeloUsuario