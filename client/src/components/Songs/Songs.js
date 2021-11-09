import axios from "axios";
import React, { useState, useEffect } from "react";

import Loader from "../Loader";
import Song from "./Song/Song";

const Songs = ({ songs, loading }) => {
  const [favourites, setFavourites] = useState([]);

  const getAxiosConfig = () => {
    const profile = localStorage.getItem("profile");
    if (!profile) return;
    const { token } = JSON.parse(profile);
    return {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
  };

  const getFavourites = () => {
    const config = getAxiosConfig();
    if (config) {
      axios
        .get("http://localhost:5000/songs/fav", config)
        .then(({ data }) => {
          setFavourites(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getFavourites();
  }, []);

  const setFavourite = (name) => {
    axios
      .post("http://localhost:5000/songs/fav", { name }, getAxiosConfig())
      .then(({ data }) => {
        setFavourites(data);
      });
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      {songs.map((song) => {
        return (
          <Song
            name={song.track.name}
            isFavourite={favourites.includes(song.track.name)}
            viewCount={song.track.playcount}
            artistName={song.track.artists.items[0].profile.name}
            openSpotify={song.track.uri}
            setFavourite={setFavourite}
            key={song.track.name}
          />
        );
      })}
    </div>
  );
};

export default Songs;
