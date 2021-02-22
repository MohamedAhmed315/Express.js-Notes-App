const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//static middleware
app.use(express.static(__dirname + '/public'));

// set view engine ===> ejs
app.set('view engine', 'ejs');

//routing ===> pages
app.get('/', (req, res)=> {
    //res.send('<h1>home page</h1>');
    res.render('index.ejs')
});

app.listen(port, ()=> {
    console.log(`Server is running on localhost ${port}`);
});