import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const Foot = () => {
  return (
    <Layout>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Foot;
