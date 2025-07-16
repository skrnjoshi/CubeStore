import { useRouteError, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1>Oops! Something went wrong</h1>
          <p className="mt-3">
            {error?.status === 404
              ? "The page you're looking for doesn't exist."
              : "An unexpected error occurred."}
          </p>
          <p className="text-muted">{error?.statusText || error?.message}</p>
          <div className="mt-4">
            <Button as={Link} to="/" variant="primary" className="me-3">
              Go Home
            </Button>
            <Button as={Link} to="/cart" variant="outline-secondary">
              View Cart
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
