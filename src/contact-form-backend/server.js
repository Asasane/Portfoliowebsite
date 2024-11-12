const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


mongoose
  .connect("mongodb+srv://Aditya:952002@cluster0.brdda.mongodb.net/contact_form", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.use("/api/messages", require("./routes/messages"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
