const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
const passport = require('passport')



//initialize middlewares
app.use(express.json())

 
app.use(cors())
app.use(passport.initialize())
app.use(cookieParser())


//import routes
const authRoutes = require('./routes')


//initialize routesn
app.use('/api', authRoutes)

app.listen(3000,() => {
    console.log('Server listening on port 3000');

    
});




