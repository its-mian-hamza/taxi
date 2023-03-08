import React from "react";

const CustomCard = ({ image, title, description }) => {
  return (
    <div
      className="custom_card"
      style={{
        textAlign: "center",
        background: "#ffffff",
        transition: "0.3s",
        height: "100%",
      }}
    >
      <div
        className="card_head"
        style={{ paddingTop: "30px", paddingBottom: "20px" }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            maxWidth: "70%",
            transition: "0.5s",
          }}
        />
      </div>
      <div className="card_body" style={{ padding: "20px" }}>
        <div
          className="card_title"
          style={{
            fontSize: "20px",
            lineHeight: "1.5em",
            color: "#f3aebe",
            fontWeight: "bold",
          }}
        >
          {title}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CustomCard;
