const express = require("express");
const router = express.Router()

const { Tretman } = require('../models')

const joi = require('joi')

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get('/tretmani', (req, res) =>{

  Tretman.findAll()
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

router.post('/tretmani', (req, res)=>{

  const schema = joi.object({
    kozmeticarkaId: joi.string().required(),
    proizvodId: joi.string().required(),
    ime: joi.string().required(),
    vrsta: joi.string().required(),
    cena: joi.string().required(),
  })

  const {error, value} = schema.validate({
    kozmeticarkaId: req.body.kozmeticarkaId,
    proizvodId: req.body.proizvodId,
    ime:req.body.ime,
    vrsta: req.body.vrsta,
    cena: req.body.cena
  })

  if(error){
      msg = error
      res.status(400).json({msg: msg})
  }else{
  
    Tretman.create(
      {
        kozmeticarkaId: req.body.kozmeticarkaId,
        proizvodId: req.body.proizvodId,
        ime:req.body.ime,
        vrsta: req.body.vrsta,
        cena: req.body.cena

      }
    )
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
    }
})

router.put('/tretmani', (req, res) => {
  Tretman.findOne({
    where:{
        id:req.body.id
    }
  })
    .then(
        el => {
            el.ime = req.body.ime
            el.dan = req.body.dan
            el.save()
            res.json(el)
        }
    )
    .catch(
        err => res.status(500).json({msg:"pogresan naziv tretmana"})
     )} ) 

router.delete('/tretmani', (req, res)=>{

  Tretman.findOne({
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