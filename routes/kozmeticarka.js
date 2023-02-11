const express = require("express");
const router = express.Router()

const { Kozmeticarka } = require('../models')

const joi = require('joi')

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get('/kozmeticarka', (req, res) =>{

  Kozmeticarka.findAll()
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

router.post('/kozmeticarka', (req, res)=>{
  const schema = joi.object({
    ime: joi.string().required(),
    prezime: joi.string().required(),
    vrstaUsluge: joi.string().required()
  })
  const {error, value} = schema.validate({
      ime:req.body.ime,
      prezime:req.body.prezime,
      vrstaUsluge:req.body.vrstaUsluge
  })

  if(error){
      msg = error
      res.status(400).json({msg: msg})
  }else{
    Kozmeticarka.create(
      {
        ime:req.body.ime,
        prezime:req.body.prezime,
        vrstaUsluge:req.body.vrstaUsluge
       }
    )
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
    } 
})


router.put('/kozmeticarka', (req, res) => {
    Kozmeticarka.findOne({
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
          err => res.status(500).json({msg:"pogresan naziv kozmeticarke"})
       )} ) 



router.delete('/kozmeticarka', (req, res)=>{

  Kozmeticarka.findOne({
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
        err => res.status(500).json({msg:"pogresan id dostave"})
    )
})

module.exports = router