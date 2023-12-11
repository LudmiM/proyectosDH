const express = require('express');
const app = express();
const PORT = 3030;
const path=require('path');
const indexRouter = require('./routes/index.routes');

app.use(express.static(path.join(__dirname,'public')))

/*setting views engine*/
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/',indexRouter)
/*
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/about',(req,res)=>res.sendFile(path.join(__dirname,'views','about.html')));
//app.get('/music',(req,res)=>res.sendFile(path.join(__dirname,'views','music.html')));
*/
app.listen(PORT,()=>console.log(`Server esta corriendo en http://localhost:${PORT}`));