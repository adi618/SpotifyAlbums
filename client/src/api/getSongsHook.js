import { useState, useEffect } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "x-rapidapi-host": "unsa-unofficial-spotify-api.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_KEY,
  },
});

const GetSongsHook = () => {
  const [songsDataJSON, setSongsDataJSON] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(
        "https://unsa-unofficial-spotify-api.p.rapidapi.com/album?id=2fYhqwDWXjbpjaIJPEfKFw"
      )
      .then(function (response) {
        // Would change if it was my own API
        setSongsDataJSON(response.data.Data.data.album.tracks.items);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return [songsDataJSON, loading];
};

export default GetSongsHook;
