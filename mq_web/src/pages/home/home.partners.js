import React from "react";
import { Carousel } from "react-bootstrap";

import Marquee from "react-fast-marquee";

const HomeBusiness = () => {
  return (
    <div
      className="logos-carousel"
      style={{ marginTop: "2rem", padding: "0 2rem" }}
    >
      <Marquee className="mt-5">
        {[1, 2, 3, 4, 5, 6, 7].map((announcementts) => (
          <div className="d-flex">
            <img
              src="/person.png"
              style={{ height: "50px", width: "50px", marginRight: "1rem" }}
            />
            <img
              style={{ maxWidth: "100%", height: "100px", width: "130px" }}
              src="/logo1.png"
              alt="Logo 1"
            />
            <img
              style={{ maxWidth: "100%", height: "100px", width: "130px" }}
              src="/logo2.png"
              alt="Logo 2"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default HomeBusiness;
