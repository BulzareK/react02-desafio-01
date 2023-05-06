import React from "react";
import { Card } from "react-bootstrap";
import imagenes from "../assets/img/imagenes";

const style = {
  width: "350px",
  height: "350px",
};

const Products = () => {
  return imagenes.map((im) => (
    <Card className="mx-5 mt-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={im.img} />
      <Card.Body>
        <Card.Title>{im.title}</Card.Title>
        <Card.Text>{im.text}</Card.Text>
      </Card.Body>
    </Card>
  ));
};

//   imagenes.map((im) => (
//     <Container className="mt-5">
//       <div>
//         <img style={style} src={im.img} />
//       </div>
//     </Container>
//   ));

export default Products;
