import { Container, Row, Col, Button } from "react-bootstrap";
import rightContent from "../images/rightContent.svg";
export const Hero = () => {
  return (
    <Container fluid className="hero bg-warning" id="hero">
      <Row className="p-3">
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h1>Welcome to our website</h1>
            <p>
              Velit cupidatat et dolor ea laboris. Excepteur non nulla ex
              mollit. Do commodo ex aute non culpa ullamco. Sunt consequat ea
              esse mollit sit.
            </p>
            <Button variant="dark">click</Button>
          </div>
        </Col>
        <Col md={6} className="text-center">
          <img
            src={rightContent}
            width="300"
            height="300"
            alt="right content"
          />
        </Col>
      </Row>
    </Container>
  );
};
