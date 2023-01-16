import React from "react";
// import Path2424 from '../Assets/images/Path 2424.svg';
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FooterLogo from "../Assets/images/headerlogo.svg";
import Youtube from "../Assets/images/yo.svg";
import Twitter from "../Assets/images/tw.svg";
import Facebook from "../Assets/images/fa.svg";
import Linkedin from "../Assets/images/in.svg";

function Footer() {
  return (
    <section id="footer">
      <div className="footer-bg-img">
        <div className="footer-body">
          <div className="footer-logo">
            <Image src={FooterLogo} fluid alt="" />
          </div>
          <div className="social-links d-flex">
            <div className="icons a">
              <a href="#">
                <Image src={Youtube} fluid alt="" />
              </a>
            </div>
            <div className="icons a">
              <a href="#">
                <Image src={Twitter} fluid alt="" />
              </a>
            </div>
            <div className="icons a">
              <a href="#">
                <Image src={Facebook} fluid alt="" />
              </a>
            </div>
            <div className="icons">
              <a href="#">
                <Image src={Linkedin} fluid alt="" />
              </a>
            </div>
          </div>
          <Form className="d-flex footer-form">
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Label>Subscribe to our newsletter</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <div className="subscribe-btn">
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </div>
          </Form>
          <div className="footer-list">
            <ul class="footer-list-ul d-flex justify-content-center">
              <li>
                <a href="#">Terms & condition</a>
              </li>
              <li>
                <a href="#">Latest News</a>
              </li>
              <li className="contact-link">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="hozi-line" />
          <div className="all-right-services">
            <p>© 2021 AnalyzerFix. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
