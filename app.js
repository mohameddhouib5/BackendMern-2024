const express=require('express')
const dotenv= require("dotenv")
const mongoose=require("mongoose")
const categorieRouter=require("./routes/categorie.route")
const scategorie = require('./routes/scategorie.route')
const articleRouter =require("./routes/article.route")
const  app=express()
dotenv.config()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("bonjour")
})
app.listen(process.env.PORT, () => {
    console.log('Server is listening on port '+process.env.PORT); });
mongoose.connect(process.env.DATABASECLOUD)
.then(() => {console.log("DataBase Successfully Connected");})
.catch(err => { console.log("Unable to connect to database", err);
process.exit(); });
app.use("/api/categories",categorieRouter)
app.use("/api/scategorie",scategorie)
app.use('/api/articles', articleRouter);
module.exports=app;