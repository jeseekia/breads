//DEPENDENCIES
const express = require('express')

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//MIDDLEWARE
app.set('views', __dirname+'/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//ROUTES
app.get('/', (req, res)=>{
    res.send('Welcome to an Awesome App about Breads!')
})

//Breads
const breadsController = require('./controllers/bread_controller')
app.use('/breads', breadsController)

//404 Page
app.get('*', (req, res) => {
    res.status(404).send('404')
})

//LISTEN
app.listen(PORT, () => {
    console.log('Listening on port ', PORT)
})