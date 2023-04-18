const mongoose = require('mongoose')
const Schema = mongoose.Schema

const characterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    class: {
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
    }
})
module.export = mongoose.model("Character", characterSchema)