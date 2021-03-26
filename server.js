<<<<<<< HEAD
<<<<<<< HEAD
// Reseter Node express
//import dependemcies yang di butuhkan 
const express = require('express')
const cors = require('cors')
const hb = require('express-handlebars')
const app = express()
const path = require("path")

// Set Middleware Membuat sebuah Function
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))

//Set view engine Memberikan tahu penempatan tools viwes (deklaras keseluruhan)
app.set("views", path.join(__dirname, "view"))
app.set("view engine" , "handlebars")
app.engine("handlebars" , hb({
    layoutsDir : `${__dirname}/view/layouts`,
    // Componen HTMLTableRowElement, Footer terpisah
    defaultLayout : "main_layout",
    partialsDir : `${__dirname}/view/components`
}))
//Routing Ketika User akses sebuah file index
app.get("/" , (req, res)=>{
    res.render("index", {
        title : "home page", 
        text : "ini text dari server"
    })
})

// Listener / server yang di jalankan
app.listen(3000 , ()=>{console.log("server yang berjalan di port 3000")})
=======
=======
>>>>>>> origin
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

// listener
<<<<<<< HEAD
app.listen(3000 , ()=>{console.log("server berjalan di port 3000")})
>>>>>>> e8e8dc3c487e8e8f22374a02d16446d2fad0f33e
=======
app.listen(3000 , ()=>{console.log("server berjalan di port 3000")})
>>>>>>> origin
