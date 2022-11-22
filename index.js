const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const actionRoute = require('./routes/action');
const maggotRoute = require('./routes/maggot');
const multer = require("multer");
const routerQuestion = require('./routes/question')
const CORS = require('cors')

dotenv.config();
app.use(express.json());
app.use('/static/images', express.static('images'))
app.use(express.json())
app.use(CORS(
  {
    origin: '*'
  }));
app.use(express.urlencoded({ extended: true }))


mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true

})
  .then(() => console.log("MongoDB connection established."))
  .catch((error) => console.error("MongoDB connection failed:", error.message))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use(postRoute);
app.use("/api/categories", categoryRoute);
app.use(routerQuestion)
app.use("/api", actionRoute);
app.use("/api", maggotRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});
