const multer  = require('multer');
// const upload = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({});

const fileFilter = (req , file, cb) => {
    // console.log(file);
    if (!file.mimetype.includes("image")) {
        return cb("invalid image format! ", false);
    }
    cb(null, true)
};

module.exports = multer({storage , fileFilter});