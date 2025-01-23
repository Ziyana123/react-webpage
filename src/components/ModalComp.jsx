import React from 'react';
import { Modal, Button, Nav, Tab, Image } from 'react-bootstrap';
import './Product.css';

const ModalComp = ({ show, onHide, product }) => {
  if (!product) return null;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={product.image} className="img-fluid" alt={product.title} />
        <Tab.Container defaultActiveKey="description">
          <Nav variant="tabs" className="mt-3">
            <Nav.Item>
              <Nav.Link eventKey="description">Description</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="reviews">Reviews</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="mt-2">
            <Tab.Pane eventKey="description">
              <p>{product.description}</p>
            </Tab.Pane>
            <Tab.Pane eventKey="reviews">
              {product.reviews.map((review, index) => (
                <p key={index}>
                  <strong>{review.author}:</strong> {review.text}
                </p>
              ))}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Add to Cart</Button>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComp