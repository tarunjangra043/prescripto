import express from "express";
import cors from "cors";
import "dotenv/config";

//app config
const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

//api endpoint
app.get("/", (req, res) => {
  res.send("API WORKING!");
});

app.listen(PORT, () => {
  console.log(`App is listing on ${PORT}`);
});
