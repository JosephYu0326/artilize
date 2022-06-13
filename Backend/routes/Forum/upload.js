const express = require("express");
const router = express.Router();
const db = require("../../modules/mysql_config");
const fs = require("fs");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../../upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now())
    }
})
const upload = multer({
    storage: storage, fileFilter: function (req, file, cb) {
        if (file.mimetype !== 'image/png') {
            cb(null, false);
        } else {
            cb(null, true);
        }
    }
})

router.route('/', upload.single('file')).post((req, res, next) => {
    console.log(req.body);
    const url = '/upload/' + storage.filename;

    if (req.file === undefined) {
        return res.send({
            errno: -1,
            msg: `no file`
        });
    } else {
        res.json({
            errno: 0,
            msg: 'upload success',
            url
        });
    }

    //res.send('123')
    // 即将上传图片的key值 form-data对象{key: value}
    // 检查是否有文件待上传

    //const { size, mimetype, filename } = req.file;
    // const types = ['jpg', 'jpeg', 'png', 'gif'];
    // const tmpTypes = mimetype.split('/')[1];
    // const SIZELIMIT = 500000;

    // // 检查文件大小
    // if (size >= SIZELIMIT) {
    //     return res.send({
    //         errno: -1,
    //         msg: 'file is too large'
    //     });
    // }

    // // 检查文件类型
    // else if (types.indexOf(tmpTypes) < 0) {
    //     return res.send({
    //         errno: -1,
    //         msg: 'not accepted filetype'
    //     });
    // }
    // // 路径可根据设置的静态目录指定

})


module.exports = router;