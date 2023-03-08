import "./Hero.css";
import React from "react";
import { Button, Col, Row } from "antd";

const Hero = () => {
  return (
    <div>
      <section
        className="hero"
        style={{ backgroundImage: "url(images/hero-bg.png)" }}
      >
        <div className="container">
          <Row gutter={10}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              {/* <h1>We offer modern solutions for growing your business</h1>
              <h2>
                We are team of talented designers making websites with Bootstrap
              </h2> */}
              <h1>H1 heading H1 heading H1 heading H1 heading</h1>
              <h2>H2 heading</h2>
              <h3>H3 heading</h3>
              <h4>H4 heading</h4>
              <h5>H5 heading</h5>
              <h6>H6 heading</h6>
              <p>We are team of talented designers making websites with</p>
              <Button type="primary" size="large">
                <span>Get Started</span>
              </Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <img
                src="images/hero-img.png"
                className="hero_img"
                alt="hero-img"
              />
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Hero;
