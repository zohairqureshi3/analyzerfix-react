import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import FaceCompareImg from "../Assets/images/face-compare-img.png";
import IconCheck from "../Assets/images/Icon awesome-check.svg";

function FaceCompare() {
  return (
    <section id="face-compare">
      <Container fluid className="face-compare-container">
        <Row>
          <Col md={6} className="face-detection-col-1">
            <div className="face-container-wrapper">
              <Image src={FaceCompareImg} fluid alt="" />
            </div>
            <div className="white-bg-text">
              <h4>Determine the similarity</h4>
              <p>
                Get information about where faces are detected in an image or
                video, facial landmarks such as the position of eyes, and
                detected emotions
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="face-container-wrapper description">
              <h1>Face Compare And Search</h1>
              <div className="face-compare-para">
                <h5>
                  Detect Faces Appearing In Images And Videos And Recognize
                  Attributes Such As Open Eyes, Glasses, And Facial Hair For
                  Each.
                </h5>
              </div>
              <div className="face-compare-points">
                <div className="point">
                  <Image src={IconCheck} fluid alt="" /> Detect faces in images
                  & videos
                </div>
                <div className="point">
                  <Image src={IconCheck} fluid alt="" /> Area information
                </div>
                <div className="point">
                  <Image src={IconCheck} fluid alt="" /> Emotions detection
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FaceCompare;
