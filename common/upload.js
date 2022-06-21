const multer = require('multer');

var upload = multer({
    // storage: storage,
    fileFilter: (req, file, callback) => {
        if(
            file.minetype == 'image/png' ||
            file.minetype == 'image/jpg'
        ){
            callback(null, true)
        } else{
            console.log('only jpg & png file support');
            callback(null, false)
        }
    },
})

module.exports = upload