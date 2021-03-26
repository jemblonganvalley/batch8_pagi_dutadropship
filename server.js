
//import depedensi yang dibutuhkan
const express = require('express');
const cors = require('cors');
const hb = require('express-handlebars');
const app = express();
const path = require('path');

//set middleware
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname , "public")))

//set view emgine
app.set("views" , path.join(__dirname , "view"))
app.set("view engine" , "handlebars")
app.engine("handlebars" , hb({
    layoutsDir : `${__dirname}/view/layouts`,
    defaultLayout : "main_layouts",
    partialsDir : `${__dirname}/view/components`
}))

//routing
app.get("/" , (req, res)=>{
    res.render("index" , {});
});


app.listen(3000 , ()=>{console.log("server berjalan di port 3000")})
