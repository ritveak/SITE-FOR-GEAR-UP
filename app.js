const express = require("express");
const bodyparser = require("body-parser");
const mail = require("./mail")

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/main.html');
});

app.post("/",(req,res)=>{

    mail(req.email,req.Message)
    .then(()=>console.log("Mailed"))
    .catch(err=>console.log(err));
    res.redirect('/');
});

app.listen(process.env.PORT || 3000,()=>console.log('listening on port 3000'));
