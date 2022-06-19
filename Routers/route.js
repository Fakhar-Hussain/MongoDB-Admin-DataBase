const express = require('express');
const router = express.Router();
const { createPost } = require('../Controllers/postController');
const multer = require("../middleware/multer");
const { postValidator, validate } = require('../MiddleWare/postValidator');
// const Post = require('../Models/schema')


router.post('/create',
    multer.single('thumbnail'), 
    (req , res , next) => {
        const {tags} = req.body;
        if(tags) req.body.tags = JSON.parse(tags);
        // console.log(typeof JSON.parse(tags));
        next();
    },
    postValidator, 
    validate , 
    createPost
);

module.exports = router;