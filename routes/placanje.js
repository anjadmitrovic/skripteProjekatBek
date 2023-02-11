const express = require("express");
const router = express.Router()

const { Placanje } = require('../models')

const joi = require('joi')

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get('/placanje', (req, res) =>{

  Placanje.findAll()
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

router.post('/placanje', (req, res)=>{
    const schema = joi.object({        
      terminId: joi.string().required(),
      iznos: joi.string().required()
     })

    const {error, value} = schema.validate({
      terminId:req.body.terminId,
      iznos:req.body.iznos
    })

  if(error){
      msg = error
      res.status(400).json({msg: msg})
  }else{

  Placanje.create(
    {
      terminId:req.body.terminId,
      iznos:req.body.iznos
     }
  )
      .then(rows => res.json(rows))
      .catch(err => res.status(500).json(err))
    }
})

router.put('/placanje', (req, res) => {
  Placanje.findOne({
    where:{
        id:req.body.id
    }
  })
    .then(
        el => {
            el.iznos = req.body.iznos
            el.save()
            res.json(el)
        }
    )
    .catch(
        err => res.status(500).json({msg:"pogresno placanje"})
     )} ) 

router.delete('/placanje', (req, res)=>{

  Placanje.findOne({
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