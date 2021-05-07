<<<<<<< HEAD
const fileupload = require('express-fileupload')
const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/User')
const expHbs  = require('express-handlebars')
const app = express()

app.use(express.static('public'))
app.use(fileupload())

app.engine('hbs', expHbs({ extname:'hbs'}))
app.set("view engine", 'hbs')
=======
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const expHbs = require('express-handlebars')

const app = express()

//Routers
const userRouter = require('./routes/user')
>>>>>>> 1bc9cc680124141b33f25b3d49931fd6aeb78b32


const {DATABASE_URL} = process.env

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (err) throw err
    
    console.log('Connected')
<<<<<<< HEAD
    
    // const instance = new User()
    
    const newUser = {
        email: "ASDASD",
        password: "asdasdasd"
    }
    
    const user = new User(newUser)
    
    const result = await user.save()
    
    console.log(result)
    
})


app.get('/', (req, res) => {
    res.render('landingpage')
})

app.get('/campgrounds', (req, res) => {
    res.render('home')
})


=======
})

//Handle Bars Middleware
app.engine('hbs', expHbs({ extname: 'hbs'  }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({extended: false}))


app.use('/user', userRouter)


app.get('/', async (req, res) => {
    res.send("Welcome To YelpCamp")
})

>>>>>>> 1bc9cc680124141b33f25b3d49931fd6aeb78b32
app.listen(5000, () => console.log("Server Started"))
