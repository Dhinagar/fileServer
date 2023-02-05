
const FILE_MODEL = require('../models/file.mode');

exports.addFileDetails = async (req,res) => {
    try {
        const { fileId,fileName,availbleUsers,filePath}=req.body;
        
        const file = new FILE_MODEL({
            fileId,fileName,availbleUsers,filePath
          });
            const result = await file.save();
            res.send(result);
    } catch (e) {
        throw Error('Error while regitering file : ' + e.errmsg);
    }
}

exports.getfile = async (fileId) => {
    try {
        const file = await FILE_MODEL.findOne({
            "fileId": fileId
        });

        if(!file){
            throw  Error('we do not have file with name :'+fileId);
        } 
        const userid=req.params.fileId||''
        //if the file avaiable for particular user then we will send it otherwise will not send
        if(!file.availbleUsers.includes(userid)){
            throw  Error('we do not have file with name :'+fileId);
        }
        return file;
    } catch (e) {
        throw Error('Error while fetching file : ' + e);
    }
}
