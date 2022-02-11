const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/productCart', (req, res) => {
    res.sendFile(__dirname + "/views/productCart.html");
});


app.get('/register', (req, res) => {
    res.sendFile(__dirname + "/views/register.html");
});

app.get('/perfil', (req, res) => {
    res.sendFile(__dirname + "/views/perfil.html");
});

