import React from 'react';
import './footer.desktop.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content" style={{marginLeft:"2rem"}}>
                <div className="footer-left">
                    <img src="/footer-logo.png" />
                    <p className='mt-3'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <div className="footer-social-icons mt-4">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                <div className="footer-right" style={{marginLeft:"5rem", color:'FFFFFFB2'}}>
                    <div className="footer-column">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">How Trustpilot works</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Investor Relations</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Community</h3>
                        <ul>
                            <li><a href="#">Trust in reviews</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Log in</a></li>
                            <li><a href="#">Sign up</a></li>
                            <li><a href="#">Chrome App</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Businesses</h3>
                        <ul>
                            <li><a href="#">Mosouq Business</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Plans & Pricing</a></li>
                            <li><a href="#">Business Login</a></li>
                            <li><a href="#">Blog for Business</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <ul>
                    <li><a href="#">Legal</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Guidelines for Reviewers</a></li>
                    <li><a href="#">System status</a></li>
                    <li><a href="#">Modern Slavery Statement</a></li>
                </ul>
                <p>All rights reserved © 2024 - 2030</p>
            </div>
        </footer>
    );
};

export default Footer;
