const express = require("express");
const router = express.Router()

const { Akcije } = require('../models')


const joi = require('joi')

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get('/akcije', (req, res) =>{

  Akcije.findAll()
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

router.post('/akcije', (req, res)=>{

    const schema = joi.object({
        tretmanId: joi.string().required(),
        popust: joi.string().required()
    })

    const {error, value} = schema.validate({
        tretmanId: req.body.tretmanId,
        popust: req.body.popust
    })

    if(error){
        msg = error
        res.status(400).json({msg: msg})
    }else{

      Akcije.create(
        {
          tretmanId: req.body.tretmanId,
          popust: req.body.popust
        }
      )
          .then(rows => res.json(rows))
          .catch(err => res.status(500).json(err))
      }
})

router.put('/akcije', (req, res) => {
  Akcije.findOne({
    where:{
        id:req.body.id
    }
  })
    .then(
        el => {
            el.popust = req.body.popust
            el.save()
            res.json(el)
        }
    )
    .catch(
        err => res.status(500).json({msg:"pogresan naziv akcije"})
     )} ) 

router.delete('/akcije', (req, res)=>{

  Akcije.findOne({
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