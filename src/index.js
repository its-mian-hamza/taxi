import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App";
import "./index.css";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#F3AEBE",
          colorLink: "#F3AEBE",
          colorSuccess: "#52c41a",
          colorWarning: "#faad14",
          colorError: "#f5222d",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
