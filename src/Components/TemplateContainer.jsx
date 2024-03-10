import sitetemplate from "../assets/sitetemplate.webp";
import designphoto from "../assets/designphoto.webp";
import responsiveimage from "../assets/responsiveimage.webp";
import "./CSS/Home.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const TemplateContainer = () => {

    useEffect(() => {
        AOS.init({ duration: 1500, once: false });
      });
    
    
  return (
    <>
      <div className="template-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1 data-aos="fade-right" style={{ color: "#5062EB" }}>
            Web Canvas
          </h1>
          <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <li
              data-aos-delay="400"
              data-aos="fade-right"
              style={{ marginLeft: "20px" }}
            >
              Unlock Your Creative Potential with <br /> Stunning Website
              Templates
            </li>

            <li
              data-aos-delay="500"
              data-aos="fade-right"
              style={{ marginLeft: "20px" }}
            >
              No Coding Skills Required!!!
            </li>
          </ul>
        </div>
        <img
          data-aos="fade-left"
          style={{ borderRadius: "20px" }}
          width="400px"
          src={sitetemplate}
          alt="a image with googlde structure"
        />
      </div>

      <div className="template-container">
        <img
          style={{ borderRadius: "20px" }}
          width="400px"
          src={designphoto}
          alt="design table adn others photo"
          data-aos="fade-right"
          data-aos-delay="400"
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1
            data-aos="fade-left"
            style={{ color: "#5062EB", marginLeft: "20px" }}
          >
            Professional Design
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="400"
            style={{ textAlign: "center" }}
          >
            Impress your visitors with a <br /> professional and modern website
          </p>
        </div>
      </div>

      <div className="template-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1
            data-aos="fade-right"
            data-aos-delay="300"
            style={{ color: "#5062EB" }}
          >
            Responsive layouts
          </h1>
          <ul style={{ marginLeft: "50px" }}>
            <li data-aos="fade-right" data-aos-delay="400">
              Our templates adapt seamlessly to different devices <br />{" "}
              (desktop, tablet, mobile)
            </li>
            <li data-aos="fade-right" data-aos-delay="700">
              Reach a wider audience with a mobile-friendly website
            </li>
          </ul>
        </div>
        <img
          style={{ borderRadius: "20px" }}
          width="400px"
          src={responsiveimage}
          alt="a image with googlde structure"
          data-aos="fade-left"
          data-aos-delay="400"
        />
      </div>
    </>
  );
};

export default TemplateContainer;
