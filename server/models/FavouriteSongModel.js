import mongoose from "mongoose";

const favouriteSongSchema = mongoose.Schema({
  owner: String,
  favourites: {
    type: [String],
    default: [],
    sparse: true,
  },
});

const FavouriteSongModel = mongoose.model("favourite", favouriteSongSchema);

export default FavouriteSongModel;
