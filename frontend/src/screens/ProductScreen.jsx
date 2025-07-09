import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products.js";

const ProductScreen = () => {
  const { id: productId } = useParams();

  // Debug logging
  console.log("URL Parameter ID:", productId, "Type:", typeof productId);
  console.log("Products array length:", products.length);
  console.log(
    "Product IDs in array:",
    products.map((p) => p._id)
  );
  console.log("Looking for exact match...");

  const product = products.find((p) => {
    console.log(
      `Comparing: "${p._id}" === "${productId}"`,
      p._id === productId
    );
    return p._id === productId;
  });

  console.log("Found product:", product);

  // Safety check - if product not found
  if (!product) {
    return (
      <div>
        <Link className="btn btn-light my-3" to="/">
          Go Back
        </Link>
        <div className="alert alert-danger">
          <h4>Product Not Found</h4>
          <p>
            Looking for product with ID: <strong>"{productId}"</strong>
          </p>
          <p>
            Available product IDs:{" "}
            {products.map((p) => `"${p._id}"`).join(", ")}
          </p>
          <p>URL: {window.location.pathname}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
