const express = require("express");
const cors = require("cors");
const bodyParser = require("express.json");
const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(bodyParser());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
