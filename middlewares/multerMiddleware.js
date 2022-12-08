
const path = require('path');
const multer = require('multer');

const storage =  multer.diskStorage({
    destination: (req, res, cb) => {
    cb(null, './public/images/avatars');
    },
    filename: (req, res, cg) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
})

const uploadFile = multer({ storage });

module.exports = uploadFile;