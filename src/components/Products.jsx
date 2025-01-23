import React from 'react';
import { Card, Row, Col, Container, Badge, Modal } from 'react-bootstrap';
import { useState } from 'react';
import ModalComp from './ModalComp';
import './Product.css';

const Products = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            id: 1, title: 'Elegant Light Blue Leather Handbag', description: 'Elegant Light Blue Leather Handbag, a perfect blend of sophistication and style.', image: 'https://img.freepik.com/premium-photo/light-blue-leather-handbag-with-gold-hardware_841778-2247.jpg', price: '$49.99',
            rating: '⭐⭐⭐⭐⭐', isNew: true, isOnSale: true,
            reviews: [
                { author: 'John D', text: 'Beautiful handbag, the quality is fantastic!' },
                { author: 'Jane S', text: 'Absolutely love the color and design!' },
            ],
        },
        {
            id: 2, title: 'Luxury Shoulder Bag', description: 'Elevate your accessory collection with our Luxury Shoulder Bag, designed for the fashion-forward individual.', image: 'https://img.freepik.com/premium-photo/luxary-shoulder-bag-isolated-white-background_1111504-19613.jpg?ga=GA1.1.300554002.1729790725&semt=ais_hybrid', price: '$59.99',
            rating: '⭐⭐⭐⭐☆', isNew: true, isOnSale: false,
            reviews: [
                { author: 'Alice G', text: 'Perfect for work and casual outings!' },
                { author: 'Steve R', text: 'The quality is amazing, really worth the price.' },
            ],
        },
        {
            id: 3, title: 'Artisanal Handmade Bag', description: 'Discover the charm of our Artisanal Handmade Bag, a unique accessory that showcases exquisite craftsmanship.', image: 'https://img.freepik.com/premium-photo/bag-is-made-by-person_1302351-3543.jpg?ga=GA1.1.300554002.1729790725&semt=ais_hybrid', price: '$39.99',
            rating: '⭐⭐⭐⭐⭐', isNew: true, isOnSale: true,
            reviews: [
                { author: 'Emily P', text: 'Absolutely in love with this bag! The craftsmanship is amazing, and it’s so versatile for any occasion.' },
                { author: 'Michael T', text: 'The quality of the materials is outstanding, and I love how it can be worn as both a shoulder and crossbody bag.' },
            ],
        },
        {
            id: 4, title: 'Structured Satchel Handbag', description: 'A stylish satchel featuring elegant topstitching detail, perfect for any occasion.', image: 'https://img.freepik.com/premium-photo/structured-satchel-handbag-with-topstitching-detail_1029473-274642.jpg?ga=GA1.1.300554002.1729790725&semt=ais_hybrid', price: '$89.99',
            rating: '⭐⭐⭐⭐⭐', isNew: true, isOnSale: true,
            reviews: [
                { author: 'Daniel H', text: 'The quality of the material is top-notch. This handbag feels sturdy and elegant—definitely a great investment.' },
                { author: 'Rachel F', text: 'I love the sleek design! It fits all my essentials and more,and the structure of the bag keeps everything organized. Its my new favorite bag!' },
            ],
        },

        {
            id: 5, title: 'Elegant Womens Handbag', description: 'A chic and versatile handbag that combines luxury and functionality for every occasion', image: 'https://img.freepik.com/free-photo/fashion-hand-new-women-luxury_1203-6508.jpg?ga=GA1.1.300554002.1729790725&semt=ais_hybrid', price: '$59.99',
            rating: '⭐⭐⭐⭐☆ ', isNew: false, isOnSale: true,
            reviews: [
                { author: 'Sophia R', text: 'Absolutely in love with this handbag! The quality is exceptional, and it’s versatile enough to pair with both casual and formal outfits. A must-have for any fashion-forward woman!' },
                { author: 'Emily K', text: 'I was looking for something stylish but practical, and this handbag ticks all the boxes. The material feels premium, and the design is timeless. Definitely worth the investment!' },
            ],
        },
    ];



    const handleShow = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    return (
        <Container className="mt-4">
            <h2>Products Listing</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {products.map((product) => (
                    <Col key={product.id}>
                        <Card className='product-card' onClick={() => handleShow(product)} style={{ cursor: 'pointer' }}>
                            <div className="badge-container">
                                {product.isNew && <Badge bg="success" className="badge-new">New</Badge>}
                                {product.isOnSale && <Badge bg="danger" className="badge-sale">Sale</Badge>}
                            </div>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.title}

                                </Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <div className="rating">{product.rating}</div>
                                <p className="price">{product.price}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <ModalComp
                show={showModal}
                onHide={handleClose}
                product={selectedProduct}
            />
        </Container>
    );
};

export default Products;
