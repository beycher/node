const express = require('express')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')

const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('myServer', hbs.engine)
app.set('views enjine, myServer')
app.set('views', 'views')
app.use(todoRoutes)
async function start(){
    try{
        await mongoose.connect('mongodb+srv://Ilya:beycher255656@cluster0-xoizn.mongodb.net/todo',{
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log('server started')
        })
    }catch (e) {
        console.log(e)
    }
}

start()