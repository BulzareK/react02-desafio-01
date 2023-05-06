import { Container } from "react-bootstrap";

import ImageHero from "../components/Image";

const Home = () => {
  return (
    <>
      <Container className="text-center">
        <h1 className="pt-5">
          Bienvenid@ a <span className="fw-bold">Piethon</span> 🍰
        </h1>
        <h6> Tenemos el código del sabor </h6>
      </Container>
      <div className="d-flex justify-content-center mt-5">
        <ImageHero />
      </div>
    </>
  );
};

export default Home;
