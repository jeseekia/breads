const mongoose = require('mongoose')

const { Schema } = mongoose 


const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: {
        type: Schema.Types.ObjectID,
        ref: 'Baker'
    }
})

breadSchema.methods.getBakedBy = function(){
    return `${this.name} bread was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}!`
}


const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
