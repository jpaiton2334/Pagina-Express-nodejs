//requeriendo express
const express = require("express");
//ejecutando express
const app = express();



const port = process.env.PORT || 3000;

//motor de plantillas
app.set('view engine', 'ejs');
//donde estaran nuetras vistas
app.set('views', __dirname+'/vistas');





//carpeta public creando un titulo dinamico
app.use(express.static(__dirname + "/public"))  

//respondiendo solicitud con get
app.get("/", (req, res) => {
  res.render("index", {titulo : "Sobre mi"});
});

//respondiendo desde la pagina de servicios(debe ser el metodo render)
app.get("/servicios", (req, res) => {
    res.render("servicios",{tituloServicios: "Servicios"});
  });


  //pagina de error
  app.use((req, res, next) => {
    // res.status(404).send("Sorry cant find that!");
    res.status(404).render("404",{
        titulo: "404",
        descripcion: "error descripcion del error"
    });
  });
  
 //configurando el midel
  
//escuchando tu solicitud
app.listen(port, () => {
  console.log('servidor a tu servicio',port);
});