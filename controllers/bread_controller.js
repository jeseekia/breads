const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//INDEX
breads.get('/', (req, res) => {
    Bread.find()
        .then(foundBreads => {
            res.render('index', {
                breads: foundBreads,
                title: 'Index Page'
            })
        })
})

// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = undefined
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
  })
  

breads.get('/new', (req, res) => {
    res.render('new')
})

breads.get('/:id/edit', (req, res) => {
    console.log("Edit page")
    Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('edit', {
                bread: foundBread
            })
        })
})

breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
        .then(foundBread => {
            const bakedBy = foundBread.getBakedBy()
            console.log(bakedBy)
            res.render('show', {
                bread: foundBread
            })
        }).catch(err => {
            res.status(404).render('404')
        })
})



// UPDATE
breads.put('/:id', (req, res) => {
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedBread => {
            console.log(updatedBread)
            res.redirect(`/breads/${req.params.id}`)
        })
        .catch(err => {
            res.status(404).render('404')
        })

    // Bread[req.params.arrayIndex] = req.body
    // res.redirect(`/breads/${req.params.arrayIndex}`)
})

breads.delete('/:id', (req, res) => {
    Bread.findByIdAndDelete(req.params.id)
        .then(deletedBread => {
            res.status(303).redirect('/breads')
        })
        .catch()
    
    // Bread.splice(req.params.arrayIndex, 1)
    // res.status(303).redirect('/breads')
})

module.exports = breads