const express = require("express");
const app = express();

const mongoose = require("mongoose");

const connect = () => {
   return mongoose.connect(
      "mongodb+srv://adnan:adnan@cluster0.rlrcf.mongodb.net/geospatial?retryWrites=true&w=majority"
   );
};

const rSchema = new mongoose.Schema({
   location: {
      type: {
         type: String,
         enum: "Point",
      },
      coordinates: {
         type: [Number],
      },
   },
   name: { type: String },
});

const Restaurant = mongoose.model("restaurants", rSchema);

const lat = 32.732998;
const long = 74.864273;

app.get("/nearme", async (req, res) => {
   try {
      var METERS_PER_MILE = 1609.34;
      const restaurants = await Restaurant.find({
         location: {
            $nearSphere: {
               $geometry: {
                  type: "Point",
                  coordinates: [long, lat],
               },
               $maxDistance: 1 * METERS_PER_MILE,
            },
         },
      });
      return res.status(200).send({ restaurants });
   } catch (error) {
      console.log("error:", error);
   }
});

app.listen(5000, async () => {
   try {
      await connect();
      console.log("listening on port 5000");
   } catch (error) {
      console.log({ error });
   }
});

// db.restaurants.insertOne({location: { type: "Point", coordinates: [ 74.864273, 32.732998 ] }}, {name: "Adnan"})
