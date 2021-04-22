const express = require('express')
const hbs = require('hbs')
const app = express()
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.get('/about',(req,res)=>{
    res.render('about',{
        pageTitle : 'About page'
    })

})

app.get('/',(req,res)=>{
    res.render('home',{
        pageTitle : 'home page'
    })

})

app.listen(5000);
console.log("Server is runing 5000")