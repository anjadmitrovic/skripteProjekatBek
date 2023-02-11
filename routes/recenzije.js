const express = require("express");
const router = express.Router()

const { Recenzije } = require('../models')

const joi = require('joi')


router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get('/recenzije', (req, res) =>{

  Recenzije.findAll()
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

router.post('/recenzije', (req, res)=>{
  const schema = joi.object({
      userId: joi.string().required(),
      recenzije: joi.string().required()
  })

  const {error, value} = schema.validate({
    userId: req.body.userId,
    recenzije: req.body.komentar
  })

  if(error){
      msg = error
      res.status(400).json({msg: msg})
  }else{
    Recenzije.create(
      {
        userId: req.body.userId,
        komentar: req.body.komentar
        
      }
    )
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
    }
})

router.put('/recenzije', (req, res) => {
  Recenzije.findOne({
    where:{
        id:req.body.id
    }
  })
    .then(
        el => {
            el.komentar = req.body.komentar
            el.save()
            res.json(el)
        }
    )
    .catch(
        err => res.status(500).json({msg:"pogresna recenzija"})
     )} ) 

router.delete('/recenzije', (req, res)=>{

  Recenzije.findOne({
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