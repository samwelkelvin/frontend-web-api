const app = require('./app');

//use port 3000 if port is not specified in environment variable
const port = process.env.PORT || 3000;

const authRoutes = require('./authRoutes');

//authentication routes
app.use('/', authRoutes);

// Listen on given port
app.listen(port, () => {
    
     console.info(`App staterted Visit http://localhost:${port}`)

});