const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    fileId: {
        type: Number,
        unique: true
    },
    fileName: String,
    availbleUsers:Array, //this array is importtant to check this file is availble for user a or b, so we need to add user for this file.
    filePath:String
    
})

const FileSchema = mongoose.model('file', fileSchema)

module.exports = FileSchema;