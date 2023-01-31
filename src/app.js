import express  from "express";
import mongoose from "mongoose";
import productRouter  from "./routes/product.router.js";

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static("public"));

//const server = app.listen(PORT, ()=>{console.log(`servidor levantado con exito${PORT}`)});
app.get("/", (req, res)=>{
    res.send("MY APP");
});

app.listen(PORT, () => {
    console.log(`Iniciada aplicacion en puerto ${PORT}`);
  });

mongoose.set('strictQuery',false)
mongoose.connect("mongodb+srv://Gonza81:Lucia@cluster0.zalvman.mongodb.net/ecommerce?retryWrites=true&w=majority",

(error)=>{
    if(error){
        console.log("error de conexion a mongo");
        process.exit();
    }else{ 
        console.log("servidor mongo levantado con exito");
}});

app.use("/products",productRouter)


