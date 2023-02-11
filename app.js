const express = require('express')
const app = express()
const path = require('path')

const kozmeticarka = require('./routes/kozmeticarka.js')
const termin = require('./routes/termin.js')
const lokacije = require('./routes/lokacije.js')
const akcije = require('./routes/akcije.js')
const proizvodi = require('./routes/proizvodi.js')
const igraonica = require('./routes/igraonica.js')
const placanje = require('./routes/placanje.js')
const recenzije = require('./routes/recenzije.js')
const tretmani = require('./routes/tretmani.js')
const user = require('./routes/user.js')
const { Server } = require('socket.io')
const http = require('http')
const {sequelize, Recenzije, Porudzbina} = require('./models')


const { User } = require('./models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

require('dotenv').config()
const jtw = require('jsonwebtoken')
const cors = require('cors')
const e = require('express')

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(express.json())
app.use(cors(corsOptions))

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    },
    allowEIO3: true
})

io.on('connection', socket=>{


    socket.on('addRecenzija', data =>{
        Recenzije.create(
            {
              userId: data.userId,
              komentar: data.komentar
              
            }
          )
              .then(bla => {


                Recenzije.findAll()
                    .then(
                        rows => {
                            rows = rows.map(el => {
                            const {...newObj} = el.dataValues
                            return newObj
                            })
                            socket.emit('recenzije', rows)
                    }
                    )
                    .catch(
                    err => res.status(500).json(err)
                    )
                   
              })
    })
})
// app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/admin', kozmeticarka)
app.use('/admin', termin)
app.use('/admin', proizvodi)
app.use('/admin', lokacije)
app.use('/admin', akcije)
app.use('/admin', igraonica)
app.use('/admin', placanje)
app.use('/admin', recenzije)
app.use('/admin', tretmani)
app.use('/admin', user)



server.listen({ port: process.env.PORT || 8000}, async ()=> {
    await sequelize.authenticate();
});