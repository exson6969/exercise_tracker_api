const express = require('express');
const authRoutes = require('./routes/authRoutes')
const exerciseRoutes = require('./routes/exerciseRoutes')
const logRoutes = require('./routes/logRoutes')
const goalRoutes = require('./routes/goalRoutes')
const planRoutes = require('./routes/planRoutes')

// Initialize app
const app = express()

app.use(express.json());

// Routes 
app.use('/auth', authRoutes);
app.use('/exercise',exerciseRoutes)
app.use('/log',logRoutes)
app.use('/goal',goalRoutes)
app.use('/plan',planRoutes)


// Server
app.listen(3000, ()=>{
    console.log("Running on port 3000")
})