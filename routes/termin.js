const express = require("express");
const router = express.Router()

const { Termin } = require('../models')
const joi = require('joi')

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get('/termin', (req, res) =>{

  Termin.findAll()
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

router.post('/termin', (req, res)=>{
  const schema = joi.object({
    dan: joi.string().required(),
    vreme: joi.string().required(),
    userId: joi.string().required(),
    tretmanId: joi.string().required()
  })

  const {error, value} = schema.validate({
    dan:req.body.termin,
    vreme:req.body.terminvreme,
    userId:req.body.userId,
    tretmanId:req.body.tretmanId
  })

  if(error){
      msg = error
      res.status(400).json({msg: msg})
  }else{
    Termin.create(
      {
        dan:req.body.termin,
        vreme:req.body.terminvreme,
        userId:req.body.userId,
        tretmanId:req.body.tretmanId
      }
    )
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))

    }
})

router.put('/termin', (req, res) => {
  Termin.findOne({
    where:{
        id:req.body.id
    }
  })
    .then(
        el => {
            el.dan = req.body.ime
            el.vreme = req.body.terminvreme
            el.save()
            res.json(el)
        }
    )
    .catch(
        err => res.status(500).json({msg:"pogresan dan"})
     )} ) 


router.delete('/termin', (req, res)=>{

  Termin.findOne({
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
        err => res.status(500).json({msg:"pogresan id "})
    )
})

module.exports = router