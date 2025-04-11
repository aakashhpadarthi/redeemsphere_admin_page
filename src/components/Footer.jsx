import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import logo from "../assets/footerLogo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <img src={logo} alt="Redeem Sphere Logo" height={60} />

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://x.com/RedeemSphereX"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/redeemsphere?utm_source=qr&igsh=d3B5eDQ5NDBtajJ0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/YOUR_PAGE_HERE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/feedback">Feedback</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-section">
          <h3>Policies</h3>
          <ul>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Redeem Sphere. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
