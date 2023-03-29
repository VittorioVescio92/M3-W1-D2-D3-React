// import { render } from "@testing-library/react";
import { Component } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import fantasyBooks from "../books/fantasy.json";
// import historyBooks from "../books/history.json";
// import horrorBooks from "../books/horror.json";
// import romanceBooks from "../books/romance.json";
// import scifiBooks from "../books/scifi.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container className="container-fluid mb-4">
        <Row className="justify-content-center">
          {fantasyBooks.map((book, index) => (
            <Col sm={12} md={4} xl={2} key={index} className="mt-3">
              <Card className="text-center">
                <Card.Img id="img" variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title className="fs-5">{book.title}</Card.Title>
                  <Button variant="success">
                    Acquista <Badge className="bg-primary">€ {book.price}</Badge>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
