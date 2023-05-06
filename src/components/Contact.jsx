import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function ContactForm() {
  return (
    <div className="mt-5">
      <Form className="container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu mail" />
          <Form.Text className="text-muted">
            Nunca compartiremos tu mail con terceros.
          </Form.Text>
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="Comentarios">
          <Form.Control as="textarea" style={{ height: "100px" }} />
        </FloatingLabel>
        <Form.Check className="mt-2" type="checkbox" label="Soy humano" />
        <Button className="mt-2" variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
