const mongoose = require('mongoose')
const Schema = mongoose.Schema

const characterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    charRace: {
        type: String,
        required: true,
    },
    charClass: {
        type: String,
        required: true,
    },
    subclass: {
        type: String,
        required: true,
    },
    strength: {
        type: Number,
        required: true,
    },
    dexterity: {
        type: Number,
        required: true,
    },
    constitution: {
        type: Number,
        required: true,
    },
    intelligence: {
        type: Number,
        required: true,
    },
    wisdom: {
        type: Number,
        required: true,
    },
    charisma: {
        type: Number,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: { 
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Character", characterSchema)