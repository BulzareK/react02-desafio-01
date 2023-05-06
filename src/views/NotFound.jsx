import React from "react";
import Container from "react-bootstrap/Container";
import NotImage from "../assets/img/notfound.png";

const style = {
  width: "300px",
  height: "300px",
};

const NotFound = () => {
  return (
    <>
      <Container className="mt-5 text-center">
        <div>
          <h3>Lo sentimos, no encontramos lo que buscas</h3>
          <img style={style} src={NotImage} />
        </div>
      </Container>
    </>
  );
};

export default NotFound;
