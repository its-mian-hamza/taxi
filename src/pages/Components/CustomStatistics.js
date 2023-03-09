import React from "react";

const CustomStatistics = ({ title, description }) => {
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
      <div style={{ padding: "20px" }}>
        <p>{title}</p>
        <div
          style={{
            fontSize: "20px",
            lineHeight: "1.5em",
            color: "#f97e9b",
            fontWeight: "bold",
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default CustomStatistics;
