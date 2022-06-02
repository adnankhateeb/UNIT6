const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
   {
      tweet_content: { type: String, required: true },
      userId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "user",
         required: true,
      },
   },
   {
      versionKey: false,
      timestamps: true,
   }
);

const TweetSchema = mongoose.model("tweet", tweetSchema);

module.exports = TweetSchema;
