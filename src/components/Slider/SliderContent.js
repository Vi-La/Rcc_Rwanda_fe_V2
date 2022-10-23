import React from "react";
import { Fade } from "react-reveal";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image object-cover rounded-xl" src={slide.urls} alt="contentImage" />
          <Fade right>
            <h2 className="slide-title text-3xl">{slide.title}</h2>
          </Fade>
          <Fade left>
            <h3 className="slide-text">{slide.description}</h3>
          </Fade>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
