const fs = require('fs');
const FILE_SERVICE = require('../services/file.services');


exports.getFileId = async (req, res, next) => {
    try {
        const file = await FILE_SERVICE.getfile(req.params.fileId);
        const filepath = path.join(file.filePath, file.fileName)
        return res.status(200).sendFile(filepath);
        //  res.status(200).json({
        //     status: 200,
        //     data: file,
        //     message: "Succesfully fetched fileId"
        // });


        /// to stream big files////
        // res.setHeader('content-type',"application/octet-stream");
        // res.setHeader('Content-dispostion','attachment; filename='+file.fileName)
        //fs.createReadStream(filepath).pipe(res);

        //to download file
        //res.download(filepath); 

    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e
        });
    }
}

exports.addFile = async (req, res, next) => {
    try {
        const file = await FILE_SERVICE.addFileDetails(req, res);
        return res.status(200).json({
            status: 200,
            data: file,
            message: "Succesfully added file "
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e
        });
    }
}

