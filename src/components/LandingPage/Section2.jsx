import teamyoung from "../../assets/images/teamyoung.avif"
import connect from "../../assets/images/connect.png";
import delivery from "../../assets/images/delivery2.png";
import waste from "../../assets/images/waste.png";
import variety from "../../assets/images/variety.jpg";
import React, { useRef, useEffect } from "react";

function Section2() {
  const fadeIns = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      fadeIns.current.forEach((fadeIn) => {
        const fadeInPosition = fadeIn.offsetTop;

        if (scrollPosition > fadeInPosition - windowHeight / 1) {
          fadeIn.classList.add("active");
        } else {
          fadeIn.classList.remove("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div name="why-qusaqus" className="page3-cards">
      <div>
        <h2>WHY QusaQus</h2>
      </div>
      <div
        className="page3-card card-1 fade-in"
        ref={(el) => (fadeIns.current[0] = el)}
      >
        <div className="page3-text">
          <h2>Easy Comparison</h2>
          <p>
          Compare products side by side, including features, prices, and customer ratings and delivery options
          </p>
        </div>
        <img src={teamyoung} />
      </div>
      <div
        className="page3-card card-2 fade-in"
        ref={(el) => (fadeIns.current[1] = el)}
      >
        <div className="page3-text">
          <h2>Convenience</h2>
          <p>
          Shop from the comfort of your home, saving time and effort.
          </p>
        </div>
        <img src={connect} />
      </div>
      <div
        className="page3-card card-3 fade-in"
        ref={(el) => (fadeIns.current[2] = el)}
      >
        <div className="page3-text">
          <h2>Variety</h2>
          <p>
          Access a vast selection of furniture options, styles, colors, and materials.
          </p>
        </div>
        <img src={waste} />
      </div>
      <div
        className="page3-card card-4 fade-in"
        ref={(el) => (fadeIns.current[3] = el)}
      >
        <div className="page3-text">
          <h2>Convenient delivery </h2>
          <p>
              Arrange for pick-up and delivery of items,
            saving you time and hassle.
          </p>
        </div>
        <img src={delivery} />
      </div>
      <div
        className="page3-card card-5 fade-in"
        ref={(el) => (fadeIns.current[4] = el)}
      >
        <div className="page3-text">
          <h2>24/7 Availability</h2>
          <p>
          Shop anytime, day or night, without being restricted by store hours.
          </p>
        </div>
        <img src={variety} />
      </div>
    </div>
  );
}

export default Section2;
