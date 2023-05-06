import { Container } from "react-bootstrap";
import ContactForm from "../components/Contact";

const Contact = () => {
  return (
    <>
      <Container className="text-center">
        <h1 className="pt-5">¿Quieres contactarnos? Escribe aquí:</h1>
      </Container>
      <ContactForm />
    </>
  );
};

export default Contact;
