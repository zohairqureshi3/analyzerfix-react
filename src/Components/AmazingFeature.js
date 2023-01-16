import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import IconCheck from "../Assets/images/Icon awesome-check.svg";
import AmazingFeatureImg from "../Assets/images/amazing-feature-img.png";
import Carousel from "react-bootstrap/Carousel";
import Detection from "../Assets/images/detection.png";
import Objects from "../Assets/images/objects.png";
import Custom from "../Assets/images/custom.png";

function AmazingFeature() {
  return (
    <section id="amazing-feature">
      <div className="bg-img-shadow">
        <Container fluid className="amazing-feature-body">
          <h1>Amazing Features</h1>
          <div className="amazing-feature-para">
            <h5>
              AnalyzerFix offers pre-trained and customizable computer vision
              (CV) capabilities to extract information and insights from your
              images and videos.
            </h5>
          </div>
          <div className="explore-feature-btn">
            <Button variant="primary">Explore Features</Button>
          </div>
          <Row className="content-moderation-row">
            <Col md={6}>
              <div className="feature-explore-wrapper">
                <h2>Content Moderation</h2>
                <div className="para--">
                  <h5>
                    Duis porta, ligula rhoncus euismod pretium, nisi tellus
                    eleifend odio, luctus viverra sem dolor id sem. Maecenas a
                    venenatis enim, quis porttitor magna. Etiam nec rhoncus
                    neque. Sed quis ultrices eros. Curabitur sit amet eros eu
                    arcu consectetur pulvinar. Aliquam sodales, turpis eget
                    tristique tempor.
                  </h5>
                </div>
                <div className="content-moderation-points">
                  <div className="point">
                    <Image src={IconCheck} fluid alt="" /> Image and video
                    moderation APIs
                  </div>
                  <div className="point">
                    <Image src={IconCheck} fluid alt="" /> Detect inappropriate
                    content
                  </div>
                  <div className="point">
                    <Image src={IconCheck} fluid alt="" /> Two-level
                    hierarchical taxonomy
                  </div>
                </div>
                <div className="view-details-btn">
                  <Button variant="primary">View Details</Button>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="bg-green-container">
                <Image src={AmazingFeatureImg} fluid alt="" />
                <div className="bg-lightgreen"></div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="slider-section">
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col md={4}>
                  <div className="slider-section-wrapper">
                    <div className="slider-img">
                      <Image src={Detection} fluid alt="" />
                    </div>
                    <h3>Text Detection</h3>
                    <h5>
                      Duis porta, ligula rhoncus euismod pretium, nisi tellus
                      eleifend odio, luctus viverra sem dolor id sem. Maecenas a
                      venenatis enim.
                    </h5>
                    <div className="view-details-btn">
                      <Button variant="primary">View Details</Button>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="slider-section-wrapper">
                    <div className="slider-img">
                      <Image src={Objects} fluid alt="" />
                    </div>
                    <h3>Objects & Scenes</h3>
                    <h5>
                      Duis porta, ligula rhoncus euismod pretium, nisi tellus
                      eleifend odio, luctus viverra sem dolor id sem. Maecenas a
                      venenatis enim.
                    </h5>
                    <div className="view-details-btn">
                      <Button variant="primary">View Details</Button>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="slider-section-wrapper">
                    <div className="slider-img">
                      <Image src={Custom} fluid alt="" />
                    </div>
                    <h3>Custom Labels</h3>
                    <h5>
                      Duis porta, ligula rhoncus euismod pretium, nisi tellus
                      eleifend odio, luctus viverra sem dolor id sem. Maecenas a
                      venenatis enim.
                    </h5>
                    <div className="view-details-btn">
                      <Button variant="primary">View Details</Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={4}>
                  <div className="slider-section-wrapper">
                    <div className="slider-img">
                      <Image src={Detection} fluid alt="" />
                    </div>
                    <h3>Text Detection</h3>
                    <h5>
                      Duis porta, ligula rhoncus euismod pretium, nisi tellus
                      eleifend odio, luctus viverra sem dolor id sem. Maecenas a
                      venenatis enim.
                    </h5>
                    <div className="view-details-btn">
                      <Button variant="primary">View Details</Button>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="slider-section-wrapper">
                    <div className="slider-img">
                      <Image src={Objects} fluid alt="" />
                    </div>
                    <h3>Objects & Scenes</h3>
                    <h5>
                      Duis porta, ligula rhoncus euismod pretium, nisi tellus
                      eleifend odio, luctus viverra sem dolor id sem. Maecenas a
                      venenatis enim.
                    </h5>
                    <div className="view-details-btn">
                      <Button variant="primary">View Details</Button>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="slider-section-wrapper">
                    <div className="slider-img">
                      <Image src={Custom} fluid alt="" />
                    </div>
                    <h3>Custom Labels</h3>
                    <h5>
                      Duis porta, ligula rhoncus euismod pretium, nisi tellus
                      eleifend odio, luctus viverra sem dolor id sem. Maecenas a
                      venenatis enim.
                    </h5>
                    <div className="view-details-btn">
                      <Button variant="primary">View Details</Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={4}>
                  <div className="slider-section-wrapper">
                    <div className="slider-img">
                      <Image src={Detection} fluid alt="" />
                    </div>
                    <h3>Text Detection</h3>
                    <h5>
                      Duis porta, ligula rhoncus euismod pretium, nisi tellus
                      eleifend odio, luctus viverra sem dolor id sem. Maecenas a
                      venenatis enim.
                    </h5>
                    <div className="view-details-btn">
                      <Button variant="primary">View Details</Button>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="slider-section-wrapper">
                    <div className="slider-img">
                      <Image src={Custom} fluid alt="" />
                    </div>
                    <h3>Custom Labels</h3>
                    <h5>
                      Duis porta, ligula rhoncus euismod pretium, nisi tellus
                      eleifend odio, luctus viverra sem dolor id sem. Maecenas a
                      venenatis enim.
                    </h5>
                    <div className="view-details-btn">
                      <Button variant="primary">View Details</Button>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="slider-section-wrapper">
                    <div className="slider-img">
                      <Image src={Objects} fluid alt="" />
                    </div>
                    <h3>Objects & Scenes</h3>
                    <h5>
                      Duis porta, ligula rhoncus euismod pretium, nisi tellus
                      eleifend odio, luctus viverra sem dolor id sem. Maecenas a
                      venenatis enim.
                    </h5>
                    <div className="view-details-btn">
                      <Button variant="primary">View Details</Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </section>
  );
}

export default AmazingFeature;
