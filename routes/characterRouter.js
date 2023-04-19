const express = require("express")
const characterRouter = express.Router()
const Character = require('../models/character.js')

//get all
characterRouter.get("/", (req, res, next) => {
    Character.find((err, characters) => {
        if(err){
            res.status(500)
            return next(err)
        }
    return res.status(200).send(characters)
    })
})

//get character by user
characterRouter.get("/user", (req, res, next) => {
    Character.find({ user: req.auth._id }, (err, characters) => {
        if(err){
            res.status(500)
            return next(err)
        }
    return res.status(200).send(characters)
    })
})

// add new character
characterRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id
    const newCharacter = new Character(req.body)
    newCharacter.save((err, savedCharacter) => {
        if(err){
            res.status(500)
            return next(err)
        }
    return res.status(201).send(savedCharacter)
    })
})

//delete character
characterRouter.delete("/:characterId", (req, res, next) => {
    Character.findOneAndDelete(
        { _id: req.params.characterId, user: req.auth._id },
        (err, deletedCharacter) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully delete character: ${deletedCharacter.title}`)
        }
    )
})

//update character
characterRouter.put("/:characterId", (req, res, next) => {
    Character.findOneAndUpdate(
        { _id: req.params.characterId, user: req.auth._id },
        req.body,
        { new: true },
        (err, updatedCharacter) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedCharacter)
        }
    )
})

module.exports = characterRouter