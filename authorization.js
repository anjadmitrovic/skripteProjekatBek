const express = require('express')
const app = express()
const path = require('path')
const {User} = require('./models')


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

app.post('/register', (req, res)=>{
    User.create({
        username:req.body.username,
        password:req.body.password,
        ime:req.body.ime,
        prezime:req.body.prezime

    })
    .then(res.json({msg: "Uspesno"}))
    .catch(err => res.status(500).json({message:"pokusaj ponovo"}))

})

app.post('/login', (req, res) => {

    User.findOne({
        where:{
            username:req.body.username
        }
    })
        .then(user =>{

            if(req.body.password === user.password){
            
                const tmp = {
                    username: user.username,
                    role: user.type
                }

                const token = jtw.sign(tmp, process.env.ACESS_TOKEN)

                res.status(200).json({token:token})
            }else{
                res.status(400).json({message:"neispravna sifra"})
            }
        })
        .catch(
            err => res.status(500).json(err)
        )
})

app.listen({ port: 9000 }, async () => {
   console.log("slusam na portu 9000")
});