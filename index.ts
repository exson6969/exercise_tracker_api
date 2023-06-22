const express = require('express');
const authRoutes = require('./routes/authRoutes.ts')
// const exerciseRoutes = require('./routes/exerciseRoutes.ts')
// const logRoutes = require('./routes/logRoutes.ts')
// const goalRoutes = require('./routes/goalRoutes.ts')
// const planRoutes = require('./routes/planRoutes.ts')

// Initialize app
const app = express()

// Middleware for JSON request body parsing
app.use(express.json());

// Routes 
app.use('/auth', authRoutes);
// app.use('/exercise',exerciseRoutes)
// app.use('/log',logRoutes)
// app.use('/goal',goalRoutes)
// app.use('/plan',planRoutes)

// Server
app.listen(3000, ()=>{
    console.log("Running on port 3000")
})