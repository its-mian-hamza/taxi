import "./Header.css";
import React from "react";
import Link from "antd/es/typography/Link";

const Header = () => {
  return (
    <section
      style={{
        position: "fixed",
        top: 0,
        zIndex: 1,
        width: "100%",
        padding: "20px 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="main_logo">
            <img src="images/main-logo.png" alt="main logo" />
          </div>
          <div className="main_menu">
            <Link>Introduction</Link>
            <Link>Features</Link>
            <Link>Tokenomics</Link>
            <Link>Roadmap</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
