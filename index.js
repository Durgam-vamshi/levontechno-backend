const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
const app = express();
const Routes = require("./routes/route.js");

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 4040;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json({ limit: '10mb' }));
app.use(cors());

// Connect to MongoDB
mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});
