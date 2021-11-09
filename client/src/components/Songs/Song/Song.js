import React from "react";
import { Card, Button } from "react-bootstrap";

const Song = ({
  name,
  viewCount,
  artistName,
  openSpotify,
  isFavourite = false,
  setFavourite,
}) => {
  return (
    <Card className="my-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {name} <span className="text-muted">- {artistName}</span>
            </Card.Title>
            <Card.Text className="text-muted">{viewCount} views</Card.Text>
          </div>
          <div>
            <Button variant="outline-primary" href={openSpotify}>
              Open on Spotify
            </Button>
            <Button
              variant={isFavourite ? "danger" : "outline-danger"}
              onClick={() => setFavourite(name)}
              style={{ "margin-left": "5px" }}
            >
              Favourite
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Song;
