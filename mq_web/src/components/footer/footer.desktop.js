import React from 'react';
import './footer.desktop.css';

import { FaFacebookF, FaXTwitter  } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content" style={{ marginLeft: "2rem" }}>
                <div className="footer-left">
                    <img src="/footer-logo.png" style={{ width: "195px", height: "56px" }} />

                    <div className='mt-5' style={{ textAlign: "justify", fontSize: "16px", color: "#DCDCDCCC" }}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </div>

                    <div className="footer-social-icons mt-4">
                        <a href="#"> <FaXTwitter /> </a>
                        <a href="#"><FaFacebookF />
                        </a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                <div className="footer-right" style={{ marginLeft: "20rem", color: 'FFFFFFB2', marginRight: "8rem" }}>
                    <div className="footer-column">
                        <h3>About</h3>
                        <div>
                            <ul>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/error">Jobs</a></li>
                                <li><a href="/error">Contact</a></li>
                                <li><a href="/error">Blog</a></li>
                                <li><a href="/error">How Trustpilot works</a></li>
                                <li><a href="/error">Press</a></li>
                                <li><a href="/error">Investor Relations</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="footer-column">
                        <h3>Community</h3>
                        <ul>
                            <li><a href="/error">Trust in reviews</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/error">Help Center</a></li>
                            <li><a href="sign-up">Sign up</a></li>
                            <li><a href="/error">Chrome App</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Businesses</h3>
                        <ul>
                            <li><a href="/business-signup">Mosouq Business</a></li>
                            <li><a href="/error">Products</a></li>
                            <li><a href="/error">Plans & Pricing</a></li>
                            <li><a href="/error">Business Login</a></li>
                            <li><a href="/error">Blog for Business</a></li>
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
