const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");

const connect = () => {
   return mongoose.connect(
      "mongodb+srv://adnan:adnan@cluster0.rlrcf.mongodb.net/nykaaBackendTest?retryWrites=true&w=majority"
   );
};

app.use(cors());

app.listen(5000, async () => {
   try {
      await connect();
      console.log(`listening on port ${port}`);
   } catch (error) {
      console.log({ error });
   }
});

const productSchema = new mongoose.Schema(
   {
      link: { type: String, required: true },
      title: { type: String, required: true },
      rating: { type: String, required: false, default: "✩✩✩✩✩" },
      price: { type: String, required: true },
      bestseller: { type: String, required: false, default: "" },
      numberOfRatings: { type: Number, required: false, default: 0 },
      sellerId: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "user",
      },
      category: { type: String, required: true },
   },
   {
      versionKey: false,
      timestamps: true,
   }
);

const Products = new mongoose.model("products", productSchema);

app.get("/products", paginatedResults(), async (req, res) => {
   try {
      console.log(req.query);
      return res.json(res.paginatedResults);
   } catch (error) {
      return res.status(400).send({ error });
   }
});

function paginatedResults() {
   return async (req, res, next) => {
      const page = parseInt(req.query.page) || 1;
      const limit = 12;
      const skipIndex = (page - 1) * limit;
      const results = {};
      const sort = req.query.sort;
      console.log("sort:", sort)
      let sortBy;
      if (sort === "h2l") {
         sortBy = -1;
      } else if (sort === "l2h") {
         sortBy = 1;
      } else {
         sortBy = null;
      }
      console.log(sortBy)

      try {
         let total = await Products.countDocuments({});
         results.totalPages = Math.ceil(total / limit);
         results.products = await Products.find()
            .limit(limit)
            .skip(skipIndex)
            .sort({ price: sortBy })
            .exec();

         res.paginatedResults = results;
         next();
      } catch (e) {
         res.status(500).json({
            message: "Error Occured while fetching the data",
         });
      }
   };
}
