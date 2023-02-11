const express = require("express");
const router = express.Router()

const { Proizvodi } = require('../models')

const joi = require('joi')

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get('/proizvodi', (req, res) =>{

  Proizvodi.findAll()
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


router.post('/proizvodi', (req, res)=>{
  const schema = joi.object({
    ime: joi.string().required(),
    namena: joi.string().required()
  })

  const {error, value} = schema.validate({
    ime:req.body.ime,
    namena:req.body.namena
  })

  if(error){
      msg = error
      res.status(400).json({msg: msg})
  }else{
    
      Proizvodi.create(
        {
          ime:req.body.ime,
          namena:req.body.namena
        }
      )
          .then(rows => res.json(rows))
          .catch(err => res.status(500).json(err))
      }
})

router.put('/proizvodi', (req, res) => {
  Proizvodi.findOne({
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
        err => res.status(500).json({msg:"pogresan proizvod"})
     )} ) 


router.delete('/proizvodi', (req, res)=>{

  Proizvodi.findOne({
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