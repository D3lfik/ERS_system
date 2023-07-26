require('dotenv').config();
const express = require('express'); 
const port = 4000  || process.env.PORT;
const app = express(); 
const expressLayout = require('express-ejs-layouts');
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-Strategy');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash'); 
const flashMiddleWare = require('./config/flashMiddleware');
//Output from req.body
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('./assets'));

//view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(expressLayout);
app.use(session({
    name: "ERS", 
    secret: "xafawfagwa2312asfwfwsffsa",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl:process.env.MONGODB,
        autoRemove: 'disabled'
    },
        (err) => {
            console.log(err || 'connect-mongo setup ok');
        }
    )
}))

//passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

//flash
app.use(flash());
app.use(flashMiddleWare.Flash);

//routerMVC
app.use('/', require('./routes/index'));
//Server
app.listen(port, function(err){
    if(err){
        console.log("Error in running the app.");
        return ;
    }
    console.log("Server is up and running at port ", + port);
});