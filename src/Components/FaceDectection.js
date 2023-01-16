import React from "react";
import UpperShadow from "../Assets/images/UpperShadow.svg";
import FaceDetectionImg from "../Assets/images/face-detection.png";
import Image from "react-bootstrap/Image";

function FaceDectection() {
  return (
    <section id="face-detection">
      <div className="face-detection-body">
        <div className="upper-bg-white">
          <Image src={UpperShadow} fluid alt="" />
        </div>
        <div className="face-detection-img">
          <Image src={FaceDetectionImg} fluid alt="" />
        </div>
        <div className="face-dection-details">
          <h1>Face Detection & Analysis</h1>
          <div className="face-detection-para">
            <h5>
              Detect Faces Appearing In Images And Videos And Recognize
              Attributes Such As Open Eyes, Glasses, And Facial Hair For Each.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaceDectection;
