const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

//static middleware
app.use(express.static(__dirname + '/public'));
// Use Body Parser Middleware
app.use(bodyParser.urlencoded({extended : true}));

// set view engine ===> ejs
app.set('view engine', 'ejs');

//routing ===> pages
app.get('/', (req, res)=> {
    //res.send('<h1>home page</h1>');
    res.render('index.ejs', {
        title: 'Home Page'
    });
});
// localhost:3000/about
app.get('/about' , (req , res)=>{
    res.render('about.ejs' , {
        title : "About us"
    });
});
// localhost:3000/contact
app.get('/contact' , (req , res)=>{
    res.render('contact.ejs' , {
        title : "Contact us"
    });
});

// localhost:3000/notes
app.get('/notes' , (req , res)=>{
    res.render('notes.ejs' , {
        title : "Personal Notes"
    });
});

// Notes Arrays To Store Data
let notes = [
    'Playing Football' , 
    'Studing Node.js' , 
    'Eating Fish'
]; 



// running server
app.listen(port, ()=> {
    console.log(`Server is running on localhost ${port}`);
});