const mongoose = require("../config/connection");

// los nombres y tipos deben coincidir con los datos en la bd que ya se encuentran almacenados
const schemaProducto = new mongoose.Schema({
    referencia: {
        type: Number, 
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    precio:{
        type: Number,
        required: true
    },
    descripcion:{
        type: String,
        required: [true,'La descripcion es obligatoria']
    },
    stock:{
        type: Number,
        default: [0, 'el stock por defecto es cero'],
        min: [0, 'El stock por defecto es cero']
    },
    imagen: {
        type: String,
        required: [true, 'no existe imagen o ruta de imagen por defecto']
    },
    habilitado: {
        type: Boolean,
        default: true
    }
});

const modeloProducto = mongoose.model("productos", schemaProducto);

module.exports = modeloProducto;