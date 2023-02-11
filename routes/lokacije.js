const express = require("express");
const router = express.Router()

const { Lokacije } = require('../models')

const joi = require('joi')

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get('/lokacije', (req, res) =>{

  Lokacije.findAll()
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

router.post('/lokacije', (req, res)=>{

    const schema = joi.object({
    adresa: joi.string().required(),
    terminId: joi.string().required(),
    igraonicaId: joi.string().required()
  })

  const {error, value} = schema.validate({
    adresa: req.body.adresa,
    terminId: req.body.terminId,
    igraonicaId: req.body.igraonicaId
  })

  if(error){
      msg = error
      res.status(400).json({msg: msg})
  }else{
  
    Lokacije.create(
      {
       adresa: req.body.adresa,
       terminId: req.body.terminId,
       igraonicaId: req.body.igraonicaId

      }
    )
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
    }
})

router.put('/lokacije', (req, res) => {
  Lokacije.findOne({
    where:{
        id:req.body.id
    }
  })
    .then(
        el => {
            el.adresa = req.body.adr
            el.save()
            res.json(el)
        }
    )
    .catch(
        err => res.status(500).json({msg:"pogresna lokacija"})
     )} ) 

router.delete('/lokacije', (req, res)=>{

  Lokacije.findOne({
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