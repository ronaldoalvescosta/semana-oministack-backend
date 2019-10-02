const express = require('express');
const mongoose = require ('mongoose');
const routes = require('./routes');


const app = express();

// req.query = Acessar query pramis (para pesquisa)
// req.params = Acessae epute parms (para edição e delite )
// req.body = Acessar corpo da requisição (para criaçao edição)
mongoose.connect('mongodb+srv://mongouser:SM5uzHntatnBAHgK@cluster0-asyfc.mongodb.net/aircnc?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
app.use(express.json());
app.use(routes);

app.listen(3000);
