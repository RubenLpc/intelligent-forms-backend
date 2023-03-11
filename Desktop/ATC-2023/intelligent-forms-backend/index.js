const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')




//initialize middlewares
app.use(express.json())

// app.use(cookieParser())
app.use(cors)


//import routes
const authRoutes = require('./routes')
console.log(authRoutes);

//initialize routesn
app.use('/api', authRoutes)

app.listen(3000,() => {
    console.log('Server listening on port 3000');

});




