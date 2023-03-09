import React from "react";
import { Button, Col, Row } from "antd";

const Hero = () => {
  return (
    <div>
      <section
        className="hero"
        style={{
          backgroundImage: "url(images/hero-bg.png)",
          width: "100%",
          height: "100vh",
          minHeight: "800px",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <Row gutter={10} style={{ alignItems: "center" }}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h1>We offer modern solutions for growing your business</h1>
              <h5>
                We are team of talented designers making websites with React.
              </h5>
              <Button type="primary" size="large">
                Download Plain
              </Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <img
                src="images/hero-img.png"
                style={{ width: "100%", height: "auto" }}
                alt="Hero"
              />
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Hero;
