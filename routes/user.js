const jtw = require('jsonwebtoken')
const joi = require('joi')

const express = require("express");
const router = express.Router()
const { User } = require('../models')

require('dotenv').config()

router.use(express.json())
router.use(express.urlencoded({extended:true}))

function authenticateToken(req, res, next){

  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) res.sendStatus(401)

  jtw.verify(token, process.env.ACESS_TOKEN, (err, user)=>{
      if (err) return res.sendStatus(403)
      req.user = user
      next()
  })
}
router.get('/me', authenticateToken, (req, res)=>{
  User.findOne({
    where: {
      username: req.user.username
    }
  })
      .then(usr=>{
        res.json(usr)
      })
})

router.get('/user', authenticateToken,(req, res) =>{

  User.findAll()
      .then(
        rows => {
          rows = rows.map(el => {
            const {...newObj} = el.dataValues
            return newObj
          })
          res.json(rows)
        }
      )
      .catch(
        err => res.status(500).json(err)
      )
      
})

router.post('/user', authenticateToken, (req, res)=>{
  const schema = joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
    ime: joi.string().required(),
    prezime: joi.string().required(),
    privilegija: joi.string().required(),
  })

  const {error, value} = schema.validate({
    username:req.body.username,
    password:req.body.password,
    ime:req.body.ime,
    prezime:req.body.prezime,
    privilegija:req.body.privilegija
  })

  if(error){
      msg = error
      res.status(400).json({msg: msg})
  }else{


    User.create(
      {
        username:req.body.username,
        password:req.body.password,
        ime:req.body.ime,
        prezime:req.body.prezime,
        privilegija:req.body.privilegija
       }
    )
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
      }
})


router.put('/user', authenticateToken, (req, res) => {
  
    User.findOne({
      where:{
          id:req.body.id
      }
    })
      .then(
          el => {
              el.ime = req.body.ime
              el.save()
              res.json(el)
          }
      )
      .catch(
          err => res.status(500).json({msg:"pogresan naziv usera"})
       )
      }
  )




router.delete('/user',authenticateToken,(req, res)=>{
  User.findOne({
    where:{
        username: req.user.username
    }
  })
  .then(usr =>{
    if(usr.privilegija === "admin"){

      User.findOne({
        where:{
            id:req.body.id
        }
      })
        .then(
            el => {
                el.destroy()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
            }
        )
        .catch(
            err => res.status(500).json({msg:"pogresan id usera"})
        )
    }else{
      res.json({msg: "samo admin moze da menja privilegije korisnika"})
  }})
})

module.exports = router