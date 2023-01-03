const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `public/images/`);
    },
    filename: (req, file, cb) => {
        const fileType = file.mimetype.split("/")[1];
        // application/pdf => ["application", "pdf"], "pdf"

        const originalName = file.originalname.split(".")[0];
        // ananas.png => ["ananas", "png"] => "ananas"

        const fileName = `${Date.now()}-${originalName}.${fileType}`;

        cb(null, fileName);
    },
});

const upload = multer({ storage: storage });

module.exports = {
    storage,
    upload,
};
