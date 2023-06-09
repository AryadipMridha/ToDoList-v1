const express =require("express");
const bodyParser=require("body-parser");

const app = express();

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
const items=["Buy Food","Cook Food","Eat Food"];

app.get("/", function(req,res){
    
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",


};
    let day = today.toLocaleDateString("en-US",options)

res.render("list", {kindOfDay:day,newListItems:items})

}
)
app.post("/", function(req,res){
    let item=req.body.newItem;
    items.push(item);
    res.redirect("/");
})


app.listen(3000, function(){
    console.log("Server started . Port 3000 !")
})