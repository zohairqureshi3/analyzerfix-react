import React from "react";
import Image from "react-bootstrap/Image";
import Banner from "../Assets/images/banner.png";

function Bannerr() {
  return (
    <section id="banner">
      <div className="banner-img">
        <Image src={Banner} fluid />
      </div>
    </section>
  );
}

export default Bannerr;
