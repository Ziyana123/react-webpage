import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer bg-light text-center text-lg-start mt-5">
            <div className="container p-4">
                <div className="row">
                    
                    <div className="col-lg-6 col-md-12 mb-4">
                        <h5 className="text-uppercase">My Store</h5>
                        <p>
                            Your go-to place for quality handbags and accessories. Discover a variety of styles and collections today!
                        </p>
                    </div>

                
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" className="text-dark">Home</a></li>
                            <li><a href="#!" className="text-dark">Products</a></li>
                            <li><a href="#!" className="text-dark">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="text-uppercase">Follow Us</h5>
                        <div className="footer-icons">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark social-icon"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark social-icon"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark social-icon"
                                aria-label="Twitter"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="text-center p-3 footer-bottom">
                © {currentYear} My Store. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
