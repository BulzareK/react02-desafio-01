import { Container } from "react-bootstrap";

import Products from "../components/Products";

const Product = () => {
  return (
    <>
      <Container className="d-flex">
        <Products />
      </Container>
    </>
  );
};

export default Product;
