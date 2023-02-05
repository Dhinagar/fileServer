const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    fileId: {
        type: Number,
        unique: true
    },
    fileName: String,
    availbleUsers:Array,
    filePath:String
    
})

const FileSchema = mongoose.model('file', fileSchema)

module.exports = FileSchema;