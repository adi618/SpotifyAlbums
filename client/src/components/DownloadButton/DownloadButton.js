import React from "react";
import { Button } from "react-bootstrap";

const Form = ({ songs }) => {
  const handleClick = (e) => {
    const myData = songs;
    const fileName = "file";
    const json = JSON.stringify(myData);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleClick} variant="outline-secondary">
      Download songs data in json format
    </Button>
  );
};

export default Form;
