const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const jtw = require('jsonwebtoken')

app.use(express.static(path.join(__dirname, 'public')))

function getCookie(req){
    const cookies = req.headers.cookie.split('; ')
    const parsedCookies = {}

    cookies.forEach(element => {
        pc = element.split('=')
        parsedCookies[pc[0]] = pc[1]
    });

    return parsedCookies
}

function authenticateToken(req, res, next){

    const cookies = getCookie(req) 
    const token = cookies['token']
    if (token == null) res.sendStatus(401)

    jtw.verify(token, process.env.ACESS_TOKEN, (err, user)=>{
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.get('/login', (req,res)=>{
    res.sendFile('login.html', {root:"./public"})
})

app.get('/', authenticateToken, (req, res)=>{
    res.sendFile('main.html', {root:'./public'})
})

app.listen(10000)