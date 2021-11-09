import FavouriteSongModel from "../models/FavouriteSongModel.js";

export const getFavourites = async (req, res) => {
  try {
    const userId = req.userId;
    const userFavorites = await FavouriteSongModel.findOne({ creator: userId });

    res.status(200).json(userFavorites.favourites);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const makeFavourite = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.status(401).json({ message: "Unauthenticated" });
  }

  let userFavourites;

  try {
    userFavourites = await FavouriteSongModel.findOne({
      owner: req.userId,
    });

    if (userFavourites) {
      const index = userFavourites.favourites.indexOf(req.body.name);
      if (index !== -1) {
        userFavourites.favourites.splice(index, 1);
      } else {
        userFavourites.favourites.push(req.body.name);
      }
      userFavourites.save();
    } else {
      userFavourites = new FavouriteSongModel({
        owner: req.userId,
        favourites: [req.body.name],
      });

      userFavourites.save((error) => {
        if (error) {
          console.log(error);
        }
      });
    }

    res.status(200).json(userFavourites.favourites);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
