import express from 'express'
import mongoose from 'mongoose';
class Server {

    constructor(){
        this.app= express();
        this.port=8080;
        this.middlewares()
        this.routes()
        this.dbConection()
    }

 // Middlewares 
    
    middlewares(){

        this.app.use(express.json())

 }

 // conexion BD

    async dbConection (){
try {
    await mongoose.connect("mongodb+srv://ricardocg21:nokia3220@todolistcluster.vquhm4o.mongodb.net/")
    console.log("conexion exitosa")
} catch (error) {
    console.log("no se pudo conectar a la base de datos")
}
    }

 // rutas de la aplicacion
    routes(){
        this.app.get("/", (req,res)=>{
            res.json({
                id:1,
                name:"pasear a neron"
            })
            })
            
        this.app.post("/", (req,res)=>{
            res.send("hola mundo")
                })

        this.app.put("/", (req,res)=>{
            res.send("hola mundo")
                    })
     }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(` servidor ${this.port} en linea `);
        })
    }


}

export default Server