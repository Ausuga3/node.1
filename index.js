const exp = require('express');

const modelProducto = require('./src/models/producto')

const app = exp();

app.get('/', (req,res)=>{
    res.write("Bienvenido")
    res.end();
})

app.get('/productos', async (req,res)=>{
    let listaProductos = await modelProducto.find({});
    console.log(listaProductos)
})

app.get('/productos/:nombre',async (req,res)=>{
    let listaProductos = await modelProducto.find({"nombre":req.params.nombre})
    console.log(listaProductos)
})


app.post('/productos', async (req,res)=>{
    const crearProductos = new modelProducto({
        "nombre":"chanclas",
        "referencia":5,
        "precio":5000
    })
    crearProductos.save()
    console.log("Exitoso")
})


app.listen(9898);