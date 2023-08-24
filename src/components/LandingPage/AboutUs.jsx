import aboutus from "../../assets/images/aboutus.jpg";
import React from "react";

function AboutUs() {
  return (
    <div name="aboutus" className="aboutus-root">
      <div className="aboutus-text">
        <h1>ABOUT US</h1>
        <p>
        We believe there is a gap in product reliability in the homeware and furniture industry; this market is accessed by word of mouth, or clients have to waste a lot of energy and money to choose and purchase furniture or homeware, our platform is to promote African-made products for the broader ordinance. We made this  e-commerce site for SMEs in the furniture and homeware industry and made it easy for them to sell their products online.
        </p>
      </div>
      <div className="aboutus-img">
        <img src={aboutus} />
      </div>
    </div>
  );
}

export default AboutUs;
