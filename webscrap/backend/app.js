const express = require("express");

const mongoose = require("mongoose");
const app = express();
const jobListings = require("../AllDetails.json");
const cors = require("cors");

const connect = () => {
   return mongoose.connect(
      "mongodb+srv://adnan:adnan@cluster0.rlrcf.mongodb.net/todo?retryWrites=true&w=majority"
   );
};
app.use(cors());

app.listen(5000, async () => {
   try {
      await connect();
      console.log("listening on port 5000");
   } catch (error) {
      console.log({ error });
   }
});

app.get("/", async (req, res) => {
   try {
      return res.status(200).send(jobListings);
   } catch (error) {
      return res.status(400).send({ error });
   }
});
