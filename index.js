const exp = require('express');

const modelProducto = require('./src/models/producto');
const modeloUsuario = require('./src/models/usuarios');


const app = exp();

app.use(exp.urlencoded({extended:false}))
app.use(exp.json())


app.get('/', (req,res)=>{
    res.write("Bienvenido")
    res.end();
})

app.get('/productos', async (req,res)=>{
    let listaProductos = await modelProducto.find({});
    console.log(listaProductos)
    if (listaProductos){
        res.json(listaProductos)
    }else{
        res.json({"error":"Hub un error"})
    }
    
})

app.get('/productos/:nombre',async (req,res)=>{
    let listaProductos = await modelProducto.findOne({"nombre":req.params.nombre})
    if ( listaProductos)
    res.status(200).json(listaProductos)
else
res.status(404).json({"error":"Producto no encontrado"})
})


app.post('/productos', async (req,res)=>{
    const crearProducto = {
        referencia: req.body.referencia,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        imagen: req.body.imagen,
        habilitado:true,
    };
    
    let Insercion= await modelProducto.create(crearProducto);
    if(Insercion)
    res.status(200).json({"mensaje":"Registro exitoso"})
else
res.status(404).json({"mensaje":"Se presento un error"})
})


app.put('/productos/:referencia', async (req,res)=>{
    const editarProducto = {
        referencia: req.params.referencia,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        imagen: req.body.imagen,
        habilitado:true,
    }

    let Actualizacion= await modelProducto.findOneAndUpdate({referencia:req.params.referencia},editarProducto)
    if(Actualizacion)
        res.status(200).json({"mensaje":"Actualizacion exitosa"})
    else
        res.status(404).json({"mensaje":"Se presento un error"})

})


app.delete('/productos/:id', async (req,res)=>{
    console.log(req.params.id, req.body.referencia)
    let eliminacion= await modelProducto.findOneAndDelete({referencia:req.params.id})
    if (eliminacion)
        res.status(200).json({"mensaje":"Eliminacion exitosa"})
    else
        res.status(404),json({"mensaje":"Se presento un error"})
})

app.listen(process.env.PORT);

