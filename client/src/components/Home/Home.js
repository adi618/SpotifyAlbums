import React from "react";
import { Container, Grid } from "@material-ui/core";

import getSongsHook from "../../api/getSongsHook";
import Songs from "../Songs/Songs";
import DownloadButton from "../DownloadButton/DownloadButton";

const Home = () => {
  const [songs, loading] = getSongsHook();

  return (
    <div>
      <Container>
        <DownloadButton songs={songs}></DownloadButton>
        <Grid item xs={12} sm={7}>
          <Songs songs={songs} loading={loading} />
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
