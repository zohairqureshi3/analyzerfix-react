import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import WorkDetail1 from "../Assets/images/WorkDetail1.svg";
import WorkDetail2 from "../Assets/images/WorkDetail2.svg";
import WorkDetail3 from "../Assets/images/WorkDetail3.svg";
import Link1 from "../Assets/images/Link1.svg";
import Link2 from "../Assets/images/Link2.svg";
import BottomShadow from "../Assets/images/BottomShadow.svg";

function HowItWorks() {
  return (
    <section id="how-it-works">
      <Container fluid>
        <div className="how-it-works-body">
          <h1>How it Works</h1>
          <div className="how-it-works-para">
            <h5>
              Proin Ex Ipsum, Facilisis Id Tincidunt Sed, Vulputate In Lacus.
              Donec Pharetra Faucibus Leo, Vitae Vestibulum Leo Scelerisque Eu.
            </h5>
          </div>
          <div className="work-details">
            <Container fluid className="work-details-body">
              <Row>
                <Col className="work-detail-col" sm={2}>
                  <div className="work-details-wrapper">
                    <div className="div-img">
                      <Image src={WorkDetail1} fluid alt="" />
                    </div>
                    <h4>Upload File</h4>
                    <p>Choose a sample or upload your own file or video</p>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className="path2400">
                    <Image src={Link1} fluid alt="" />
                  </div>
                </Col>
                <Col className="work-detail-col" sm={2}>
                  <div className="work-details-wrapper work-detail-mid-bottom">
                    <div className="div-img">
                      <Image src={WorkDetail2} fluid alt="" />
                    </div>
                    <h4>Quick Analysis</h4>
                    <p>Neque porro quisquam est qui dolorem ipsum quia</p>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className="path2401">
                    <Image src={Link2} fluid alt="" />
                  </div>
                </Col>
                <Col className="work-detail-col" sm={2}>
                  <div className="work-details-wrapper">
                    <div className="div-img">
                      <Image src={WorkDetail3} fluid alt="" />
                    </div>
                    <h4>Get Results</h4>
                    <p>Get analyzes video & detects objects for you</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Container>
      <div className="bg-white-img">
        <Image src={BottomShadow} fluid alt="" />
      </div>
    </section>
  );
}

export default HowItWorks;
