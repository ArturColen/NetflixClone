// Import express and path
const express = require('express')
const path = require('path')

// Storing the application port
const port = 3333

// Declare an initial path
let initialPath = path.join(__dirname, 'public')
// Declare a server application instance
let app = express()
app.use(express.static(initialPath))

// Choose application input file
app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, 'index.html'))
})

// Start server
app.listen(port, () => {
    console.log(`Server start up on port ${port}!`)
})
