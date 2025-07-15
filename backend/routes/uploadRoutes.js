import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/; // Allowed file types
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Error: Images only!"); // Error message for unsupported file types
  }
}

const upload = multer({
  storage,
});

// @desc    Upload an image
// @route   POST /api/upload
// @access  Private/Admin
router.post("/", upload.single("image"), (req, res) => {
  res.send({
    message: "Image uploaded successfully",
    image: `/uploads/${req.file.filename}`, // Return the path to the uploaded image
  });
});

export default router;
