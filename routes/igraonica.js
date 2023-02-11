const express = require("express");
const router = express.Router()

const { Igraonica } = require('../models')

const joi = require('joi')

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get('/igraonica', (req, res) =>{

  Igraonica.findAll()
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

router.post('/igraonica', (req, res)=>{
    const schema = joi.object({
      ime: joi.string().required(),
    })

    const {error, value} = schema.validate({
      ime: req.body.ime
    })

    if(error){
        msg = error
        res.status(400).json({msg: msg})
    }else{

      Igraonica.create(
        {
          ime: req.body.ime
        }
      )
          .then(rows => res.json(rows))
          .catch(err => res.status(500).json(err))
        }
})

router.put('/igraonica', (req, res) => {
  Igraonica.findOne({
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
        err => res.status(500).json({msg:"pogresan naziv igraonice"})
     )} ) 

router.delete('/igraonica', (req, res)=>{

  Igraonica.findOne({
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